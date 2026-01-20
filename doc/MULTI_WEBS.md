# Hosting Multiple Websites on Hetzner with Docker Compose

Complete guide to hosting multiple static websites on a single Hetzner VPS using Docker, Nginx, and Traefik (automatic SSL).

---

## Table of Contents

1. [Repository Structure](#repository-structure)
2. [Hetzner VPS Setup](#hetzner-vps-setup)
3. [Server Configuration](#server-configuration)
4. [Docker Compose Setup](#docker-compose-setup)
5. [Adding a New Website](#adding-a-new-website)
6. [Deployment](#deployment)
7. [Maintenance](#maintenance)

---

## Repository Structure

```
websites/
├── docker-compose.yml          # Main orchestration file
├── traefik/
│   └── traefik.yml             # Traefik configuration
├── sites/
│   ├── joga-konstancin.pl/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── example-site.com/
│   │   ├── index.html
│   │   └── ...
│   └── another-site.pl/
│       └── ...
├── nginx/
│   └── default.conf            # Shared Nginx config
├── deploy.sh                   # Deployment script
└── doc/
    └── MULTI_WEBS.md           # This file
```

---

## Hetzner VPS Setup

### 1. Create a Server

1. Go to [console.hetzner.cloud](https://console.hetzner.cloud)
2. Click **Add Server**
3. Choose:
   - **Location**: Falkenstein (cheapest) or closest to your users
   - **Image**: Ubuntu 24.04
   - **Type**: CX22 (€4.35/month) - sufficient for 10+ static sites
   - **SSH Key**: Add your public key (recommended) or use password

4. Note your server IP address

### 2. Point Your Domains

For each domain, add DNS records pointing to your server IP:

```
Type  Name    Value
A     @       YOUR_SERVER_IP
A     www     YOUR_SERVER_IP
```

---

## Server Configuration

### 1. Connect to Server

```bash
ssh root@YOUR_SERVER_IP
```

### 2. Initial Setup

```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh

# Install Docker Compose
apt install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version

# Create directory for websites
mkdir -p /opt/websites
cd /opt/websites
```

### 3. Configure Firewall

```bash
# Install UFW
apt install ufw -y

# Allow SSH, HTTP, HTTPS
ufw allow 22
ufw allow 80
ufw allow 443

# Enable firewall
ufw enable
```

---

## Docker Compose Setup

### 1. Main docker-compose.yml

Create `/opt/websites/docker-compose.yml`:

```yaml
version: "3.8"

services:
  # Traefik - Reverse Proxy & SSL
  traefik:
    image: traefik:v3.0
    container_name: traefik
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./traefik/traefik.yml:/etc/traefik/traefik.yml:ro
      - ./traefik/acme.json:/acme.json
    networks:
      - web

  # Site 1: joga-konstancin.pl
  joga-konstancin:
    image: nginx:alpine
    container_name: joga-konstancin
    restart: always
    volumes:
      - ./sites/joga-konstancin.pl:/usr/share/nginx/html:ro
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.joga.rule=Host(`joga-konstancin.pl`) || Host(`www.joga-konstancin.pl`)"
      - "traefik.http.routers.joga.entrypoints=websecure"
      - "traefik.http.routers.joga.tls.certresolver=letsencrypt"
      # Redirect www to non-www
      - "traefik.http.middlewares.joga-www.redirectregex.regex=^https://www\\.joga-konstancin\\.pl/(.*)"
      - "traefik.http.middlewares.joga-www.redirectregex.replacement=https://joga-konstancin.pl/$${1}"
      - "traefik.http.routers.joga.middlewares=joga-www"
    networks:
      - web

  # Site 2: example-site.com (copy this block for each new site)
  # example-site:
  #   image: nginx:alpine
  #   container_name: example-site
  #   restart: always
  #   volumes:
  #     - ./sites/example-site.com:/usr/share/nginx/html:ro
  #     - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
  #   labels:
  #     - "traefik.enable=true"
  #     - "traefik.http.routers.example.rule=Host(`example-site.com`) || Host(`www.example-site.com`)"
  #     - "traefik.http.routers.example.entrypoints=websecure"
  #     - "traefik.http.routers.example.tls.certresolver=letsencrypt"
  #   networks:
  #     - web

networks:
  web:
    name: web
```

### 2. Traefik Configuration

Create `/opt/websites/traefik/traefik.yml`:

```yaml
# Traefik Configuration

api:
  dashboard: false  # Set to true + add auth for debugging

entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https

  websecure:
    address: ":443"

providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    exposedByDefault: false
    network: web

certificatesResolvers:
  letsencrypt:
    acme:
      email: your-email@example.com  # CHANGE THIS!
      storage: /acme.json
      httpChallenge:
        entryPoint: web
```

### 3. Create ACME Storage File

```bash
touch /opt/websites/traefik/acme.json
chmod 600 /opt/websites/traefik/acme.json
```

### 4. Nginx Configuration

Create `/opt/websites/nginx/default.conf`:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback (optional - for single page apps)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

### 5. Create Sites Directory

```bash
mkdir -p /opt/websites/sites/joga-konstancin.pl
```

---

## Adding a New Website

### 1. Create Site Directory

```bash
mkdir -p /opt/websites/sites/new-site.com
```

### 2. Add to docker-compose.yml

Add a new service block:

```yaml
  new-site:
    image: nginx:alpine
    container_name: new-site
    restart: always
    volumes:
      - ./sites/new-site.com:/usr/share/nginx/html:ro
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.newsite.rule=Host(`new-site.com`) || Host(`www.new-site.com`)"
      - "traefik.http.routers.newsite.entrypoints=websecure"
      - "traefik.http.routers.newsite.tls.certresolver=letsencrypt"
    networks:
      - web
```

### 3. Deploy

```bash
docker compose up -d
```

Traefik will automatically obtain SSL certificates for the new domain.

---

## Deployment

### Option 1: Simple Script (deploy.sh)

Create `deploy.sh` in your local repo:

```bash
#!/bin/bash
set -e

SERVER="root@YOUR_SERVER_IP"
REMOTE_PATH="/opt/websites"

echo "🚀 Deploying websites..."

# Sync all sites
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '*.md' \
    ./sites/ $SERVER:$REMOTE_PATH/sites/

# Sync config files
rsync -avz docker-compose.yml $SERVER:$REMOTE_PATH/
rsync -avz nginx/ $SERVER:$REMOTE_PATH/nginx/
rsync -avz traefik/traefik.yml $SERVER:$REMOTE_PATH/traefik/

# Restart containers
ssh $SERVER "cd $REMOTE_PATH && docker compose up -d"

echo "✅ Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

Run:

```bash
./deploy.sh
```

### Option 2: GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Websites

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Hetzner
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SERVER_IP }}
          username: root
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /opt/websites
            git pull origin main
            docker compose up -d

      - name: Sync files
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.SERVER_IP }}
          username: root
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "sites/*"
          target: "/opt/websites/"
```

Add these secrets to your GitHub repo (Settings → Secrets):
- `SERVER_IP`: Your Hetzner server IP
- `SSH_PRIVATE_KEY`: Your private SSH key

---

## Maintenance

### View Running Containers

```bash
docker ps
```

### View Logs

```bash
# All logs
docker compose logs -f

# Specific site
docker logs -f joga-konstancin

# Traefik logs
docker logs -f traefik
```

### Restart All Services

```bash
cd /opt/websites
docker compose restart
```

### Update Containers

```bash
cd /opt/websites
docker compose pull
docker compose up -d
```

### Check SSL Certificates

```bash
# View certificates
cat /opt/websites/traefik/acme.json | jq '.letsencrypt.Certificates[].domain'

# Or check via browser - click the padlock icon
```

### Backup

```bash
# Backup all sites
tar -czvf websites-backup-$(date +%Y%m%d).tar.gz /opt/websites/sites/

# Backup SSL certificates
cp /opt/websites/traefik/acme.json ~/acme-backup.json
```

### Server Updates

```bash
apt update && apt upgrade -y
docker system prune -af  # Clean unused Docker resources
```

---

## Troubleshooting

### Site Not Loading

1. Check DNS propagation: `dig your-domain.com`
2. Check container is running: `docker ps`
3. Check Traefik logs: `docker logs traefik`
4. Verify labels in docker-compose.yml

### SSL Certificate Issues

1. Ensure port 80 is open (Let's Encrypt needs it)
2. Check acme.json permissions: `chmod 600 traefik/acme.json`
3. Wait a few minutes for certificate generation
4. Check Traefik logs for errors

### 502 Bad Gateway

1. Container crashed - restart: `docker compose restart`
2. Check site container logs: `docker logs site-name`

### Permission Denied

```bash
chown -R root:root /opt/websites
chmod -R 755 /opt/websites/sites
```

---

## Cost Summary

| Item | Monthly Cost |
|------|-------------|
| Hetzner CX22 VPS | ~€4.35 |
| Domain (.pl) | ~€10/year |
| SSL Certificates | Free (Let's Encrypt) |
| **Total** | **~€5/month** for unlimited sites |

---

## Quick Reference

```bash
# Deploy
./deploy.sh

# SSH to server
ssh root@YOUR_SERVER_IP

# Start all
docker compose up -d

# Stop all
docker compose down

# View logs
docker compose logs -f

# Restart
docker compose restart

# Add new site
# 1. Create folder in sites/
# 2. Add service to docker-compose.yml
# 3. Run: docker compose up -d
```
