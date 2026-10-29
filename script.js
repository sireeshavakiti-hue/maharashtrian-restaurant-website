// 30+ Maharashtrian Authentic Dishes Database
const menuData = [
    // NASTA (Breakfast) - 8 items
    { id: 1, name: "झणझणीत मिसळ पाव (Misal Pav)", category: "nasta", price: 90, type: "veg", desc: "Spicy moth bean curry topped with farsan, onions & served with warm pav." },
    { id: 2, name: "कांदा पोहे (Kanda Poha)", category: "nasta", price: 50, type: "veg", desc: "Flattened rice tempered with mustard seeds, turmeric, green chillies & roasted peanuts." },
    { id: 3, name: "उकडीचे मोदक (Ukadiche Modak 2pcs)", category: "nasta", price: 80, type: "veg", desc: "Steamed rice flour dumplings stuffed with grated coconut & jaggery flavored with cardamom." },
    { id: 4, name: "थालीपीठ (Thalipeeth with Loni)", category: "nasta", price: 90, type: "veg", desc: "Multigrain savory pancake served with homemade fresh white butter & thick curd." },
    { id: 5, name: "कोथिंबीर वडी (Kothimbir Vadi 6pcs)", category: "nasta", price: 70, type: "veg", desc: "Crispy fried coriander & gram flour savory cakes with sesame seeds." },
    { id: 6, name: "अळू वडी (Alu Vadi / Patra)", category: "nasta", price: 70, type: "veg", desc: "Colocasia leaves layered with spiced gram flour paste, steamed & shallow fried." },
    { id: 7, name: "साबुदाणा वडा (Sabudana Vada 2pcs)", category: "nasta", price: 70, type: "veg", desc: "Deep-fried sago tapioca patties with roasted peanuts served with sweet dahi." },
    { id: 8, name: "साबुदाणा खिचडी (Sabudana Khichdi)", category: "nasta", price: 60, type: "veg", desc: "Soaked sago pearls cooked with crushed peanuts, green chillies & ghee." },

    // JEEVAN (Main Course) - 12 items
    { id: 9, name: "पूरणपोळी थाळी (Puran Poli Thali)", category: "jeevan", price: 220, type: "veg", desc: "2 Sweet lentil flatbreads served with Katachi Amti, Rice, Batata Bhaji & Ghee." },
    { id: 10, name: "कोल्हापुरी मटण सुक्का (Mutton Sukka)", category: "jeevan", price: 340, type: "nonveg", desc: "Fiery Kolhapuri style dry goat meat cooked in roasted coconut masala." },
    { id: 11, name: "मालवणी चिकन रस्सा (Malvani Chicken)", category: "jeevan", price: 280, type: "nonveg", desc: "Coastal Malvani curry cooked with chicken, fresh coconut and local spices." },
    { id: 12, name: "सुरमई फ्राय (Surmai Rava Fry)", category: "jeevan", price: 380, type: "nonveg", desc: "King fish slice coated in semolina and chili masala, shallow fried crispy." },
    { id: 13, name: "झुणका भाकर (Zunka Bhakar Combo)", category: "jeevan", price: 150, type: "veg", desc: "Traditional dry gram flour curry served with 2 Jowar/Bajra Bhakri & Thecha." },
    { id: 14, name: "वांग्याचे भरीत (Bharli Vangi)", category: "jeevan", price: 160, type: "veg", desc: "Small baby eggplants stuffed with spicy peanut-sesame masala gravy." },
    { id: 15, name: "पातोडी रस्सा (Patodi Rassa)", category: "jeevan", price: 170, type: "veg", desc: "Nagpuri delicacy of gram flour fudge cubes cooked in spicy black gravy." },
    { id: 16, name: "मटकीची उसळ (Matki Usal)", category: "jeevan", price: 130, type: "veg", desc: "Sprouted moth beans cooked with coconut, curry leaves & Maharashtrian spices." },
    { id: 17, name: "मटण तांबडा रस्सा (Tambda Rassa Curry)", category: "jeevan", price: 260, type: "nonveg", desc: "Famous Kolhapuri red spicy mutton broth loaded with rich flavors." },
    { id: 18, name: "बोंबील फ्राय (Bombil Rava Fry 4pcs)", category: "jeevan", price: 260, type: "nonveg", desc: "Crispy fried Bombay Duck fish seasoned with Malvani coastal masala." },
    { id: 19, name: "मसाले भात (Masale Bhaat)", category: "jeevan", price: 140, type: "veg", desc: "Spiced aromatic rice prepared with Goda masala, tendli (ivy gourd) and cashews." },
    { id: 20, name: "ज्वारीची भाकरी (Jowar Bhakri 1pc)", category: "jeevan", price: 30, type: "veg", desc: "Hand-patted healthy sorghum flatbread baked on clay tawa." },

    // MITHAAS (Sweets) - 6 items
    { id: 21, name: "केशर श्रीखंड (Kesar Shrikhand)", category: "mithaas", price: 90, type: "veg", desc: "Sweet strained yogurt flavored with saffron, cardamom and nuts." },
    { id: 22, name: "आंबा मस्तानी (Aam Mastani)", category: "mithaas", price: 130, type: "veg", desc: "Thick mango milkshake topped with vanilla ice cream & dry fruits." },
    { id: 23, name: "खरवस (Kharvas / Junnu 2pcs)", category: "mithaas", price: 80, type: "veg", desc: "Traditional steamed milk pudding made from cow's colostrum milk." },
    { id: 24, name: "बासुंदी (Badam Basundi)", category: "mithaas", price: 110, type: "veg", desc: "Slowly reduced thickened sweet milk studded with almond flakes & pistachios." },
    { id: 25, name: "मोतीचूर लाडू (Motichoor Ladoo 2pcs)", category: "mithaas", price: 60, type: "veg", desc: "Melt-in-mouth sweet pearls made with pure Desi Ghee." },
    { id: 26, name: "गुलाबजाम (Gulab Jamun 2pcs)", category: "mithaas", price: 50, type: "veg", desc: "Soft khoya dumplings soaked in warm rose flavored sugar syrup." },

    // PEYA (Drinks) - 5 items
    { id: 27, name: "थंडगार सोलकढी (Chilled Solkadhi)", category: "peya", price: 50, type: "veg", desc: "Refreshing pink digestive drink made with Kokum juice, coconut milk & garlic." },
    { id: 28, name: "ताक (Masala Taak)", category: "peya", price: 35, type: "veg", desc: "Spiced Indian buttermilk tempered with cumin, green chili & fresh coriander." },
    { id: 29, name: "कैरीचे पन्हे (Kairi Panha)", category: "peya", price: 60, type: "veg", desc: "Sweet & tangy raw mango summer cooler flavored with roasted cumin & jaggery." },
    { id: 30, name: "कोकम सरबत (Kokum Sharbat)", category: "peya", price: 45, type: "veg", desc: "Cooling wild mangosteen fruit syrup with a hint of black salt." },
    { id: 31, name: "आलं-मसाला चहा (Special Cutting Chai)", category: "peya", price: 20, type: "veg", desc: "Strong ginger & lemongrass infused Maharashtrian cutting tea." }
];

