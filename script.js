/* ==========================================================================
   DR. KIRAN AMEER | PHYSIOTHERAPIST & REHABILITATION SPECIALIST
   Central JavaScript Logic & Application Architecture (Vanilla JS)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CENTRAL CONFIGURATION OBJECT
   -------------------------------------------------------------------------- */
const clinic = {
    doctorName: "Dr. Kiran Ameer",
    profession: "Physiotherapist",
    whatsapp: "923275466380",
    phone: "03275466380",
    address: "Plot No. 17-C, Commercial Avenue, Main Blvd, Block A, New City Phase 2, Wah Cantt, Pakistan",
    googleReviewUrl: "https://g.page/r/Cfoh_a5XDYQcEAE/review",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+no+17-C,+Dr+Kiran+Ameer+%7C+Physiotherapist,+commercial+avenue,+Main+Blvd,+BLOCK+A+Phase+2+Wah+Cantt,+Pakistan",
    social: {
        instagram: "https://www.instagram.com/dr.kiranameerpt?igsh=MWk5azlmNDB5MmFzYQ==",
        facebook: "https://facebook.com"
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

const GOOGLE_REVIEW_URL = clinic.googleReviewUrl;

/* --------------------------------------------------------------------------
   2. SERVICES DATA (20 SERVICES INCLUDING HIJAMA)
   -------------------------------------------------------------------------- */
const servicesData = [
    {
        id: "hijama-cupping",
        number: "01",
        name: "Hijama & Cupping Therapy",
        category: "specialized",
        icon: "fa-solid fa-notes-medical",
        description: "Clinical wet & dry Hijama cupping therapy to promote localized blood circulation, release muscular tension, detoxify tissue, and relieve chronic spinal discomfort.",
        benefits: ["Localized blood circulation boost", "Deep fascia strain release", "Detoxification & natural pain relief"]
    },
    {
        id: "dry-needling",
        number: "02",
        name: "Dry Needling",
        category: "pain",
        icon: "fa-solid fa-needle",
        description: "Targeted myofascial trigger point dry needling to release acute muscle knots, relieve persistent tightness, and accelerate deep tissue healing.",
        benefits: ["Immediate muscle spasm relief", "Improved blood flow & oxygenation", "Restored range of motion"]
    },
    {
        id: "neuro-rehab",
        number: "03",
        name: "Neuro Rehabilitation",
        category: "neuro",
        icon: "fa-solid fa-brain",
        description: "Specialized neuromuscular therapy for stroke recovery, nerve injuries, Parkinson's disease, and motor coordination impairment.",
        benefits: ["Neuro-pathway re-education", "Balance & gait retraining", "Functional independence enhancement"]
    },
    {
        id: "geriatric-rehab",
        number: "04",
        name: "Geriatric Rehabilitation",
        category: "rehab",
        icon: "fa-solid fa-person-walking-with-cane",
        description: "Compassionate, gentle mobility training designed to boost balance, prevent falls, and preserve joint flexibility for older adults.",
        benefits: ["Fall prevention exercises", "Osteoarthritis management", "Enhanced daily confidence"]
    },
    {
        id: "kinesiology-taping",
        number: "05",
        name: "Kinesiology Taping",
        category: "sports",
        icon: "fa-solid fa-tape",
        description: "Elastic neuromuscular taping to support injured ligaments, facilitate lymphatic drainage, and stabilize active joints without restricting motion.",
        benefits: ["Targeted swelling reduction", "Joint micro-support", "Proprioceptive feedback"]
    },
    {
        id: "home-rehab",
        number: "06",
        name: "Home Rehabilitation",
        category: "specialized",
        icon: "fa-solid fa-house-medical",
        description: "Personalized bedside physical rehabilitation brought directly to your doorstep for post-op, bedridden, or mobility-limited patients.",
        benefits: ["At-home convenience", "Personalized home setup audit", "Family guidance & training"]
    },
    {
        id: "women-health",
        number: "07",
        name: "Women's Health Rehabilitation",
        category: "specialized",
        icon: "fa-solid fa-person-dress",
        description: "Discreet clinical care covering pelvic floor strengthening, pre/post-natal back discomfort, and musculoskeletal health for women.",
        benefits: ["Pelvic alignment exercises", "Post-partum core stabilization", "Safe conditioning protocols"]
    },
    {
        id: "sports-injuries",
        number: "08",
        name: "Sports Injuries Rehabilitation",
        category: "sports",
        icon: "fa-solid fa-person-running",
        description: "Comprehensive athletic recovery for tendonitis, ligament sprains (ACL/MCL), rotator cuff tears, and return-to-sport biomechanics.",
        benefits: ["Sport-specific conditioning", "Speedy tissue regeneration", "Re-injury prevention strategy"]
    },
    {
        id: "post-op-rehab",
        number: "09",
        name: "Post-Operational Rehabilitation",
        category: "rehab",
        icon: "fa-solid fa-hospital-user",
        description: "Evidence-based post-surgical rehabilitation following joint replacements, spinal surgeries, fracture fixations, and ligament repairs.",
        benefits: ["Scar tissue mobilization", "Stiffness reduction", "Controlled muscle reactivation"]
    },
    {
        id: "pediatric-rehab",
        number: "10",
        name: "Pediatric Rehabilitation",
        category: "specialized",
        icon: "fa-solid fa-child-reaching",
        description: "Friendly physical therapy routines helping children overcome developmental motor delays, congenital posture issues, or juvenile injuries.",
        benefits: ["Engaging exercise routines", "Postural milestone tracking", "Child-friendly atmosphere"]
    },
    {
        id: "orthotics-prosthetics",
        number: "11",
        name: "Orthotics & Prosthetics Support",
        category: "specialized",
        icon: "fa-solid fa-socks",
        description: "Biomechanical footprint assessment, custom brace fitting guidance, and gait adaptation training for prosthetics users.",
        benefits: ["Pressure point distribution", "Custom shoe insert consultation", "Optimized walking mechanics"]
    },
    {
        id: "orthopedic-rehab",
        number: "12",
        name: "Orthopedic Rehabilitation",
        category: "rehab",
        icon: "fa-solid fa-bone",
        description: "Therapeutic care for arthritis, bone fractures, spinal compression, bursitis, and chronic musculoskeletal conditions.",
        benefits: ["Joint mobilization", "Strengthening surrounding tissues", "Pain reduction techniques"]
    },
    {
        id: "neck-pain",
        number: "13",
        name: "Neck Pain Relief",
        category: "pain",
        icon: "fa-solid fa-user-headset",
        description: "Manual cervical decompression, soft tissue release, and ergonomic posture correction for acute stiffness and tech-neck strain.",
        benefits: ["Cervical spasm relief", "Headache frequency reduction", "Improved cervical range"]
    },
    {
        id: "back-pain-relief",
        number: "14",
        name: "Back Pain Relief",
        category: "pain",
        icon: "fa-solid fa-child",
        description: "Targeted spinal manual therapy, core stabilization, and disc decompression protocols for lumbar strain and chronic lower back stiffness.",
        benefits: ["Lumbar pressure release", "Core muscle activation", "Ergonomic work guidance"]
    },
    {
        id: "sciatica-treatment",
        number: "15",
        name: "Sciatica Treatment",
        category: "pain",
        icon: "fa-solid fa-bolt-lightning",
        description: "Sciatic nerve flossing, piriformis stretch routines, and lumbar traction designed to relieve radiating nerve pain down the leg.",
        benefits: ["Nerve impingement relief", "Reduction in numbness/tingling", "Smooth walking posture"]
    },
    {
        id: "frozen-shoulder-rehab",
        number: "16",
        name: "Frozen Shoulder Rehab",
        category: "rehab",
        icon: "fa-solid fa-snowflake",
        description: "Adhesive capsulitis stretch protocols, gentle shoulder joint distraction, and progressive overhead range restoration.",
        benefits: ["Glenohumeral joint release", "Night pain reduction", "Restored arm elevation"]
    },
    {
        id: "post-surgery-rehab",
        number: "17",
        name: "Post-Surgery Rehab",
        category: "rehab",
        icon: "fa-solid fa-bed-pulse",
        description: "Structured phased protocol starting with gentle swelling management progressing to strength rebuilding following orthopedic surgeries.",
        benefits: ["Phase-by-phase recovery track", "Swelling control", "Safe load progression"]
    },
    {
        id: "neck-headache-posture",
        number: "18",
        name: "Neck Pain, Headache & Posture Correction",
        category: "pain",
        icon: "fa-solid fa-user-gear",
        description: "Cervicogenic headache management combined with spinal alignment biofeedback to eliminate persistent upper body muscle tension.",
        benefits: ["Postural alignment biofeedback", "Tension headache relief", "Ergonomic adjustments"]
    },
    {
        id: "stroke-rehab",
        number: "19",
        name: "Stroke Rehabilitation",
        category: "neuro",
        icon: "fa-solid fa-heart-pulse",
        description: "Dedicated motor recovery using neuro-developmental therapy (NDT), functional task training, and hemiplegia movement retraining.",
        benefits: ["Limb movement initiation", "Spasticity management", "Daily activity retraining"]
    },
    {
        id: "neurological-rehab",
        number: "20",
        name: "Neurological Rehabilitation",
        category: "neuro",
        icon: "fa-solid fa-wheat-awn-circle-exclamation",
        description: "Comprehensive care for neuropathy, MS, spinal cord trauma, and nerve palsies to maximize physical autonomy.",
        benefits: ["Sensory re-education", "Coordination improvement", "Adaptive mobility techniques"]
    }
];

/* --------------------------------------------------------------------------
   3. GALLERY DATA (15 PHOTOS FROM IMAGES FOLDER)
   -------------------------------------------------------------------------- */
const galleryData = [
    { id: 1, title: "Physiotherapy Rehabilitation Session", category: "Rehabilitation", img: "images/unnamed.webp" },
    { id: 2, title: "Sports Injury Recovery Therapy", category: "Sports Rehab", img: "images/unnamed (1).webp" },
    { id: 3, title: "Knee Joint Mobilization", category: "Orthopedic", img: "images/unnamed (2).webp" },
    { id: 4, title: "Neuro Rehabilitation Training", category: "Neurological", img: "images/unnamed (3).webp" },
    { id: 5, title: "Home Rehabilitation Consultation", category: "Home Care", img: "images/unnamed (4).webp" },
    { id: 6, title: "Exercise & Resistance Therapy", category: "Therapeutic Exercise", img: "images/unnamed (5).webp" },
    { id: 7, title: "Manual Spinal Realignment", category: "Manual Therapy", img: "images/unnamed (6).webp" },
    { id: 8, title: "Modern Clinical Rehabilitation Environment", category: "Clinic", img: "images/unnamed (7).webp" },
    { id: 9, title: "Postural & Shoulder Alignment", category: "Posture Care", img: "images/unnamed (8).webp" },
    { id: 10, title: "Sciatica & Disc Decompression", category: "Pain Relief", img: "images/unnamed (9).webp" },
    { id: 11, title: "Electro-Physical Therapy Session", category: "Electrotherapy", img: "images/unnamed (10).webp" },
    { id: 12, title: "Geriatric Balance & Mobility Training", category: "Geriatric Care", img: "images/unnamed (11).webp" },
    { id: 13, title: "Kinesiology Taping Application", category: "Sports Rehab", img: "images/unnamed (12).webp" },
    { id: 14, title: "Pediatric Motor Skill Rehab", category: "Specialized Care", img: "images/unnamed (13).webp" },
    { id: 15, title: "Post-Operational Ligament Recovery", category: "Post-Op Rehab", img: "images/unnamed (14).webp" }
];

/* --------------------------------------------------------------------------
   4. PATIENT REVIEWS DATA (AUTHENTIC CLIENT TESTIMONIALS)
   -------------------------------------------------------------------------- */
const reviewsData = [
    {
        name: "Rayyan Ali",
        rating: 5,
        date: "2 weeks ago",
        text: "Dr. Kiran Ameer is an exceptional physiotherapist. The personalized rehabilitation program for my chronic lower back pain yielded amazing results within just a few sessions! Extremely professional, patient, and knowledgeable doctor.",
        relevantScore: 98
    },
    {
        name: "Sehrish Kamal",
        rating: 5,
        date: "1 month ago",
        text: "Very professional and patient-centered approach. Dr. Kiran carefully evaluated my severe neck pain and posture issues. The dry needling and exercise routines recommended worked wonders for me.",
        relevantScore: 95
    },
    {
        name: "Ali Khan",
        rating: 5,
        date: "2 months ago",
        text: "Post-surgery knee rehabilitation was smooth and extremely effective under Dr. Kiran's guidance. The exercise plans are clear and easy to follow. I regained full knee flex in weeks!",
        relevantScore: 92
    },
    {
        name: "Malaika Sijjeel",
        rating: 5,
        date: "3 weeks ago",
        text: "Outstanding care for my frozen shoulder problem. The manual therapy and gentle exercises gave me back complete arm mobility. Highly recommended physiotherapy clinic in Wah Cantt!",
        relevantScore: 90
    },
    {
        name: "Emaan Imroze",
        rating: 5,
        date: "1 month ago",
        text: "Wonderful experience with women's health rehab. Professional, comfortable environment, and very caring medical attention. Dr. Kiran explains every step of recovery thoroughly.",
        relevantScore: 88
    },
    {
        name: "Aryaan Jee",
        rating: 5,
        date: "2 months ago",
        text: "Excellent sports injury treatment! Got back to playing football in record time after a muscle tear thanks to the kinesiology taping and physical therapy routines. Truly top tier service.",
        relevantScore: 87
    },
    {
        name: "Sheryar Awan",
        rating: 5,
        date: "3 months ago",
        text: "Sciatica pain was bothering me for months until I visited Dr. Kiran Ameer. The relief after the dry needling and physical therapy sessions was unbelievable. Honest advice and great results.",
        relevantScore: 86
    },
    {
        name: "Misbah Rehman",
        rating: 5,
        date: "1 month ago",
        text: "Geriatric rehabilitation for my mother helped her regain her walking confidence after a fall. God bless Dr. Kiran for such empathetic and dedicated patient care!",
        relevantScore: 85
    },
    {
        name: "Noman Shah",
        rating: 5,
        date: "2 weeks ago",
        text: "Great facility in Wah Cantt! Professional posture correction and ergonomic advice that eliminated my daily computer work headaches. Highly satisfied patient.",
        relevantScore: 84
    },
    {
        name: "Faraz Shahid",
        rating: 5,
        date: "4 months ago",
        text: "Very knowledgeable physiotherapist. Thorough assessment and genuine patient care without rushing sessions. Solved my shoulder impingement completely.",
        relevantScore: 83
    },
    {
        name: "Sardar Ali",
        rating: 5,
        date: "2 months ago",
        text: "Home rehabilitation services were prompt and highly effective for my stroke recovery routine. Excellent progress tracking and encouraging doctor.",
        relevantScore: 82
    },
    {
        name: "Moeen Akhtar",
        rating: 5,
        date: "3 months ago",
        text: "Highly satisfied with the neurological therapy session. Empathetic approach and clean modern clinic environment. Best physio doctor in the area.",
        relevantScore: 81
    },
    {
        name: "Kashan Saqib",
        rating: 5,
        date: "1 month ago",
        text: "Brilliant experience! Sciatica treatment worked wonders. Very attentive doctor who listens patiently to all health concerns and designs custom plans.",
        relevantScore: 80
    },
    {
        name: "Javeria Ibrar",
        rating: 5,
        date: "2 months ago",
        text: "Exceptional orthopedic rehab after my fracture cast removal. Restored my wrist flex and joint strength completely. Highly recommended!",
        relevantScore: 79
    },
    {
        name: "KaShii Khan",
        rating: 5,
        date: "3 weeks ago",
        text: "Top rated physiotherapist in Wah Cantt. Clean venue, modern rehabilitation equipment, and very polite doctor. 5 star experience!",
        relevantScore: 78
    },
    {
        name: "Fki5 rael",
        rating: 5,
        date: "1 month ago",
        text: "Great treatment for neck stiffness and shoulder tension. Felt immediate relief after the very first consultation and manual alignment.",
        relevantScore: 77
    },
    {
        name: "Mrs. Riaz",
        rating: 5,
        date: "2 months ago",
        text: "Dr. Kiran Ameer provided clear exercise guidance and hands-on therapy for my knee osteoarthritis. Mobility improved significantly without painkillers.",
        relevantScore: 76
    },
    {
        name: "Laiba Kiani",
        rating: 5,
        date: "3 months ago",
        text: "Friendly, competent, and evidence-based treatment. Best rehabilitation clinic experience in town. Recommend to anyone suffering joint pain.",
        relevantScore: 75
    }
];

/* --------------------------------------------------------------------------
   5. AI CHATBOT KNOWLEDGE BASE
   -------------------------------------------------------------------------- */
const websiteKnowledge = {
    services: "Dr. Kiran Ameer offers 20 specialized rehabilitation services including Hijama & Cupping Therapy, Dry Needling, Neuro Rehab, Geriatric Rehab, Kinesiology Taping, Home Rehabilitation, Women's Health, Sports Injury Rehab, Post-Surgery Recovery, Sciatica Treatment, Back Pain Relief, and Posture Correction.",
    hijama: "Yes! We offer clinical wet & dry Hijama cupping therapy for localized blood circulation, muscle detoxification, fascia release, and chronic spinal pain relief.",
    hours: "Our clinic hours are Monday through Friday from 09:00 AM to 08:00 PM, Saturday from 10:00 AM to 06:00 PM. We are closed on Sundays.",
    location: "Our clinic is located at Plot No. 17-C, Commercial Avenue, Main Blvd, Block A, New City Phase 2, Wah Cantt, Pakistan.",
    booking: "You can book a consultation directly using the multi-step booking form on this website, or click the WhatsApp button to chat with Dr. Kiran Ameer directly at 0327 5466380.",
    whatsapp: "Dr. Kiran Ameer's official WhatsApp number is 0327 5466380 (International format: +923275466380).",
    reviews: "We maintain a 5.0 rating on Google based on over 500+ verified patient reviews. You can leave or read reviews at https://g.page/r/Cfoh_a5XDYQcEAE/review !"
};

/* --------------------------------------------------------------------------
   6. DOM CONTENT LOADED INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initNavbar();
    initScrollAnimations();
    initScrollVideoObserver();
    initParallax();
    initCounters();
    initTimeline();
    initHumanBiomechanicsScroll();
    renderServices('all');
    initServicesFilter();
    initServiceModal();
    renderGallery();
    initLightbox();
    renderReviews();
    initReviewsControls();
    initAvailabilitySchedule();
    initBookingForm();
    initFAQAccordion();
    initChatbot();
    initBackToTop();
    setupConfigURLs();
});

/* --------------------------------------------------------------------------
   PRELOADER
   -------------------------------------------------------------------------- */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1200);
    }
}

