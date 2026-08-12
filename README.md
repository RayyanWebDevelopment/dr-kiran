# Dr. Kiran Ameer | Physiotherapist & Rehabilitation Landing Page

A complete, premium, modern, and highly animated single-page physiotherapy website built purely with **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## 🚀 Getting Started

This website requires **no build process** or node dependencies.

To launch the website, simply open `index.html` in any web browser!

---

## 📁 File Structure

```text
c:/Users/Rayyan/Desktop/New folder (22)/
├── index.html        # Main HTML structure with semantic sections
├── style.css         # Custom CSS design system, animations, & responsiveness
├── script.js         # Central configuration, IntersectionObserver, forms, reviews, chatbot
├── README.md         # Documentation & guide
└── images/           # Images directory
    ├── doctor.jpg    # Hero & About doctor image
    ├── unnamed.webp  # Work gallery photo 1
    ├── unnamed (1).webp ... unnamed (14).webp # Work gallery photos 2-15
```

---

## ⚙️ How to Update Clinic Configuration

At the top of `script.js`, edit the central `clinic` configuration object:

```javascript
const clinic = {
    doctorName: "Dr. Kiran Ameer",
    profession: "Physiotherapist",
    whatsapp: "923275466380",
    phone: "03275466380",
    address: "Plot No. 17-C, Commercial Avenue, Main Blvd, Block A, New City Phase 2, Wah Cantt, Pakistan",
    googleReviewUrl: "YOUR_GOOGLE_REVIEW_LINK_HERE",
    googleMapsUrl: "YOUR_GOOGLE_MAPS_LINK_HERE",
    social: {
        instagram: "YOUR_INSTAGRAM_URL",
        facebook: "YOUR_FACEBOOK_URL"
    },
    hours: {
        monday: "09:00 AM - 08:00 PM",
        tuesday: "09:00 AM - 08:00 PM",
        wednesday: "09:00 AM - 08:00 PM",
        thursday: "09:00 AM - 08:00 PM",
        friday: "09:00 AM - 08:00 PM",
        saturday: "10:00 AM - 06:00 PM",
        sunday: "Closed"
    }
};
```

---

## 🖼️ How to Replace Images

1. **Doctor / Hero Image**:
   Replace `images/doctor.jpg` with your high-resolution portrait.

2. **Gallery / Work Images**:
   Replace or add files in `images/` folder (`unnamed.webp`, `unnamed (1).webp` ... `unnamed (14).webp` or `.jpg`/`.png`).
   To edit gallery titles or add new photos, update the `galleryData` array in `script.js`:

```javascript
const galleryData = [
    { id: 1, title: "Physiotherapy Rehabilitation Session", category: "Rehabilitation", img: "images/unnamed.webp" },
    ...
];
```

---

## 📱 WhatsApp Booking Integration

When a patient fills out the multi-step consultation form:
1. The form validates all required fields.
2. An aligned WhatsApp message string is automatically generated.
3. Clicking **Submit Consultation on WhatsApp** launches WhatsApp sending the formatted message directly to `923275466380`.