// Initial Reviews Data
let reviewsData = [
    { name: "अमित जोशी", rating: 5, comment: "अतिशय उत्तम स्वाद! मिसळ आणि उकडीचे मोदक एकदम नंबर १ आहेत." },
    { name: "Priya Sawant", rating: 5, comment: "Authentic Malvani Chicken & Solkadhi. Reminded me of my hometown!" },
    { name: "Rahul Deshmukh", rating: 4, comment: "Thalipeeth and Loni was super fresh. Quick pre-order pickup." }
];

let selectedCart = [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElem = document.getElementById('cartTotal');
const reviewsGrid = document.getElementById('reviewsGrid');

// Render Menu Items (Images removed)
function renderMenu(items) {
    menuGrid.innerHTML = '';
    if(items.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">Koi dish nahi mili. Dusra word search karein.</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        const typeTag = item.type === 'veg' 
            ? `<span class="veg-icon">🟢 VEG</span>` 
            : `<span class="nonveg-icon">🔴 NON-VEG</span>`;

        card.innerHTML = `
            <div class="card-body">
                <div class="card-header">
                    <h3 class="item-title">${item.name}</h3>
                    ${typeTag}
                </div>
                <p class="item-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="btn-primary" onclick="addToCart(${item.id})"><i class="fa-solid fa-plus"></i> Add</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Add Item to Order Cart
function addToCart(id) {
    const item = menuData.find(d => d.id === id);
    selectedCart.push(item);
    updateCartUI();
}

// Update Cart Display
function updateCartUI() {
    if(selectedCart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-msg">Koi dish select nahi ki hai. Menu से Add Karein.</p>`;
        cartTotalElem.textContent = '₹0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    selectedCart.forEach((item, index) => {
        total += item.price;
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price} <i class="fa-solid fa-trash" style="color:red; cursor:pointer; margin-left:8px;" onclick="removeFromCart(${index})"></i></span>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalElem.textContent = `₹${total}`;
}

function removeFromCart(index) {
    selectedCart.splice(index, 1);
    updateCartUI();
}

// Render Reviews
function renderReviews() {
    reviewsGrid.innerHTML = '';
    reviewsData.forEach(r => {
        const div = document.createElement('div');
        div.className = 'review-card';
        const stars = '⭐'.repeat(r.rating);
        div.innerHTML = `
            <div class="review-header">
                <span class="reviewer">${r.name}</span>
                <span class="stars">${stars}</span>
            </div>
            <p>${r.comment}</p>
        `;
        reviewsGrid.appendChild(div);
    });
}

// Filtering & Search Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        if(cat === 'all') {
            renderMenu(menuData);
        } else {
            renderMenu(menuData.filter(i => i.category === cat));
        }
    });
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = menuData.filter(i => i.name.toLowerCase().includes(query) || i.desc.toLowerCase().includes(query));
    renderMenu(filtered);
});

// Form Submissions
document.getElementById('preorderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if(selectedCart.length === 0) {
        alert('Kripya menu se kam se kam ek dish add karein!');
        return;
    }
    const name = document.getElementById('custName').value;
    alert(`धन्यवाद ${name}! Aapka pre-order book ho gaya hai. Hum delivery nahi karte, isliye time par restaurant aakar dine-in/pickup kar lein.`);
    selectedCart = [];
    updateCartUI();
    e.target.reset();
});

document.getElementById('reserveForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('resName').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    alert(`नुकतीच बुकिंग झाली! ${name}, aapka table ${date} ko ${time} baje ke liye reserve ho gaya hai.`);
    e.target.reset();
});

document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reviewerName').value;
    const rating = parseInt(direction = document.getElementById('reviewerRating').value);
    const comment = document.getElementById('reviewerComment').value;

    reviewsData.unshift({ name, rating, comment });
    renderReviews();
    e.target.reset();
    alert('Review dene ke liye dhanyawad!');
});

// Initial Load
renderMenu(menuData);
renderReviews();