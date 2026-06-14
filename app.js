/*
   VR Industries Premium Corporate Website Application Logic
   Includes: SPA hash router, dark/light theme toggle, dynamic product filters,
   animated counter statistics, form validation, CAPTCHA, and simulated inbox logger.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- PRODUCT DATA CATALOG ---
    const PRODUCTS_CATALOG = [
        {
            id: 'd-cut-bags',
            category: 'bags',
            categoryName: 'Carry Bags',
            name: 'D-Cut Carry Bags',
            shortDesc: 'Classic non-woven carry bags featuring a comfortable D-cut handle slot. High durability and strength.',
            desc: 'Our D-Cut Non-Woven Carry Bags are the standard for modern eco-friendly shopping. Spun from high-quality virgin polypropylene, they are durable, dust-proof, and can be printed with custom branding for retail and promotional events.',
            features: ['Reinforced D-cut handle slot', 'Reusable and 100% recyclable', 'Spun-bound high tear resistance', 'Available in various colors'],
            gsm: '40 GSM - 120 GSM',
            tensile: 'Non-Woven Polypropylene',
            widths: 'D-Cut',
            lengths: '8"x10", 9"x12", 10"x14", 12"x16", 16"x20" or Customized',
            applications: 'Customized (Red, Blue, Green, Yellow, Orange, Black, White, etc.)',
            image: 'assets/product-d-cut.jpg',
            crops: ['center']
        },
        {
            id: 'box-bags',
            category: 'bags',
            categoryName: 'Carry Bags',
            name: 'Box Bags',
            shortDesc: 'Spacious box-shaped non-woven bags with a flat bottom and side gussets for maximum storage capacity.',
            desc: 'Box Non-Woven Bags feature a robust three-dimensional layout with side and bottom gussets, allowing the bag to stand upright. Perfect for sweet boxes, garments, footwear, and grocery items that require extra space and structure.',
            features: ['Flat bottom stands upright', 'Heavy load-bearing capacity', 'Premium ultrasonic sealing', 'Custom side-gusset branding'],
            gsm: '60 GSM - 140 GSM',
            tensile: 'Non-Woven Polypropylene',
            widths: 'Box Bag',
            lengths: '10"x12"x4", 12"x14"x5", 14"x16"x6" or Customized',
            applications: 'Customized (Red, Yellow, Black, Blue, and more)',
            image: 'assets/product-box.jpg',
            crops: ['center']
        },
        {
            id: 'loop-bags',
            category: 'bags',
            categoryName: 'Carry Bags',
            name: 'Loop Handle Carry Bags',
            shortDesc: 'Elegant carry bags with soft, strong loop handles attached for a premium shopping experience.',
            desc: 'Our Loop Handle Bags offer a high-end alternative to standard D-cut bags. The loop handles are attached using ultrasonic welding to provide extra comfort and strength, making them ideal for high-end retail, clothing showrooms, and brand merchandising.',
            features: ['Soft matching loop handles', 'Premium ultrasonic welding', 'Sturdy vertical structure', 'Vibrant multi-color options'],
            gsm: '50 GSM - 130 GSM',
            tensile: 'Non-Woven Polypropylene',
            widths: 'Loop Handle',
            lengths: '10"x12", 12"x14", 14"x16", 16"x18" or Customized',
            applications: 'Customized (Pink, Blue, Yellow, Orange, Green, Black, Red, etc.)',
            image: 'assets/product-loop.jpg',
            crops: ['center']
        },
        {
            id: 'w-cut-bags',
            category: 'bags',
            categoryName: 'Carry Bags',
            name: 'W-Cut Carry Bags',
            shortDesc: 'Highly flexible non-woven carry bags with side gussets and W-cut handles, ideal for grocery stores.',
            desc: 'Also known as U-cut or vest-style bags, our W-Cut Non-Woven Bags are the primary choice for supermarkets, pharmacies, and grocery stores. Their flexible design allows rapid packing and comfortable carrying under heavy loads.',
            features: ['Traditional grocery bag style', 'Expandable side gussets', 'Cost-effective bulk packaging', 'Lightweight yet durable design'],
            gsm: '30 GSM - 80 GSM',
            tensile: 'Non-Woven Polypropylene',
            widths: 'W-Cut / U-Cut',
            lengths: '9"x13"x4", 10"x16"x5", 12"x20"x6" or Customized',
            applications: 'Customized (Blue, White, Red, Green, etc.)',
            image: 'assets/product-w-cut.png',
            crops: ['center']
        },
        {
            id: 'fabric-rolls',
            category: 'fabric',
            categoryName: 'Fabric Rolls',
            name: 'Non-Woven Fabric Rolls',
            shortDesc: 'Premium quality non-woven and laminated fabric rolls designed for versatility, durability, and commercial printing.',
            desc: 'Our high-quality nonwoven fabric rolls are designed for versatility and durability, making them suitable for a wide range of applications. In addition to nonwoven rolls, we also offer laminated fabric rolls tailored to your specific needs. With our advanced flexographic roll printing machine, we can bring complex shapes, logos, and designs to life, ensuring vibrant, consistent prints every time.',
            features: ['Vibrant flexographic roll printing', 'Lamination options available', 'High versatility and durability', 'Custom slitting to required widths'],
            gsm: '25 GSM - 140 GSM',
            tensile: 'Non-Woven / Laminated PP',
            widths: 'Plain / Printed rolls',
            lengths: '63" rolls, custom size available as per order',
            applications: 'Various printed patterns available',
            image: 'assets/product-fabric-rolls.jpg',
            crops: ['center']
        },
        {
            id: 'flexo-printing',
            category: 'printing',
            categoryName: 'Printing Solutions',
            name: 'Flexo Printing',
            shortDesc: 'A Non-Woven Flexo Printing Machine is used to print logos, designs, and branding on non-woven fabric rolls.',
            desc: 'A Non-Woven Flexo Printing Machine is used to print logos, designs, and branding on non-woven fabric rolls. It uses flexographic printing plates and typically works with water-based inks, making it suitable for eco-friendly bag manufacturing. Prints directly on non-woven fabric rolls before bag making.',
            features: ['4 color high-precision printing', 'Water-based or solvent-based inks', 'Speed average 80-120 m/min', 'Widths up to 52 inches'],
            gsm: '4 color printing',
            tensile: 'Non-woven fabric',
            widths: 'Typically average 80–120 m/min',
            lengths: 'Upto - 52 inches',
            applications: 'Water-based or solvent-based inks',
            image: 'assets/product-flexo-printing.jpg',
            crops: ['center']
        },
        {
            id: 'offset-printing',
            category: 'printing',
            categoryName: 'Printing Solutions',
            name: 'Offset Printing',
            shortDesc: 'Specialized industrial offset printing system adapted to print vibrant, detailed, and multi-color designs directly onto pre-cut bags.',
            desc: 'A non-woven fabric offset printing machine is a specialized industrial system adapted to print vibrant, detailed, and multi-color designs directly onto pre-cut non-woven fabric bags (like D-cut or W-cut bags). It offers sharper details and higher production speeds than traditional screen printing.',
            features: ['Vibrant, detailed multi-color prints', 'Accommodates 42 to 150 GSM fabric', 'Max Bag Size up to 18\" x 24.5\"', 'Dual-purpose paper and bag stock'],
            gsm: '16\" x 22\" to 18\" x 24.5\" (406x560 to 457x620 mm)',
            tensile: '125 mm x 180 mm up to 150 mm x 200 mm',
            widths: '375 mm x 550 mm',
            lengths: '42 to 150 GSM',
            applications: '30 to 250 g/m² (dual-purpose usage)',
            image: 'assets/product-offset-printing.png',
            crops: ['center']
        }
    ];

    // --- SEO META DETAILS MAPPING FOR SPA ROUTER ---
    const SEO_META_MAP = {
        '#/': {
            title: 'VR Industries | Non-Woven Carry Bags & Fabric Manufacturer',
            description: 'VR Industries is a leading manufacturer of W Cut, D Cut, Box Bags, Masks & Suppliers of Non Woven Fabrics. Explore our ISO-certified factory facility.'
        },
        '#/about': {
            title: 'About VR Industries | Leading Manufacturer of Non-Woven Carry Bags',
            description: 'Read the story of VR Industries, our experienced operating team, ISO 9001:2015 quality standards, and B2B carry bag supply since 9 years.'
        },
        '#/products': {
            title: 'Products Catalog | W-Cut, D-Cut, Loop, Box Carry Bags | VR Industries',
            description: 'Browse our carry bags catalog. Inquire about specifications and wholesale pricing for D-Cut, W-Cut, Loop, and Box Non-Woven Bags.'
        },
        '#/infrastructure': {
            title: 'Infrastructure & Production House | VR Industries',
            description: 'Step inside our Dewas manufacturing plant. Inspect our spun-bonding lines, loop handle welding machines, slitting, and packaging areas.'
        },
        '#/contact': {
            title: 'Contact US & Factory Visit | VR Industries',
            description: 'Send an inquiry to jainsuyash1008@gmail.com. Get in touch with Vinay Jain or Rahil Jain, and find directions to our Dewas plant.'
        },
        '#/customers': {
            title: 'Our Customers | Trusted B2B Partnerships | VR Industries',
            description: 'Learn about the business partners, wholesale clients, and custom packaging projects VR Industries services across India.'
        }
    };

    // --- DOM ELEMENT REFERENCES ---
    const pages = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.getElementById('nav-menu');
    const menuToggleBtn = document.getElementById('menu-toggle');
    
    // Catalog Elements
    const filterTabsContainer = document.getElementById('filter-tabs');
    const productsGrid = document.getElementById('products-grid');
    
    // Modal Elements
    const productModal = document.getElementById('product-detail-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalMainImg = document.getElementById('modal-main-img');
    const modalThumbs = document.getElementById('modal-thumbs');
    const modalBadgeCat = document.getElementById('modal-badge-cat');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDesc = document.getElementById('modal-product-desc');
    const modalSpecGsm = document.getElementById('modal-spec-gsm');
    const modalSpecTensile = document.getElementById('modal-spec-tensile');
    const modalSpecWidth = document.getElementById('modal-spec-width');
    const modalSpecLength = document.getElementById('modal-spec-length');
    const modalSpecApps = document.getElementById('modal-spec-apps');
    const modalInquiryCta = document.getElementById('modal-inquiry-cta');

    // Contact Form Elements
    const contactForm = document.getElementById('contact-us-form');
    const formSuccessBanner = document.getElementById('form-success-banner');
    const captchaText = document.getElementById('captcha-question-text');
    const captchaInput = document.getElementById('contact-captcha-answer');
    const successModal = document.getElementById('success-modal');
    const successModalCloseBtn = document.getElementById('success-modal-close-btn');
    const successModalOkBtn = document.getElementById('success-modal-ok-btn');
    
    // Captcha State Variables
    let captchaNum1 = 0;
    let captchaNum2 = 0;
    let captchaResult = 0;
    
    // Simulated Mailbox Elements
    const mailboxTrigger = document.getElementById('mailbox-trigger');
    const mailboxPanel = document.getElementById('mailbox-panel');
    const mailboxCloseBtn = document.getElementById('mailbox-close-btn');
    const mailboxEmptyView = document.getElementById('mailbox-empty-view');
    const mailboxList = document.getElementById('mailbox-list');
    const mailboxUnreadCount = document.getElementById('mailbox-unread-count');
    const mailDetailPanel = document.getElementById('mail-detail-panel');
    const mailBackBtn = document.getElementById('mail-back-btn');
    const mailDetailSubject = document.getElementById('mail-detail-subject');
    const mailDetailFrom = document.getElementById('mail-detail-from');
    const mailDetailTo = document.getElementById('mail-detail-to');
    const mailDetailDate = document.getElementById('mail-detail-date');
    const mailDetailBody = document.getElementById('mail-detail-body');

    // --- 1. SPA ROUTER SYSTEM ---
    function handleRouting() {
        let currentHash = window.location.hash || '#/';
        
        // Clean URL parameter queries (e.g. from catalog filters)
        let routeBase = currentHash.split('?')[0];
        let queryString = currentHash.split('?')[1] || '';
        
        // Match base path route default fallback
        if (!['#/', '#/about', '#/products', '#/infrastructure', '#/contact', '#/customers'].includes(routeBase)) {
            routeBase = '#/';
        }

        // 1. Toggle Page Views
        pages.forEach(page => {
            const pageId = page.getAttribute('id');
            const targetId = 'view-' + (routeBase.replace('#/', '').replace('/', '') || 'home');
            if (pageId === targetId) {
                page.classList.remove('hidden');
                page.classList.add('page-view');
            } else {
                page.classList.add('hidden');
            }
        });

        // 2. Update Header Link Active States
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === routeBase) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // 3. Close mobile hamburger menu drawer when route changes
        mobileMenu.classList.remove('active');
        menuToggleBtn.classList.remove('active');

        // 4. Update dynamic SEO page headers
        const seoData = SEO_META_MAP[routeBase];
        if (seoData) {
            document.title = seoData.title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', seoData.description);
            }
        }

        // 5. Route-Specific Initializations
        if (routeBase === '#/products') {
            // Check if category filter URL query parameters are present
            const params = new URLSearchParams(queryString);
            const categoryFilter = params.get('category') || 'all';
            
            // Set active category filter button UI state
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                if (btn.getAttribute('data-filter') === categoryFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            renderProductsGrid(categoryFilter);
        } else if (routeBase === '#/contact') {
            setupCaptchaQuestion();
        }

        // Scroll smoothly back to top on page navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleRouting);
    handleRouting(); // Init on start

    // --- 2. MOBILE DRAWER NAVIGATION MENU ---
    menuToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggleBtn.classList.toggle('active');
    });

    // --- 3. MOBILE MENU RESET ---

    // --- 4. DYNAMIC PRODUCTS GRID CATALOG RENDERING ---
    function renderProductsGrid(categoryFilter) {
        if (!productsGrid) return;
        productsGrid.innerHTML = '';

        const filteredList = categoryFilter === 'all' 
            ? PRODUCTS_CATALOG 
            : PRODUCTS_CATALOG.filter(p => p.category === categoryFilter);

        if (filteredList.length === 0) {
            productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No products matching selection found.</p>`;
            return;
        }

        filteredList.forEach(product => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrap">
                    <span class="product-category-badge">${product.categoryName}</span>
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-card-body">
                    <div>
                        <h4>${product.name}</h4>
                        <p>${product.shortDesc}</p>
                        <ul class="product-features-preview">
                            ${product.features.slice(0, 3).map(feat => `
                                <li>
                                    <svg viewBox="0 0 24 24"><use href="#icon-check"></use></svg>
                                    <span>${feat}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <button class="btn btn-secondary btn-sm open-details-btn" data-id="${product.id}" style="width: 100%;">
                        View Details
                    </button>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // Attach click listeners to new view details buttons
        document.querySelectorAll('.open-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openProductDetailsModal(id);
            });
        });
    }

    // Handle catalog filter pill clicks
    if (filterTabsContainer) {
        filterTabsContainer.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('.filter-btn');
            if (!filterBtn) return;

            const targetFilter = filterBtn.getAttribute('data-filter');
            
            // Adjust address bar hash to trigger router history states
            window.location.hash = `#/products?category=${targetFilter}`;
        });
    }

    // --- 5. INTERACTIVE PRODUCT DETAILS POPUP MODAL ---
    function openProductDetailsModal(productId) {
        const product = PRODUCTS_CATALOG.find(p => p.id === productId);
        if (!product || !productModal) return;

        // Set Text details
        modalBadgeCat.textContent = product.categoryName;
        modalProductName.textContent = product.name;
        modalProductDesc.textContent = product.desc;
        modalSpecGsm.textContent = product.gsm;
        modalSpecTensile.textContent = product.tensile;
        modalSpecWidth.textContent = product.widths;
        modalSpecLength.textContent = product.lengths;
        modalSpecApps.textContent = product.applications;

        // Dynamically adjust specs table labels depending on product category
        const labelGsm = document.getElementById('modal-label-gsm');
        const labelTensile = document.getElementById('modal-label-tensile');
        const labelWidth = document.getElementById('modal-label-width');
        const labelLength = document.getElementById('modal-label-length');
        const labelApps = document.getElementById('modal-label-apps');

        if (product.category === 'fabric') {
            if (labelGsm) labelGsm.textContent = 'Weight';
            if (labelTensile) labelTensile.textContent = 'Material';
            if (labelWidth) labelWidth.textContent = 'Type';
            if (labelLength) labelLength.textContent = 'Size';
            if (labelApps) labelApps.textContent = 'Pattern';
        } else if (product.category === 'printing') {
            if (product.id === 'offset-printing') {
                if (labelGsm) labelGsm.textContent = 'Max Bag Size';
                if (labelTensile) labelTensile.textContent = 'Min Bag Size';
                if (labelWidth) labelWidth.textContent = 'Max Printing Area';
                if (labelLength) labelLength.textContent = 'Fabric Weight';
                if (labelApps) labelApps.textContent = 'Paper Thickness';
            } else {
                if (labelGsm) labelGsm.textContent = 'Colors';
                if (labelTensile) labelTensile.textContent = 'Material';
                if (labelWidth) labelWidth.textContent = 'Printing Speed';
                if (labelLength) labelLength.textContent = 'Printing Width';
                if (labelApps) labelApps.textContent = 'Ink Type';
            }
        } else {
            if (labelGsm) labelGsm.textContent = 'Thickness';
            if (labelTensile) labelTensile.textContent = 'Material';
            if (labelWidth) labelWidth.textContent = 'Style';
            if (labelLength) labelLength.textContent = 'Sizes';
            if (labelApps) labelApps.textContent = 'Color';
        }

        // Setup main image source
        modalMainImg.src = product.image;
        modalMainImg.style.objectPosition = 'center';

        // Hide thumbnails container as we have single product-specific photos
        modalThumbs.innerHTML = '';
        modalThumbs.style.display = 'none';

        // Bind Inquiry Button
        modalInquiryCta.onclick = () => {
            // Close modal
            closeDetailsModal();
            // Navigate to contact and prefill form text
            window.location.hash = '#/contact';
            setTimeout(() => {
                const selectElement = document.getElementById('contact-product');
                const messageElement = document.getElementById('contact-message');
                if (selectElement) {
                    selectElement.value = product.categoryName;
                }
                if (messageElement) {
                    messageElement.value = `Hello, we would like to request a wholesale price quote for the ${product.name}.\n\nProduct Requirements:\n- Target Quantity (Bags):\n- Dimensions / Size Preference:\n- Customized Printing (Yes/No):\n- Preferred GSM (Thickness):`;
                }
            }, 150);
        };

        // Open layout UI
        productModal.classList.add('active');
        productModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }

    function closeDetailsModal() {
        if (!productModal) return;
        productModal.classList.remove('active');
        productModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock background scrolling
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeDetailsModal);
    }
    
    // Close modal on clicking backdrop
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeDetailsModal();
            }
        });
    }

    // --- 6. ANIMATED STATISTICS COUNTERS WITH VIEWPORT TRACKING ---
    const statsNumbers = document.querySelectorAll('.stat-number');
    
    const countOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNode = entry.target;
                const endVal = parseInt(targetNode.getAttribute('data-target'), 10);
                const suffix = targetNode.getAttribute('data-suffix') || '';
                animateValue(targetNode, 0, endVal, 1500, suffix);
                observer.unobserve(targetNode); // Animate once
            }
        });
    }, countOptions);

    statsNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });

    function animateValue(obj, start, end, duration, suffix) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentNum = Math.floor(progress * (end - start) + start);
            
            // Format numbers nicely with commas if target is large (e.g. 1,000,000)
            const formattedNum = currentNum >= 100000 
                ? currentNum.toLocaleString() 
                : currentNum;

            obj.innerHTML = formattedNum + suffix + (end === 25 || end === 150 || end === 500 ? '+' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // --- 7. CONTACT FORM VALIDATION & CAPTCHA SYSTEM ---

    function setupCaptchaQuestion() {
        if (!captchaText) return;
        captchaNum1 = Math.floor(Math.random() * 9) + 2; // 2 to 10
        captchaNum2 = Math.floor(Math.random() * 8) + 1; // 1 to 8
        captchaResult = captchaNum1 + captchaNum2;
        captchaText.textContent = `Spam Protection Challenge: Calculate ${captchaNum1} + ${captchaNum2} = ? *`;
        captchaInput.value = '';
        captchaInput.classList.remove('form-input-error');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;

            // Name
            const nameInput = document.getElementById('contact-name');
            const errorName = document.getElementById('error-name');
            if (!nameInput.value.trim()) {
                errorName.style.display = 'block';
                nameInput.style.borderColor = '#ef4444';
                isFormValid = false;
            } else {
                errorName.style.display = 'none';
                nameInput.style.borderColor = '';
            }

            // Email
            const emailInput = document.getElementById('contact-email');
            const errorEmail = document.getElementById('error-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                errorEmail.style.display = 'block';
                emailInput.style.borderColor = '#ef4444';
                isFormValid = false;
            } else {
                errorEmail.style.display = 'none';
                emailInput.style.borderColor = '';
            }



            // Message
            const messageInput = document.getElementById('contact-message');
            const errorMessage = document.getElementById('error-message');
            if (!messageInput.value.trim()) {
                errorMessage.style.display = 'block';
                messageInput.style.borderColor = '#ef4444';
                isFormValid = false;
            } else {
                errorMessage.style.display = 'none';
                messageInput.style.borderColor = '';
            }

            // Captcha Verification
            const errorCaptcha = document.getElementById('error-captcha');
            if (parseInt(captchaInput.value.trim(), 10) !== captchaResult) {
                errorCaptcha.style.display = 'block';
                captchaInput.style.borderColor = '#ef4444';
                isFormValid = false;
            } else {
                errorCaptcha.style.display = 'none';
                captchaInput.style.borderColor = '';
            }

            if (!isFormValid) {
                return; // Stop form submission
            }

            // Generate structured form data payload
            const phoneInput = document.getElementById('contact-phone');
            const phoneVal = phoneInput ? phoneInput.value.trim() : '';

            const inquiryData = {
                id: 'inq_' + Date.now(),
                timestamp: new Date().toLocaleString(),
                name: nameInput.value.trim(),
                company: 'Not Provided',
                email: emailInput.value.trim(),
                phone: phoneVal || 'Not Provided',
                product: 'General Inquiry',
                message: messageInput.value.trim()
            };

            // Save inquiry to local registry index stack (for simulation purposes)
            let existingSubmissions = [];
            try {
                existingSubmissions = JSON.parse(localStorage.getItem('vr_inquiries') || '[]');
                if (!Array.isArray(existingSubmissions)) {
                    existingSubmissions = [];
                }
            } catch (err) {
                existingSubmissions = [];
            }
            existingSubmissions.unshift(inquiryData);
            localStorage.setItem('vr_inquiries', JSON.stringify(existingSubmissions));

            // Run Simulated Email Generation
            triggerSimulatedEmails(inquiryData);

            // Display Success State Banner & Modal Dialog
            formSuccessBanner.style.display = 'block';
            if (successModal) {
                successModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scrolling
            }
            contactForm.reset();
            setupCaptchaQuestion(); // Regenerate for security

            // Scroll success banner into center viewport
            formSuccessBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Close success modal actions
    if (successModal) {
        const closeSuccessModal = () => {
            successModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };

        if (successModalCloseBtn) {
            successModalCloseBtn.addEventListener('click', closeSuccessModal);
        }
        if (successModalOkBtn) {
            successModalOkBtn.addEventListener('click', closeSuccessModal);
        }
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeSuccessModal();
            }
        });
    }

    // --- 8. SIMULATED MAILBOX SYSTEM (SPECIAL B2B WORKFLOW DEMO) ---
    let mailbox = [];
    let unreadCount = 0;

    // Load existing messages if saved in storage
    const storedMail = localStorage.getItem('vr_mailbox');
    if (storedMail) {
        try {
            mailbox = JSON.parse(storedMail);
            if (!Array.isArray(mailbox)) {
                mailbox = [];
            }
        } catch (e) {
            mailbox = [];
            localStorage.removeItem('vr_mailbox');
        }
        renderMailboxList();
    }

    function triggerSimulatedEmails(inquiry) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = new Date().toLocaleDateString();

        // 1. Generate Email 1: Inbound Lead to VR Sales
        const inboundEmail = {
            id: 'mail_in_' + Date.now(),
            direction: 'inbound',
            from: `${inquiry.name} <${inquiry.email}>`,
            to: 'VR Industries Sales <jainsuyash1008@gmail.com>',
            time: `${dateStr} ${timestamp}`,
            subject: `[Lead Alert] B2B Inquiry: ${inquiry.product} from ${inquiry.company}`,
            body: `Dear Sales Team,

We have received a new commercial requirement request from our website:

-- PROSPECT PROFILE --
Prospect Name: ${inquiry.name}
Company Name: ${inquiry.company}
Email Address: ${inquiry.email}
Phone Line: ${inquiry.phone}
Target Category: ${inquiry.product}

-- DETAILED SPECIFICATIONS MESSAGE --
"${inquiry.message}"

Please review this lead profile. Open standard pricing files and contact this prospect within 24 hours to negotiate bulk manufacturing schedules.

Regards,
VR Core Automated Lead Hub`
        };

        // 2. Generate Email 2: Outbound Auto-Acknowledgment back to user
        const outboundEmail = {
            id: 'mail_out_' + Date.now(),
            direction: 'outbound',
            from: 'VR Industries Sales <jainsuyash1008@gmail.com>',
            to: `${inquiry.name} <${inquiry.email}>`,
            time: `${dateStr} ${timestamp}`,
            subject: `VR Industries Inquiry Acknowledgment | Ref: #${inquiry.id.substring(4, 9)}`,
            body: `Dear ${inquiry.name},

Thank you for contacting VR Industries. This email confirms that we have received your detailed inquiry:
"${inquiry.product}"

An operations manager is reviewing your specifications. We will provide a customized response along with a commercial wholesale pricing outline within 24 business hours.

Your Inquiry Reference ID is: #${inquiry.id.substring(4, 9)}

We look forward to a potential manufacturing partnership.

Sincerely,
Sales Operations Team
VR Industries Limited
32-33/7-B Industrial Area No. 1, A.B. Road, Dewas, Madhya Pradesh – 455001
Web: www.vrindustries.com | Tel: +91 7049493600 | WhatsApp: +91 9165690656`
        };

        // Save to mailbox list
        mailbox.unshift(inboundEmail, outboundEmail);
        unreadCount += 2;
        localStorage.setItem('vr_mailbox', JSON.stringify(mailbox));

        // Update UI states
        renderMailboxList();
        
        // Open mailbox automatically and show badge if DOM element exists
        if (mailboxPanel) {
            mailboxPanel.classList.add('active');
        }
        
        // Pulse animation effect on trigger if DOM element exists
        if (mailboxTrigger) {
            mailboxTrigger.style.animation = 'pulse 1.5s infinite';
            setTimeout(() => {
                mailboxTrigger.style.animation = '';
            }, 6000);
        }
    }

    function renderMailboxList() {
        if (!mailboxList) return;
        
        // Clear empty view or details
        if (mailbox.length > 0) {
            mailboxEmptyView.style.display = 'none';
        } else {
            mailboxEmptyView.style.display = 'flex';
        }

        // Keep unread badge updated
        if (unreadCount > 0) {
            mailboxUnreadCount.textContent = unreadCount;
            mailboxUnreadCount.style.display = 'flex';
        } else {
            mailboxUnreadCount.style.display = 'none';
        }

        // Remove old items
        const existingItems = mailboxList.querySelectorAll('.mail-item');
        existingItems.forEach(item => item.remove());

        // Render mail cards
        mailbox.forEach(mail => {
            const mailCard = document.createElement('div');
            mailCard.className = 'mail-item';
            mailCard.innerHTML = `
                <div class="mail-item-header">
                    <span class="${mail.direction === 'inbound' ? 'mail-badge-inbound' : 'mail-badge-outbound'}">
                        ${mail.direction === 'inbound' ? 'Lead Inbound' : 'Auto-Response'}
                    </span>
                    <span class="mail-time">${mail.time.split(' ')[1]}</span>
                </div>
                <div class="mail-subject">${mail.subject}</div>
                <div class="mail-from">${mail.direction === 'inbound' ? 'From: ' + mail.from : 'To: ' + mail.to}</div>
            `;
            
            mailCard.addEventListener('click', () => {
                openMailDetail(mail);
            });
            mailboxList.appendChild(mailCard);
        });
    }

    function openMailDetail(mail) {
        if (!mailDetailPanel) return;
        
        mailDetailSubject.textContent = mail.subject;
        mailDetailFrom.textContent = mail.from;
        mailDetailTo.textContent = mail.to;
        mailDetailDate.textContent = mail.time;
        mailDetailBody.textContent = mail.body;

        mailDetailPanel.classList.add('active');
    }

    // Interactive mailbox panels actions
    if (mailboxTrigger) {
        mailboxTrigger.addEventListener('click', () => {
            mailboxPanel.classList.toggle('active');
            // Reset unread count when opening inbox panel
            if (mailboxPanel.classList.contains('active')) {
                unreadCount = 0;
                mailboxUnreadCount.style.display = 'none';
            }
        });
    }

    if (mailboxCloseBtn) {
        mailboxCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mailboxPanel.classList.remove('active');
        });
    }

    if (mailBackBtn) {
        mailBackBtn.addEventListener('click', () => {
            mailDetailPanel.classList.remove('active');
        });
    }

    // --- 9. EXTRA GLOBAL UTILITIES ---
    // Handle inquiry button from other pages triggering products filter redirect
    const productsInquiryBtn = document.getElementById('products-inquiry-btn');
    if (productsInquiryBtn) {
        productsInquiryBtn.addEventListener('click', () => {
            window.location.hash = '#/contact';
        });
    }

    // ISO Certificate Lightbox Toggle
    const isoWrapperCard = document.querySelector('.iso-wrapper-card');
    const certLightbox = document.getElementById('cert-lightbox');
    const certCloseBtn = document.getElementById('cert-close-btn');

    if (isoWrapperCard && certLightbox) {
        isoWrapperCard.addEventListener('click', () => {
            certLightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        });

        // Close when clicking the lightbox container itself
        certLightbox.addEventListener('click', (e) => {
            if (e.target === certLightbox) {
                certLightbox.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    if (certCloseBtn && certLightbox) {
        certCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            certLightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
});