/* --------------------------------------------------------------------------
   CUSTOM CURSOR (DESKTOP)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('cursorFollower');

    if (!cursor || !follower) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .service-card, .gallery-card, .condition-pill');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.borderColor = 'var(--color-sage-primary)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.borderColor = 'var(--color-sage-mint)';
        });
    });
}

/* --------------------------------------------------------------------------
   NAVBAR SCROLL & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link scrollspy
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }
}

/* --------------------------------------------------------------------------
   GLOBAL SCROLL ANIMATIONS (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-in, .fade-up, .reveal-up, .reveal-scale');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   SCROLL-DRIVEN VIDEO AUTOPLAY / PAUSE OBSERVER
   -------------------------------------------------------------------------- */
function initScrollVideoObserver() {
    const video = document.querySelector('.about-video');
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Autoplay waiting for scroll/visibility", error);
                    });
                }
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(video);
}

/* --------------------------------------------------------------------------
   PARALLAX SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-shape');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* --------------------------------------------------------------------------
   COUNTER NUMBER ANIMATION (SMOOTH 500+ COUNT UP)
   -------------------------------------------------------------------------- */
function initCounters() {
    const counterElements = document.querySelectorAll('.stat-number');
    let started = false;

    window.addEventListener('scroll', () => {
        const heroSection = document.getElementById('hero');
        if (!heroSection) return;
        
        const position = heroSection.getBoundingClientRect();
        if (position.top < window.innerHeight && !started) {
            started = true;
            counterElements.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = target / 50;

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
}

/* --------------------------------------------------------------------------
   TIMELINE SCROLL PROGRESS LINE
   -------------------------------------------------------------------------- */
function initTimeline() {
    const timelineSection = document.getElementById('how-it-works');
    const progressBar = document.getElementById('timelineProgress');

    if (!timelineSection || !progressBar) return;

    window.addEventListener('scroll', () => {
        const rect = timelineSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;

        if (rect.top <= viewportHeight && rect.bottom >= 0) {
            const totalScrollable = sectionHeight + viewportHeight;
            const currentScroll = viewportHeight - rect.top;
            let percentage = (currentScroll / totalScrollable) * 100;
            percentage = Math.min(100, Math.max(0, percentage));
            progressBar.style.height = `${percentage}%`;
        }
    });
}

/* --------------------------------------------------------------------------
   SERVICES RENDER & FILTER TABS
   -------------------------------------------------------------------------- */
function renderServices(filterCategory = 'all') {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    const filtered = filterCategory === 'all' 
        ? servicesData 
        : servicesData.filter(s => s.category === filterCategory);

    grid.innerHTML = filtered.map(service => `
        <div class="service-card reveal-up" data-id="${service.id}">
            <div>
                <div class="service-card-top">
                    <span class="service-number">${service.number}</span>
                    <div class="service-icon-box">
                        <i class="${service.icon}"></i>
                    </div>
                </div>
                <h3 class="service-name">${service.name}</h3>
                <p class="service-desc">${service.description}</p>
            </div>
            <div class="service-link">
                <span>View Details</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `).join('');

    initScrollAnimations();
    attachServiceCardClickListeners();
}

function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderServices(category);
        });
    });
}

