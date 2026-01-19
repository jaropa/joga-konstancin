# JOGA KONSTANCIN - Complete Website Documentation

## Overview
Joga Konstancin (joga konstancin.pl) is a Polish yoga studio website built with early 2000s web technologies. The site features a frameset-based layout with dedicated frames for music playback and main content navigation. It showcases yoga classes, teacher profiles, pricing, and a DVD shop.

---

## Website Structure & Architecture

### Technical Stack
- **Backend**: PHP
- **Layout**: HTML Framesets (2 frames)
- **Styling**: CSS (3 external stylesheets)
- **Scripting**: JavaScript (Menu system)
- **Color Scheme**: Dark red/brown (#760004, #600) with cream accents (#e0d5b1)

### Frame Structure
```
index.html (Frameset Container)
├── Frame 1: "music" → music.html (Music player frame)
└── Frame 2: "main" → index.php (Content frame)
```

### CSS Files
1. **style.css** - Main styling (layout, colors, typography)
2. **menu.css** - Navigation menu styling
3. **lightbox.css** - Lightbox modal dialog styling

---

## Visual Design & Styling

### Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Red | #760004 |
| Primary Accent | Brown Red | #d05300 |
| Menu Background | Dark Brown | #600 |
| Text Links | Dark Red | #900 |
| Main Text | Dark Gray | #515154 |
| Cream Background | Light Cream | #e0d5b1 |
| Accent Text | Reddish | #b3b092 |

### Typography
- **Font Family**: Verdana, Arial, Helvetica, sans-serif
- **Body Font Size**: 12px
- **Link Font Size**: 13px
- **Menu Font Size**: 14px
- **Submenu Font Size**: 10px

### Layout Dimensions
- **Main Width**: 820px
- **Body Width**: 800px
- **Content Area**: 780px (with 10px padding)
- **Logo Height**: 150px
- **Main Content Area Height**: 600px (default)

### Visual Elements
- **Logo**: 800x150px image (logo.gif)
- **Background Images**:
    - Top border (top.gif)
    - Body repeat pattern (body.gif)
    - Bottom border (bottom.gif)
    - Main content mandala (mandala.gif)
    - Corner flower accent (kwiat.jpg)

---

## Navigation System

### Main Navigation Menu (9 Pages)

| Link | Page ID | URL | Description |
|------|---------|-----|-------------|
| Home | page=1 | index.php?page=1 | Homepage with welcome message |
| O nas | page=2 | index.php?page=2 | About the yoga studio and teacher profiles |
| Zajęcia | page=3 | index.php?page=3 | Class schedule and descriptions |
| Cennik | page=4 | index.php?page=4 | Pricing information |
| Czytelnia | page=6 | index.php?page=6 | Reading room / Educational articles |
| Gabinet | page=7 | index.php?page=7 | Osteopathy services with Dr. Maciej Piłatowicz |
| Kontakt | page=8 | index.php?page=8 | Contact information and newsletter signup |
| Aktualności | page=9 | index.php?page=9 | News and announcements |
| Sklepik | page=10 | index.php?page=10 | DVD shop for yoga spine exercises |

### Navigation Features
- **Dual Navigation**: Top and bottom navigation bars for redundancy
- **Active State Support**: Menu system tracks current page
- **Submenu Support**: Dropdown menus available (menu0 system)
- **Internal Links**: Quick links to popular sections (news, classes, contact, shop)

---

## Page Content Details

### Page 1: Home (index.php?page=1)
**Content**: Welcome page with minimal text content  
**Purpose**: Landing page introduction  
**Key Features**:
- Centered layout with mandala background image
- Navigation visible on top and bottom
- Calls to action for class schedule, contact info, shop

---

### Page 2: O nas (About Us) - (index.php?page=2)

**Content**: Detailed teacher profiles

#### Teachers Listed:

##### 1. Beata Piłatowicz
- **Background**: Economist (Zachodniopomorska School of Business, Warsaw School of Economics)
- **Yoga Experience**: Iyengar yoga practitioner since 2000, Introductory II level
- **Specialization**: Prenatal and postnatal yoga
- **Personal**: Married, mother of two daughters (Victoria and Kai)

##### 2. Beata Kowalczyk
- **Background**: Physiotherapist, rehabilitation specialist II level (Physical Education Academy in Warsaw)
- **Experience**: Works at Warsaw Rehabilitation Center since 1992
- **Specialization**: Spine dysfunction prevention and treatment
- **Certifications**: Recreation movement instructor (hatha-yoga based)
- **Teaching Style**: Detailed, demanding, takes time with students
- **Other**: Badminton enthusiast

##### 3. Marta Chmielewska-Racławska
- **Qualification**: Iyengar yoga teacher (Junior I), Post-graduate Relaxation & Yoga studies (AWF Warsaw)
- **Experience**: Yoga practitioner since 2006
- **Notable**: Attended 3-week course in India led by Rajiva and Swati Chanchanich

##### 4. Dominika Trabczyńska
- **Background**: Mathematics teacher
- **Training**: B.K.S. Iyengar method instructor
- **Development**: Mentorship with Natasha Moszkowicz, workshops with renowned teachers
- **Study**: Ramamani Iyengar Memorial Yoga Institute in Pune, India
- **Teaching Focus**: Balance between understanding and feeling, respect for body

##### 5. Dorota Wacek-Kozakiewicz
- **Qualification**: Iyengar yoga teacher (Junior Intermediate II)
- **Background**: International culturologist and cultural animator
- **Training Path**: Started 2008 with Konrad Kocot, followed by Katarzyna Pilorz, Ewa Wardzała, Natasha Moszkowicz
- **Study Locations**: Ramamani Iyengar Institute (Pune), B.K.S. Iyengar Institute (New York)
- **Philosophy**: Yoga and meditation for self-discovery
- **Interests**: Travel, nature

---

### Page 3: Zajęcia (Classes) - (index.php?page=3)

**Class Schedule Structure**:
- Difficulty Levels: Beginner, General, Beginner/General
- Special notation: "zbieramy zapisy" (collecting sign-ups)

#### Weekly Schedule:

##### Monday
- 08:30-10:00 | Joga Iyengara | Beata P. (Beginner)
- 17:00-18:30 | Joga Iyengara | Marta (General)
- 19:00-20:30 | Joga Iyengara | Dominika (General)

##### Tuesday
- 08:30-10:00 | Joga Iyengara | Beata P. (Beginner)
- 10:15-11:45 | Joga Łagodna (Gentle Yoga) | Marta (General)
- 19:00-20:15 | Joga Iyengara (Online) | Dominika (General)
- 19:00-20:30 | Joga Iyengara | Dorota (General)

##### Wednesday
- 08:30-10:00 | Joga Iyengara | Beata P. (Beginner)
- 17:30-18:45 | Joga Kręgosłupa (Spine Yoga) | Dominika (Beginner/General)
- 19:00-20:30 | Joga Iyengara | Dominika (General)

##### Thursday
- 08:30-10:00 | Joga Iyengara | Beata P. (Beginner)
- 10:15-11:45 | Joga Łagodna (Gentle Yoga) | Marta (General)

##### Friday
- 08:30-10:00 | Joga Iyengara | Beata P. (Beginner)
- 17:00-18:30 | Joga Iyengara | Marta (General)

#### Class Types Offered:
1. Joga Iyengara (Iyengar Yoga)
2. Joga Łagodna (Gentle Yoga)
3. Joga Kręgosłupa (Spine/Back Yoga)
4. Online classes (at least one option available)

#### Special Notes:
- Holiday schedule available (summer vacation schedule - August)
- September schedule update available
- Class descriptions provided for different skill levels

---

### Page 4: Cennik (Pricing) - (index.php?page=4)

#### General Admission Pricing:

| Package | Students/Kids | General Public |
|---------|--------------|-----------------|
| Single Entry | 50 zł | 60 zł |
| 4 Sessions | 200 zł | 220 zł |
| 6 Sessions | 240 zł | 270 zł |
| 8 Sessions | 290 zł | 320 zł |
| 12 Sessions | 380 zł | 420 zł |
| 12+ Sessions | 400 zł | 440 zł |
| Extra Entry (with pass) | 35 zł | 40 zł |

#### Discount Categories:
- Seniors/Pensioners: 10-20 PLN discount on most packages
- Students/Pupils: 10-20 PLN discount on most packages

#### Pass Validity Rules:
- Standard passes: Valid 35 days (4 weeks + 1 week)
- Extended passes (12+ sessions): Valid 28 days (4 weeks)
- Passes valid for only ONE selected teacher
- Maximum 1 session per day
- **Unused sessions DO NOT transfer to next month**

#### Special Services:
- Individual lessons: Price negotiated with teacher

#### Important Policy:
- New pass system allows more flexibility with single session options
- Extended validity period reduces need for "makeup" sessions

---

### Page 6: Czytelnia (Reading Room/Library) - (index.php?page=6)

**Featured Article**: "Joga działa przeciwzapalnie" (Yoga acts anti-inflammatory)

#### Article Summary:
- **Source**: www.naukawpolsce.pap.pl (Science in Poland)
- **Key Finding**: Regular yoga practice reduces systemic inflammation
- **Journal**: Psychosomatic Medicine

#### Scientific Details:
- **Study**: Ohio State University research
- **Key Marker**: Interleukin-6 (IL-6) levels in blood
- **Finding**: Women practicing yoga regularly have lower IL-6 levels
- **IL-6 Role**: Triggers inflammatory responses in body
- **Health Connection**: High IL-6 linked to heart disease, stroke, type 2 diabetes, arthritis, age-related diseases

#### Expert Quotes:
- **Prof. Bill Malarkey**: "Stretching and poses increase body elasticity, reducing tension and stress"
- **Prof. Ron Glaser** (virologist/immunologist/geneticist): "Yoga appears to be a simple and enjoyable way to reduce risk of heart disease, diabetes, and age-related conditions"

#### Educational Purpose:
- Demonstrates scientific benefits of yoga practice
- Supports yoga studio's credibility
- Educates potential clients on health benefits

---

### Page 7: Gabinet (Cabinet/Services) - (index.php?page=7)

**Service Provider**: Maciej Piłatowicz, D.O. (Osteopath)

#### Professional Credentials:
- **Education**: Sutherland College of Osteopathic Medicine (SCOM)
- **Certification**: D.O. (Doctor of Osteopathy)

#### Specializations:
1. Acute and chronic back pain
2. Migraines
3. Postural defects in children and adults:
    - Scoliosis
    - Round back
    - Swayback
    - Flat feet
    - Bowlegs/knock knees
4. Degenerative joint disorders (acute/chronic arthritis)
5. Sports injuries
6. Digestive disorders

#### Services & Pricing:
- **Single Consultation**: 250 PLN
- **High-energy Laser (HIL) Therapy**: 50 PLN per session
- **Appointments**: By prior arrangement

#### Contact:
+48 505 047 648

---

### Page 8: Kontakt (Contact) - (index.php?page=8)

#### Studio Location:
- **Address**: ul. Warszawska 27, 05-520 Konstancin-Jeziorna
- **Email**: info.jogakonstancin@gmail.com

#### Teacher Contact Numbers:

| Teacher | Phone Number |
|---------|--------------|
| Beata Piłatowicz | +48 505 047 638 |
| Beata Kowalczyk | +48 504 512 465 |
| Dominika Trabczyńska | +48 604 152 992 |
| Dorota Wacek-Kozakiewicz | +48 695 386 331 |
| Marta Chmielewska | +48 508 544 254 |

#### Newsletter Subscription:
- Users can subscribe to mailing list
- Receive updates on website news and studio activities
- Form includes email input field
- Verification image for security

#### Key Features:
- Direct contact with individual teachers
- Central studio contact point
- Email communication option
- Mailing list for ongoing updates

---

### Page 9: Aktualności (News/Updates) - (index.php?page=9)

**Current Announcement**: Location Details and Parking Information

#### Building Information:
- **Located at**: Warszawska 27 (Main building)
- **Address**: 05-520 Konstancin-Jeziorna

#### Parking Details:
- On-site parking available on property
- "Plac Zabaw i Rozwoju" (Play and Development Square) section:
    - Open mesh board surface + grass areas
    - Designated parking spots
- Additional parking around property perimeter

#### Studio Room Location:
- **Floor**: 1st floor (I piętro)
- **Position**: Left side
- **Clear directional signs**: Provided

#### Parking Restrictions:
- **DO NOT PARK** before 5 PM (17:00) in spaces just inside gate on left side
- These spaces belong to another business

#### Access Instructions:
- Detailed maps provided with building and entrance marked
- Clear gate entrance marked
- Entrance highlighted in maps

#### Note:
This page contains helpful visitor information essential for first-time attendees

---

### Page 10: Sklepik (Shop) - (index.php?page=10)

**Main Product**: DVD "Joga Kręgosłupa" (Spine Yoga)

#### Product Description:
- **Target Audience**: People suffering from back pain
- **Market Statistics**: 85% of population suffers from back pain
- **Problem Addressed**: Back pain is now a civilization disease
- **Causes**: Sedentary lifestyle, stress, lack of movement, obesity
- **Solution**: Safe and effective exercise program on DVD

#### Creator & Credentials:
- **Name**: Maciej Piłatowicz
- **Qualifications**:
    - Master's degree in rehabilitation
    - Manual therapist
    - B.K.S. Iyengar yoga teacher
    - Member of Polish Physical Therapy Association
    - Member of Polish Iyengar Yoga Association
    - Specializes in spine dysfunction treatment and prevention

#### Program Details:
- **Content**: 16 yoga postures
- **Duration**: 55 minutes
- **Features**:
    - Precise instruction and clear presentation
    - Focuses on restoring muscle tension balance
    - Corrects postural defects
    - Teaches body awareness
    - Includes relaxation and breathing techniques
    - Safe home exercise without equipment
    - Based on latest scientific knowledge

#### DVD Features:
- Only Polish-market product specifically for back pain
- Designed for Polish audience and context
- Professional quality production

#### Ordering Information:

**Price**: 35 PLN

**Shipping Options**:
1. Standard Shipping: 40 PLN total (35 + 5 shipping)
2. Priority Shipping: 41 PLN total (35 + 6 shipping)
3. Cash on Delivery: 46 PLN total (35 + 11 shipping)

**Bulk Discount**:
- 5+ copies: FREE shipping

#### Ordering Process:
1. Fill out order form with:
    - Full name (required)
    - Last name (required)
    - Street address (required)
    - House/apartment number (required)
    - Postal code (required)
    - City/town (required)
    - Phone number (required)
    - Quantity (required)
    - Email (required)
    - Comments (optional)

2. Choose payment method:
    - Bank transfer (payment required before shipping)
    - Cash on delivery (pay upon receipt)

#### Bank Account Details (for transfers):
- **Account Holder**: Maciej Piłatowicz
- **Address**: ul. Kołobrzeska 52C/12, 05-510 Konstancin-Jeziorna
- **Bank**: Lukas Bank
- **Account**: 74 1940 1076 5000 7336 0000 0000

#### Order Processing:
- Processing time: Up to 14 days
- Payment must clear before DVD ships
- Form must include complete address information

#### Shop Features:
- Product presentation video available
- Order form available
- Multiple payment options
- Contact info: info@jogakonstancin.pl for questions/complaints

---

## Interactive Elements & Forms

### Newsletter Subscription Form (Page 8)
**Purpose**: Collect email for mailing list  
**Fields**:
- Email address input
- Security image verification

### DVD Order Form (Page 10)

**Fields** (marked * = required):
- Imię (First Name) *
- Nazwisko (Last Name) *
- Ulica (Street) *
- Nr domu/mieszkania (House/Apartment Number) *
- Kod pocztowy (Postal Code) *
- Miejscowość (City) *
- Telefon (Phone) *
- Ilość sztuk (Quantity) *
- E-mail *
- Komentarz (Comments - optional)

**Functionality**:
- Dropdown selection for shipping method
- Bank account display option
- Submit button triggers order processing

---

## JavaScript Functionality

### Menu System
```javascript
new Menu('menu0', '', false, true);
```

- **Library**: Likely a custom menu system
- **Initialization**: Applied to navigation elements
- **Features**:
    - Dynamic menu generation
    - Hover states
    - Active page tracking
    - Dropdown support

### Image Libraries Loaded
- **Lightbox.js**: Modal image viewing
- **Loading.gif**: 32x32px loading indicator
- **Closelabel.gif**: 66x22px close button

---

## Image Resources

### Navigation Elements

| Filename | Dimensions | Purpose |
|----------|-----------|---------|
| przycisk.gif | 130x30px | Navigation button graphic (multiple) |

### Lightbox Modal

| Filename | Dimensions | Purpose |
|----------|-----------|---------|
| loading.gif | 32x32px | Loading spinner |
| closelabel.gif | 66x22px | Close button label |

### Layout & Design Elements

| Filename | Purpose |
|----------|---------|
| top.gif | Top border decoration |
| body.gif | Repeating background pattern |
| bottom.gif | Bottom border decoration |
| logo.gif | Header logo (800x150px) |
| mandala.gif | Home page background image |
| kwiat.jpg | Flower accent image (bottom right) |

---

## Key Website Features Summary

### Core Functionality
- Multi-page navigation system with PHP page routing
- Dynamic class schedule display
- Pricing information with discount categories
- Teacher profile database
- Contact information management
- Newsletter subscription system
- Product ordering system (DVD shop)
- Service booking information (osteopathy)
- Educational content (article library)

### User Experience Features
- Responsive navigation menus
- Email newsletter signup
- Multiple contact methods (phone, email)
- Parking and location information
- Class schedule with filters
- Product descriptions and ordering
- Teacher credentials display

### Design Features
- Consistent branding with logo and colors
- Professional layout (820px width - optimized for 2000s web)
- Readable typography hierarchy
- Decorative elements (mandala, flower accents)
- Clear navigation structure
- Visual separation of content sections

---

## Browser Compatibility & Notes

### Technology Notes
- **CSS**: CSS 2.0 era styling
- **HTML**: HTML 4.0 with framesets (deprecated in HTML5)
- **JavaScript**: ES3/ES5 compatible
- **Target Users**: Polish yoga students and clients
- **Device Target**: Desktop browsers (fixed 820px width)

### Deprecated Features
- HTML Framesets (replaced with iframe or CSS layout in modern web)
- Flash player references in articles
- Fixed pixel dimensions (not responsive)

---

## Content Management Approach

### Data Structure
- **Page System**: URL parameters (page=X) route to different content sections
- **Database Likely Used**: Teacher profiles, class schedules stored in database
- **Static Pages**: Home, contact info relatively static
- **Dynamic Content**: Class schedules may pull from database

### Update Points
- Class schedule (seasonal updates visible - summer/autumn schedules)
- News/announcements section
- Teacher contact information
- Pricing information

---

## Marketing & Business Information

### Yoga School Positioning
- Specializes in B.K.S. Iyengar yoga method
- Offers multiple class levels (beginner, general, gentle, specialized)
- Employs 5 certified yoga teachers
- Offers ancillary services (osteopathy, DVD products)
- Located in Konstancin-Jeziorna suburb
- Targets both individuals and therapeutic/rehabilitation clients

### Revenue Streams
1. Class passes and memberships
2. Individual lessons
3. Osteopathy services
4. DVD product sales
5. Potential corporate classes (implied by multiple time slots)

### Community Building
- Newsletter for ongoing engagement
- Multiple teacher options for student choice
- Special class types (gentle yoga, spine-focused)
- Educational content (scientific articles)
- Mailing list for community communication

---

## Recommendations for Recreation

To fully recreate this website, you would need:

### 1. Backend
PHP application for:
- Page routing (index.php?page=X system)
- Newsletter subscription management
- Order processing for DVD shop

### 2. Frontend
- HTML frameset or modern frame replacement
- CSS stylesheets (3 total)
- JavaScript menu system

### 3. Assets
- All image files (7+ graphics files)
- Logo and branding assets
- Background images

### 4. Content Database
- Teacher profiles
- Class schedules
- Pricing tiers
- Product information

### 5. Features to Implement
- Contact form with email validation
- Order form with payment integration
- Newsletter signup system
- Lightbox image viewer
- Responsive menu system

---

## File Structure for Recreation
```
/joga-konstancin/
├── index.html (Main frameset)
├── index.php (Content pages with routing)
├── music.html (Music player frame)
├── style.css
├── menu.css
├── lightbox.css
├── /images/
│   ├── logo.gif
│   ├── top.gif
│   ├── body.gif
│   ├── bottom.gif
│   ├── mandala.gif
│   ├── kwiat.jpg
│   ├── przycisk.gif
│   ├── loading.gif
│   └── closelabel.gif
├── /js/
│   ├── menu.js
│   └── lightbox.js
└── /pages/
    ├── home.php
    ├── about.php
    ├── classes.php
    ├── pricing.php
    ├── library.php
    ├── osteopathy.php
    ├── contact.php
    ├── news.php
    └── shop.php
```

---

This documentation provides everything needed to understand, analyze, and recreate the Joga Konstancin website.

Images:

wget http://jogakonstancin.pl/images/logo.gif
wget http://jogakonstancin.pl/images/top.gif
wget http://jogakonstancin.pl/images/body.gif
wget http://jogakonstancin.pl/images/bottom.gif
wget http://jogakonstancin.pl/images/mandala.gif
wget http://jogakonstancin.pl/images/kwiat.jpg
wget http://jogakonstancin.pl/images/przycisk.gif
wget http://jogakonstancin.pl/lightbox/loading.gif
wget http://jogakonstancin.pl/lightbox/closelabel.gif


curl -O http://jogakonstancin.pl/images/logo.gif
curl -O http://jogakonstancin.pl/images/top.gif
curl -O http://jogakonstancin.pl/images/body.gif
curl -O http://jogakonstancin.pl/images/bottom.gif
curl -O http://jogakonstancin.pl/images/mandala.gif
curl -O http://jogakonstancin.pl/images/kwiat.jpg
curl -O http://jogakonstancin.pl/images/przycisk.gif
curl -O http://jogakonstancin.pl/lightbox/loading.gif
curl -O http://jogakonstancin.pl/lightbox/closelabel.gif
```

### Option 3: Browser Developer Tools
1. Open website in browser (jogakonstancin.pl)
2. Open DevTools (F12)
3. Go to "Network" tab
4. Reload page
5. Filter by "Images"
6. Right-click each image → "Open image in new tab" → Save

---

## Complete File Structure for Downloaded Graphics

Create this folder structure on your computer:
```
/project-folder/
├── /images/
│   ├── logo.gif
│   ├── top.gif
│   ├── body.gif
│   ├── bottom.gif
│   ├── mandala.gif
│   └── kwiat.jpg
└── /lightbox/
├── loading.gif
└── closelabel.gif
```

---

## Graphics Summary

**Total Graphics Files**: 9 files
- **Layout Graphics**: 6 files
- **Navigation Graphics**: 1 file
- **Lightbox Graphics**: 2 files

**Total File Sizes** (approximate):
- GIF files: 5-50 KB each (typical)
- JPG files: 20-100 KB

**File Types Used**:
- `.gif` - Animated and static graphics (7 files)
- `.jpg` - Compressed photographic image (1 file)

---

## Direct Download Links (Copy & Paste Ready)

You can copy and paste these URLs directly into any download manager or browser:
```
http://jogakonstancin.pl/images/logo.gif
http://jogakonstancin.pl/images/top.gif
http://jogakonstancin.pl/images/body.gif
http://jogakonstancin.pl/images/bottom.gif
http://jogakonstancin.pl/images/mandala.gif
http://jogakonstancin.pl/images/kwiat.jpg
http://jogakonstancin.pl/images/przycisk.gif
http://jogakonstancin.pl/lightbox/loading.gif
http://jogakonstancin.pl/lightbox/closelabel.gif