/* --------------------------------------------------------------------------
   SERVICE MODAL POPUP
   -------------------------------------------------------------------------- */
function initServiceModal() {
    const modal = document.getElementById('serviceModal');
    const overlay = document.getElementById('serviceModalOverlay');
    const closeBtn = document.getElementById('serviceModalClose');

    if (!modal) return;

    const closeModal = () => modal.classList.remove('open');

    if (overlay) overlay.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

function attachServiceCardClickListeners() {
    const cards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalServiceTitle');
    const modalCategory = document.getElementById('modalServiceCategory');
    const modalIcon = document.getElementById('modalServiceIcon');
    const modalDesc = document.getElementById('modalServiceDescription');
    const modalBenefits = document.getElementById('modalServiceBenefits');
    const modalBookBtn = document.getElementById('modalBookBtn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const service = servicesData.find(s => s.id === id);

            if (service && modal) {
                modalTitle.innerText = service.name;
                modalCategory.innerText = service.category.toUpperCase();
                modalIcon.innerHTML = `<i class="${service.icon}"></i>`;
                modalDesc.innerText = service.description;
                modalBenefits.innerHTML = service.benefits.map(b => `<li>${b}</li>`).join('');
                modalBookBtn.setAttribute('href', `#booking`);
                
                modal.classList.add('open');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   GALLERY RENDER (CLEAN PICTURES ONLY NO TEXT OVERLAY) & LIGHTBOX
   -------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Render clean pictures only without text overlays per user request
    galleryGrid.innerHTML = galleryData.map((item, index) => `
        <div class="gallery-card reveal-up" data-index="${index}">
            <img src="${item.img}" alt="Work Gallery Photo ${item.id}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-view-icon">
                    <i class="fa-solid fa-expand"></i>
                </div>
            </div>
        </div>
    `).join('');

    initScrollAnimations();
    attachGalleryClickListeners();
}

function attachGalleryClickListeners() {
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-index'));
            openLightbox(index);
        });
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const overlay = document.getElementById('lightboxOverlay');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (!lightbox) return;

    const close = () => lightbox.classList.remove('open');

    if (overlay) overlay.addEventListener('click', close);
    if (closeBtn) closeBtn.addEventListener('click', close);

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
            updateLightboxContent();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
            updateLightboxContent();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') {
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
            updateLightboxContent();
        }
        if (e.key === 'ArrowRight') {
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
            updateLightboxContent();
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.add('open');
}

function updateLightboxContent() {
    const img = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    const item = galleryData[currentLightboxIndex];

    if (img && caption && item) {
        img.src = item.img;
        caption.innerText = `Work Gallery Item #${item.id}`;
    }
}

/* --------------------------------------------------------------------------
   PATIENT REVIEWS RENDER & SORT / CAROUSEL
   -------------------------------------------------------------------------- */
let currentReviewsSort = 'relevant';

function renderReviews() {
    const track = document.getElementById('reviewsTrack');
    if (!track) return;

    let sorted = [...reviewsData];

    if (currentReviewsSort === 'newest') {
        // preserve array order
    } else if (currentReviewsSort === 'highest') {
        sorted.sort((a, b) => b.rating - a.rating);
    } else if (currentReviewsSort === 'lowest') {
        sorted.sort((a, b) => a.rating - b.rating);
    } else {
        sorted.sort((a, b) => b.relevantScore - a.relevantScore);
    }

    track.innerHTML = sorted.map((review, idx) => `
        <div class="review-card reveal-up" style="transition-delay: ${0.05 * (idx % 3)}s">
            <div>
                <div class="review-card-header">
                    <div class="reviewer-profile">
                        <div class="avatar-circle">${review.name.charAt(0)}</div>
                        <div>
                            <h4 class="reviewer-name">${review.name}</h4>
                            <span class="review-date">${review.date}</span>
                        </div>
                    </div>
                    <i class="fa-brands fa-google google-g-icon"></i>
                </div>

                <div class="review-stars-row">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(review.rating)}
                </div>

                <p class="review-text-content" id="reviewText-${idx}">
                    ${review.text.length > 120 ? review.text.substring(0, 120) + '...' : review.text}
                </p>
            </div>

            ${review.text.length > 120 ? `
                <button class="read-more-btn" onclick="toggleReadMore(${idx}, '${encodeURIComponent(review.text)}')">Read More</button>
            ` : ''}
        </div>
    `).join('');

    initScrollAnimations();
}

window.toggleReadMore = function(idx, fullTextEncoded) {
    const textEl = document.getElementById(`reviewText-${idx}`);
    const fullText = decodeURIComponent(fullTextEncoded);

    if (textEl) {
        if (textEl.innerText.endsWith('...')) {
            textEl.innerText = fullText;
        } else {
            textEl.innerText = fullText.substring(0, 120) + '...';
        }
    }
};

function initReviewsControls() {
    const sortSelect = document.getElementById('reviewSortSelect');
    const prevBtn = document.getElementById('reviewPrevBtn');
    const nextBtn = document.getElementById('reviewNextBtn');
    const track = document.getElementById('reviewsTrack');

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentReviewsSort = e.target.value;
            renderReviews();
        });
    }

    if (prevBtn && nextBtn && track) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 320, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
}

/* --------------------------------------------------------------------------
   CLINIC AVAILABILITY SCHEDULE & REAL-TIME STATUS
   -------------------------------------------------------------------------- */
function initAvailabilitySchedule() {
    const grid = document.getElementById('scheduleGrid');
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    if (!grid) return;

    const days = [
        { name: "Monday", hours: clinic.hours.monday, dayNum: 1 },
        { name: "Tuesday", hours: clinic.hours.tuesday, dayNum: 2 },
        { name: "Wednesday", hours: clinic.hours.wednesday, dayNum: 3 },
        { name: "Thursday", hours: clinic.hours.thursday, dayNum: 4 },
        { name: "Friday", hours: clinic.hours.friday, dayNum: 5 },
        { name: "Saturday", hours: clinic.hours.saturday, dayNum: 6 },
        { name: "Sunday", hours: clinic.hours.sunday, dayNum: 0 }
    ];

    const todayNum = new Date().getDay();

    grid.innerHTML = days.map(d => `
        <div class="schedule-item ${d.dayNum === todayNum ? 'today' : ''}">
            <span class="schedule-day">${d.name} ${d.dayNum === todayNum ? '(Today)' : ''}</span>
            <span class="schedule-time">${d.hours}</span>
        </div>
    `).join('');

    // Real-time status logic
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    let isOpen = false;
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 20) {
        isOpen = true;
    } else if (currentDay === 6 && currentHour >= 10 && currentHour < 18) {
        isOpen = true;
    }

    if (statusDot && statusText) {
        if (isOpen) {
            statusDot.className = "status-pulse-dot open";
            statusText.innerText = "Available Today • Clinic Open Now";
            statusText.style.color = "#16A34A";
        } else {
            statusDot.className = "status-pulse-dot closed";
            statusText.innerText = "Currently Closed • Accepting Appointments";
            statusText.style.color = "#DC2626";
        }
    }
}

/* --------------------------------------------------------------------------
   MULTI-STEP BOOKING FORM & WHATSAPP GENERATOR
   -------------------------------------------------------------------------- */
function initBookingForm() {
    const form = document.getElementById('consultationForm');
    const painSlider = document.getElementById('painSlider');
    const painDisplay = document.getElementById('painLevelDisplay');
    const prevInjuryYes = document.getElementById('prevInjuryYes');
    const injuryGroup = document.getElementById('injuryDetailsGroup');
    const radioGroup = document.getElementsByName('prevInjury');

    if (painSlider && painDisplay) {
        painSlider.addEventListener('input', (e) => {
            painDisplay.innerText = `${e.target.value}/10`;
        });
    }

    if (radioGroup && injuryGroup) {
        radioGroup.forEach(radio => {
            radio.addEventListener('change', () => {
                if (prevInjuryYes.checked) {
                    injuryGroup.classList.remove('hidden-field');
                } else {
                    injuryGroup.classList.add('hidden-field');
                }
            });
        });
    }

    // Category-driven dynamic field switcher (Hijama vs Pain / Rehab)
    const mainConcernSelect = document.getElementById('mainConcern');
    const hijamaOptionsGroup = document.getElementById('hijamaOptionsGroup');
    const painSliderGroup = document.getElementById('painSliderGroup');
    const hijamaMedicalGroup = document.getElementById('hijamaMedicalGroup');
    const standardMedicalGroup = document.getElementById('standardMedicalGroup');
    const prefServiceSelect = document.getElementById('prefService');
    const conditionDetailsLabel = document.getElementById('conditionDetailsLabel');

    if (mainConcernSelect) {
        mainConcernSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === "Hijama & Cupping Therapy") {
                if (hijamaOptionsGroup) hijamaOptionsGroup.classList.remove('hidden-field');
                if (painSliderGroup) painSliderGroup.classList.add('hidden-field');
                if (hijamaMedicalGroup) hijamaMedicalGroup.classList.remove('hidden-field');
                if (standardMedicalGroup) standardMedicalGroup.classList.add('hidden-field');
                if (conditionDetailsLabel) conditionDetailsLabel.innerText = "Hijama Therapy Requirements / Specific Notes";
                if (prefServiceSelect) prefServiceSelect.value = "Hijama & Cupping Therapy";
            } else {
                if (hijamaOptionsGroup) hijamaOptionsGroup.classList.add('hidden-field');
                if (painSliderGroup) painSliderGroup.classList.remove('hidden-field');
                if (hijamaMedicalGroup) hijamaMedicalGroup.classList.add('hidden-field');
                if (standardMedicalGroup) standardMedicalGroup.classList.remove('hidden-field');
                if (conditionDetailsLabel) conditionDetailsLabel.innerText = "Tell us about your condition / pain symptoms";
            }
        });
    }

    // Step switching logic
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const stepIndicators = document.querySelectorAll('.step-indicator');

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStepNum = btn.getAttribute('data-next');
            const currentStep = btn.closest('.form-step');
            
            // Validate basic inputs in current step before moving forward
            const requiredInputs = currentStep.querySelectorAll('[required]');
            let isValid = true;

            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (!isValid) return;

            currentStep.classList.remove('active');
            document.getElementById(`step${nextStepNum}`).classList.add('active');

            stepIndicators.forEach(ind => {
                ind.classList.remove('active');
                if (parseInt(ind.getAttribute('data-step')) <= parseInt(nextStepNum)) {
                    ind.classList.add('active');
                }
            });
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStepNum = btn.getAttribute('data-prev');
            const currentStep = btn.closest('.form-step');

            currentStep.classList.remove('active');
            document.getElementById(`step${prevStepNum}`).classList.add('active');

            stepIndicators.forEach(ind => {
                ind.classList.remove('active');
                if (parseInt(ind.getAttribute('data-step')) <= parseInt(prevStepNum)) {
                    ind.classList.add('active');
                }
            });
        });
    });

    // Submit handler -> Dynamic WhatsApp string format
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const age = document.getElementById('patientAge').value;
            const gender = document.getElementById('patientGender').value;
            const phone = document.getElementById('patientPhone').value;
            const email = document.getElementById('patientEmail').value || 'N/A';

            const mainConcern = document.getElementById('mainConcern').value;
            const conditionDetails = document.getElementById('conditionDetails').value || 'None provided';
            const duration = document.getElementById('conditionDuration').value;

            const prefService = document.getElementById('prefService').value;
            const prefDate = document.getElementById('prefDate').value || 'Not specified';
            const prefTime = document.getElementById('prefTime').value;
            const message = document.getElementById('additionalMessage').value || 'None';

            let formattedMessage = '';

            if (mainConcern === "Hijama & Cupping Therapy") {
                const hijamaType = document.getElementById('hijamaType').value;
                const checkedHealth = Array.from(document.querySelectorAll('input[name="hijamaHealth"]:checked')).map(cb => cb.value);
                const healthSummary = checkedHealth.length > 0 ? checkedHealth.join(', ') : 'None specified';

                formattedMessage = 
`Hello Dr. Kiran Ameer,

I would like to book a consultation.

*PATIENT INFORMATION*
Name: ${fullName}
Age: ${age}
Gender: ${gender}
Phone: ${phone}
Email: ${email}

*HIJAMA & CUPPING SERVICE REQUEST*
Primary Focus: Hijama & Cupping Therapy
Specific Goal: ${hijamaType}
Notes/Requirements: ${conditionDetails}
Duration / Preference: ${duration}

*HEALTH & SAFETY CHECK*
Medical Considerations: ${healthSummary}

*CONSULTATION PREFERENCE*
Preferred Service: ${prefService}
Preferred Date: ${prefDate}
Preferred Time: ${prefTime}

*ADDITIONAL MESSAGE*
${message}

Thank you.`;
            } else {
                const painLevel = document.getElementById('painSlider').value;
                const prevInjuryVal = document.querySelector('input[name="prevInjury"]:checked') ? document.querySelector('input[name="prevInjury"]:checked').value : 'No';
                const injuryDetails = document.getElementById('injuryDetails').value || 'None';
                const currentPhysioVal = document.querySelector('input[name="currentPhysio"]:checked') ? document.querySelector('input[name="currentPhysio"]:checked').value : 'No';
                const pastPhysioVal = document.querySelector('input[name="pastPhysio"]:checked') ? document.querySelector('input[name="pastPhysio"]:checked').value : 'No';

                formattedMessage = 
`Hello Dr. Kiran Ameer,

I would like to book a physiotherapy consultation.

*PATIENT INFORMATION*
Name: ${fullName}
Age: ${age}
Gender: ${gender}
Phone: ${phone}
Email: ${email}

*CONDITION & PAIN SYMPTOMS*
Main Concern: ${mainConcern}
Details: ${conditionDetails}
Duration: ${duration}
Pain Severity: ${painLevel}/10

*MEDICAL INFORMATION*
Previous Injury/Surgery: ${prevInjuryVal}
Details: ${injuryDetails}
Currently Receiving Physiotherapy: ${currentPhysioVal}
Previous Physiotherapy: ${pastPhysioVal}

*CONSULTATION PREFERENCE*
Preferred Service: ${prefService}
Preferred Date: ${prefDate}
Preferred Time: ${prefTime}

*ADDITIONAL MESSAGE*
${message}

Thank you.`;
            }

            const encoded = encodeURIComponent(formattedMessage);
            const waUrl = `https://wa.me/${clinic.whatsapp}?text=${encoded}`;
            window.open(waUrl, '_blank');
        });
    }
}

/* --------------------------------------------------------------------------
   FAQ ACCORDION
   -------------------------------------------------------------------------- */
const faqData = [
    {
        q: "How do I book a consultation with Dr. Kiran Ameer?",
        a: "You can book directly using our website consultation form, or simply send a direct message on WhatsApp at 0327 5466380. We will confirm your preferred timing promptly."
    },
    {
        q: "Do you offer Hijama & Cupping Therapy?",
        a: "Yes! We provide clinical wet and dry Hijama cupping therapy to relieve muscular tension, improve localized blood circulation, and detoxify tissues."
    },
    {
        q: "What services does Dr. Kiran Ameer provide?",
        a: "Dr. Kiran offers 20 core services including Hijama Cupping, Dry Needling, Neuro Rehabilitation, Sports Injury Recovery, Orthopedic Rehab, Geriatric Care, Home Rehabilitation, Sciatica Relief, and Posture Correction."
    },
    {
        q: "Do you offer home rehabilitation services?",
        a: "Yes! We provide dedicated home rehabilitation sessions for bedridden, post-operative, or mobility-constrained patients across Wah Cantt and nearby areas."
    },
    {
        q: "Do you treat sports injuries?",
        a: "Absolutely. We specialize in ligament sprains, muscle tears, rotator cuff injuries, and returning athletes back to peak athletic condition safely."
    },
    {
        q: "Do you provide post-surgery rehabilitation?",
        a: "Yes, post-surgical rehabilitation for joint replacements, ACL fixation, and spinal procedures is one of our primary clinical focuses."
    },
    {
        q: "How can I contact Dr. Kiran Ameer?",
        a: "You can contact Dr. Kiran via WhatsApp or phone call at 0327 5466380, or visit our clinic at Plot No. 17-C, Commercial Avenue, Main Blvd, Block A, New City Phase 2, Wah Cantt."
    },
    {
        q: "How can I leave a Google review?",
        a: "You can scan the QR code scanner in our reviews section or click 'Leave a Google Review' which directs to https://g.page/r/Cfoh_a5XDYQcEAE/review ."
    },
    {
        q: "Can I book through WhatsApp?",
        a: "Yes! Clicking any WhatsApp button on this site opens a pre-formatted consultation request directly in WhatsApp for fast booking."
    }
];

function initFAQAccordion() {
    const container = document.getElementById('faqAccordion');
    if (!container) return;

    container.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item reveal-up">
            <button class="accordion-header">
                <span>${item.q}</span>
                <i class="fa-solid fa-chevron-down accordion-icon"></i>
            </button>
            <div class="accordion-body">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');

    initScrollAnimations();

    const headers = container.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');

            // Close all
            container.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   AI CHATBOT WIDGET LOGIC
   -------------------------------------------------------------------------- */
function initChatbot() {
    const trigger = document.getElementById('chatbotTrigger');
    const windowEl = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatbotClose');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const body = document.getElementById('chatbotBody');
    const chips = document.querySelectorAll('.cb-chip');

    if (!trigger || !windowEl) return;

    trigger.addEventListener('click', () => windowEl.classList.toggle('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => windowEl.classList.remove('open'));

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            handleUserChatMessage(query);
        });
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (text) {
                handleUserChatMessage(text);
                input.value = '';
            }
        });
    }

    function handleUserChatMessage(text) {
        appendChatMessage(text, 'user');

        setTimeout(() => {
            const response = generateBotResponse(text);
            appendChatMessage(response, 'bot');
        }, 600);
    }

    function appendChatMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `cb-message ${sender}`;
        msgDiv.innerHTML = `<p>${text}</p>`;
        body.appendChild(msgDiv);
        body.scrollTop = body.scrollHeight;
    }

    function generateBotResponse(query) {
        const q = query.toLowerCase();

        if (q.includes('hijama') || q.includes('cupping')) {
            return websiteKnowledge.hijama;
        } else if (q.includes('service') || q.includes('treatment') || q.includes('offer')) {
            return websiteKnowledge.services;
        } else if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('schedule')) {
            return websiteKnowledge.hours;
        } else if (q.includes('location') || q.includes('address') || q.includes('where')) {
            return websiteKnowledge.location;
        } else if (q.includes('book') || q.includes('appointment') || q.includes('consult')) {
            return websiteKnowledge.booking;
        } else if (q.includes('whatsapp') || q.includes('phone') || q.includes('contact')) {
            return websiteKnowledge.whatsapp;
        } else if (q.includes('review') || q.includes('rating')) {
            return websiteKnowledge.reviews;
        } else {
            return "I can provide general information about Dr. Kiran Ameer's services, Hijama cupping, clinic hours, location, and bookings. For a personal diagnosis or clinical recommendation, please consult Dr. Kiran directly via WhatsApp at 0327 5466380.";
        }
    }
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --------------------------------------------------------------------------
   ASSIGN CONFIGURATION DATA TO DOM ELEMENTS
   -------------------------------------------------------------------------- */
function setupConfigURLs() {
    const viewReviewsBtn = document.getElementById('viewGoogleReviewsBtn');
    const leaveReviewBtn = document.getElementById('leaveGoogleReviewBtn');
    const directionsBtn = document.getElementById('getDirectionsBtn');
    const socialInsta = document.getElementById('socialInsta');
    const socialFb = document.getElementById('socialFb');
    const socialGoogle = document.getElementById('socialGoogle');

    if (viewReviewsBtn) viewReviewsBtn.href = clinic.googleReviewUrl;
    if (leaveReviewBtn) leaveReviewBtn.href = clinic.googleReviewUrl;
    if (directionsBtn) directionsBtn.href = clinic.googleMapsUrl || '#';

    if (socialInsta) socialInsta.href = clinic.social.instagram || '#';
    if (socialFb) socialFb.href = clinic.social.facebook || '#';
    if (socialGoogle) socialGoogle.href = clinic.googleReviewUrl;

    const copyrightYear = document.getElementById('copyrightYear');
    if (copyrightYear) copyrightYear.innerText = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   HUMAN BIOMECHANICS SCROLL-DRIVEN SCANNER & ANIMATION
   -------------------------------------------------------------------------- */
function initHumanBiomechanicsScroll() {
    const movementSection = document.getElementById('movement');
    const scanLine = document.querySelector('.body-scan-line');
    const spinePath = document.querySelector('.animated-spine-path');

    if (!movementSection || !scanLine) return;

    window.addEventListener('scroll', () => {
        const rect = movementSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top <= viewportHeight && rect.bottom >= 0) {
            const totalScrollable = rect.height + viewportHeight;
            const currentScroll = viewportHeight - rect.top;
            let progress = currentScroll / totalScrollable;
            progress = Math.min(1, Math.max(0, progress));

            // Laser scan beam moves dynamically down body posture from y=20 to y=440 on scroll!
            const lineY = 20 + (progress * 420);
            scanLine.setAttribute('y1', lineY);
            scanLine.setAttribute('y2', lineY);

            // Animate spine dash offset driven by scroll
            if (spinePath) {
                spinePath.style.strokeDashoffset = `${-progress * 150}`;
            }
        }
    });
}
