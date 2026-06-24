/* ═══════════════════════════════════════════════════
   Sri Murugan Mess — app.js
   Handles: Menu rendering, Cart, Auth modal, Booking
═══════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────
   MENU DATA
──────────────────────────────────────────────── */
const MENU = {
  breakfast: [
    { n: 'Idli (2 pcs)',           d: 'Fluffy idlis with sambar, tomato & coconut chutney',            p: 30 },
    { n: 'Set Dosa (2 pcs)',        d: 'Soft spongy dosas with sambar & 2 chutneys',                   p: 40 },
    { n: 'Masala Dosa',             d: 'Crispy dosa with spiced potato-onion filling',                  p: 55 },
    { n: 'Ghee Roast Dosa',         d: 'Ultra-crispy dosa roasted in pure farm ghee',                  p: 65 },
    { n: 'Pongal',                  d: 'Venpongal with freshly-cracked pepper, served with gothsu',     p: 40 },
    { n: 'Upma',                    d: 'Semolina upma with mustard, curry leaves & vegetables',         p: 35 },
    { n: 'Idiyappam (4 pcs)',        d: 'Steamed rice noodles with fresh coconut milk',                 p: 50 },
    { n: 'Medu Vada (2 pcs)',        d: 'Crispy lentil fritters with sambar & coconut chutney',         p: 40 },
    { n: 'Appam (2 pcs)',            d: 'Soft lace-edged rice crepes with sweetened coconut milk',      p: 50 },
    { n: 'Bread Upma',              d: 'Crumbled bread tossed with onion, tomato & spices',             p: 35 },
    { n: 'Poha',                    d: 'Flattened rice with mustard, peanuts & fresh lemon',            p: 30 },
    { n: 'Kuzhi Paniyaram (6 pcs)', d: 'Fermented rice batter dumplings, crisp outside, fluffy inside', p: 45 },
  ],
  meals: [
    { n: 'Full Meals (Saapadu)',     d: 'Unlimited rice, sambar, rasam, kootu, poriyal, appalam, pickle', p: 90 },
    { n: 'Mini Meals',               d: 'Rice, sambar, one curry, curd & appalam',                       p: 60 },
    { n: 'Vegetable Biryani',        d: 'Slow-cooked seeraga samba rice biryani with raita & salan',     p: 120 },
    { n: 'Curd Rice',                d: 'Tempered curd rice with pomegranate, ginger & papad',           p: 40 },
    { n: 'Lemon Rice',               d: 'Tangy lemon rice with roasted peanuts & curry leaves',          p: 50 },
    { n: 'Tamarind Rice',            d: 'Puliyodarai — authentic Tamil temple-style classic',             p: 50 },
    { n: 'Sambar Rice',              d: 'Rice mixed with rich sambar, topped with ghee',                 p: 55 },
    { n: 'Rasam Rice',               d: 'Pepper rasam mixed rice — pure South Indian comfort',           p: 50 },
    { n: 'Tomato Rice',              d: 'Spiced tomato rice with cashews & curry leaves',                p: 55 },
    { n: 'Coconut Rice',             d: 'Fragrant coconut rice with mustard & dried chilli',             p: 55 },
  ],
  tiffin: [
    { n: 'Parotta (2 pcs) + Kurma',  d: 'Flaky layered parotta with aromatic vegetable kurma',          p: 65 },
    { n: 'Kothu Parotta',             d: 'Shredded parotta tossed with masala on a hot iron tawa',      p: 75 },
    { n: 'Paneer Parotta',            d: 'Parotta stuffed with spiced cottage cheese filling',           p: 85 },
    { n: 'Chapati (3 pcs) + Kurma',  d: 'Soft whole-wheat chapatis with mixed vegetable kurma',         p: 60 },
    { n: 'Poori (2 pcs) + Masala',   d: 'Puffed puris with spiced potato masala',                      p: 50 },
    { n: 'Onion Uthappam',            d: 'Thick rice pancake topped with onion & green chilli',         p: 55 },
    { n: 'Tomato Uthappam',           d: 'Thick dosa with fresh tomato & chilli topping',               p: 55 },
    { n: 'Bajji Plate (6 pcs)',       d: 'Assorted veg bajjis — onion, banana, green chilli',           p: 55 },
    { n: 'Masala Puri',               d: 'Small crispy puris with peas curry & tangy topping',          p: 60 },
    { n: 'Egg-Free Omelette Dosa',    d: 'Besan & veggie batter dosa, protein-rich, no eggs',           p: 60 },
  ],
  chettinad: [
    { n: 'Chettinad Kuzhambu Rice',  d: 'Fiery pepper-spice kuzhambu with steamed rice & papad',       p: 100 },
    { n: 'Kara Kuzhambu',             d: 'Sun-dried berry & tamarind based hot gravy, best with rice',  p: 80 },
    { n: 'Chettinad Parotta Meal',    d: 'Parotta served with signature Chettinad vegetable kurma',     p: 110 },
    { n: 'Kavuni Arisi Payasam',      d: 'Heirloom black rice pudding in coconut milk',                 p: 60 },
    { n: 'Chettinad Idiyappam Set',   d: 'Rice noodles with Chettinad coconut kurma',                   p: 80 },
    { n: 'Vellai Kurma',              d: 'Mild white coconut-cashew kurma — best with idiyappam',       p: 75 },
    { n: 'Milagu Rasam',              d: 'Therapeutic pepper rasam brewed with dry ginger & tulsi',     p: 35 },
    { n: 'Urundai Kuzhambu',          d: 'Lentil ball curry in tamarind-spice gravy',                   p: 90 },
  ],
  sweets: [
    { n: 'Rava Kesari',               d: 'Saffron semolina halwa with cashews & raisins',               p: 35 },
    { n: 'Vermicelli Payasam',         d: 'Creamy kheer in full-cream milk with cardamom',              p: 45 },
    { n: 'Paal Payasam',              d: 'Traditional milk-rice pudding slow-cooked for 2 hours',        p: 50 },
    { n: 'Badam Halwa',               d: 'Rich almond halwa in pure ghee — made fresh on order',        p: 60 },
    { n: 'Moong Dal Halwa',           d: 'Slow-cooked lentil halwa with cardamom & dry fruits',         p: 55 },
    { n: 'Coconut Burfi',             d: 'Homemade coconut fudge — fresh every weekend',                p: 40 },
    { n: 'Mysore Pak',                d: 'Gram flour fudge in pure ghee — crisp outside, melt inside',  p: 45 },
    { n: 'Jangiri',                   d: 'Urad dal rings in sugar syrup — traditional festive sweet',   p: 40 },
    { n: 'Kalkandu Pongal',           d: 'Rock candy sweetened pongal — a temple offering favourite',   p: 55 },
  ],
  drinks: [
    { n: 'Filter Coffee (Kaapi)',      d: 'Fresh decoction with full-cream milk, any sweetness',         p: 20 },
    { n: 'Masala Tea',                d: 'Ginger-cardamom spiced chai',                                  p: 18 },
    { n: 'Buttermilk (Moru)',          d: 'Lightly spiced chaas with ginger, curry leaves & cumin',     p: 20 },
    { n: 'Fresh Lime Soda',           d: 'Squeezed lime with soda, sweet or salted',                    p: 30 },
    { n: 'Badam Milk',                d: 'Warm almond-saffron milk (evenings only)',                     p: 40 },
    { n: 'Rose Milk',                 d: 'Chilled milk with rose syrup & basil seeds',                   p: 35 },
    { n: 'Nannari Sarbath',           d: 'Chilled sarsaparilla cooler — Chennai summer classic',         p: 30 },
    { n: 'Tender Coconut Water',       d: 'Fresh coconut water served in shell',                        p: 50 },
    { n: 'Panakam',                   d: 'Jaggery-pepper-cardamom drink — traditional & cooling',       p: 25 },
  ],
};

/* ────────────────────────────────────────────────
   STATE
──────────────────────────────────────────────── */
let cart = {};                   // { itemId: { name, price, qty } }
let currentUser = null;          // null or full user record from storage
let pendingCheckout = false;     // trigger checkout after login
let pendingBooking  = false;     // trigger booking after login
let pendingWalletAction = null;  // 'checkout' | 'booking' — retried after adding money
let selectedPaymentMethod = 'gpay';

const STARTING_WALLET_BALANCE = 0;    // new sign-ups start with an empty wallet
const TABLE_BOOKING_FEE       = 50;   // ₹ reservation fee deducted from wallet

/* ────────────────────────────────────────────────
   USER STORAGE  (simulated backend via localStorage)
   users db shape: { "email@x.com": { name, email, phone, password, wallet, orders:[], bookings:[] } }
──────────────────────────────────────────────── */
function loadUsers() {
  try { return JSON.parse(localStorage.getItem('smm_users') || '{}'); }
  catch (e) { return {}; }
}
function saveUsers(users) {
  localStorage.setItem('smm_users', JSON.stringify(users));
}
function saveCurrentUser() {
  if (!currentUser) return;
  const users = loadUsers();
  users[currentUser.email] = currentUser;
  saveUsers(users);
}

/* ────────────────────────────────────────────────
   MENU RENDERING
──────────────────────────────────────────────── */
function renderSection(key) {
  const el = document.getElementById('tab-' + key);
  if (!el) return;
  el.innerHTML = MENU[key].map((item, idx) => {
    const id  = key + '_' + idx;
    const qty = cart[id]?.qty || 0;
    const control = qty === 0
      ? `<button class="add-btn" onclick="addToCart('${id}','${escHtml(item.n)}',${item.p})">+ Add</button>`
      : `<div class="qty-ctrl">
           <button class="qty-btn" onclick="changeQty('${id}',-1)">−</button>
           <span class="qty-num" id="qty-${id}">${qty}</span>
           <button class="qty-btn" onclick="changeQty('${id}',1)">+</button>
         </div>`;
    return `
      <div class="menu-item">
        <div class="menu-item-left">
          <div class="menu-veg"></div>
          <div class="menu-item-info">
            <h4>${escHtml(item.n)}</h4>
            <p>${escHtml(item.d)}</p>
          </div>
        </div>
        <div class="menu-item-right">
          <span class="menu-price">₹${item.p}</span>
          ${control}
        </div>
      </div>`;
  }).join('');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Initialise all sections on page load
Object.keys(MENU).forEach(renderSection);

/* ────────────────────────────────────────────────
   CART
──────────────────────────────────────────────── */
function addToCart(id, name, price) {
  cart[id] = { name, price, qty: 1 };
  updateCartUI();
  renderSection(id.split('_')[0]);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
  renderSection(id.split('_')[0]);
}

function updateCartUI() {
  const ids      = Object.keys(cart);
  const count    = ids.reduce((s, id) => s + cart[id].qty, 0);
  const subtotal = ids.reduce((s, id) => s + cart[id].price * cart[id].qty, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const total    = subtotal + delivery;

  document.getElementById('cart-count').textContent = count;

  const emptyEl   = document.getElementById('cart-empty');
  const listEl    = document.getElementById('cart-items-list');
  const summaryEl = document.getElementById('cart-summary');

  if (count === 0) {
    emptyEl.style.display   = 'block';
    listEl.style.display    = 'none';
    summaryEl.style.display = 'none';
  } else {
    emptyEl.style.display   = 'none';
    listEl.style.display    = 'flex';
    summaryEl.style.display = 'block';
    listEl.innerHTML = ids.map(id => `
      <div class="cart-item">
        <span class="cart-item-name">${cart[id].qty}× ${escHtml(cart[id].name)}</span>
        <span class="cart-item-price">₹${cart[id].price * cart[id].qty}</span>
      </div>`).join('');
    document.getElementById('cart-subtotal').textContent = '₹' + subtotal;
    document.getElementById('cart-delivery').textContent = '₹' + delivery;
    document.getElementById('cart-total').textContent    = '₹' + total;
  }
}

function handleCheckout() {
  if (!currentUser) {
    pendingCheckout = true;
    openAuth('login');
    return;
  }
  placeOrder();
}

function placeOrder() {
  const ids      = Object.keys(cart);
  const subtotal = ids.reduce((s, id) => s + cart[id].price * cart[id].qty, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const total    = subtotal + delivery;

  if (!currentUser) { pendingCheckout = true; openAuth('login'); return; }

  if (currentUser.wallet < total) {
    pendingWalletAction = 'checkout';
    openWalletModal(total - currentUser.wallet);
    return;
  }

  // Deduct from wallet
  currentUser.wallet -= total;
  const orderId = 'SMM-' + Math.floor(1000 + Math.random() * 9000);

  currentUser.orders = currentUser.orders || [];
  currentUser.orders.unshift({
    id: orderId,
    date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    items: ids.map(id => `${cart[id].qty}× ${cart[id].name}`),
    total: total,
  });
  saveCurrentUser();
  updateWalletUI();

  document.getElementById('order-id-display').textContent = 'Order #' + orderId;
  document.getElementById('order-paid-display').textContent = '₹' + total + ' paid from your wallet.';
  openModal('confirm-modal');
}

function resetCart() {
  cart = {};
  updateCartUI();
  Object.keys(MENU).forEach(renderSection);
}

/* ────────────────────────────────────────────────
   MENU TABS
──────────────────────────────────────────────── */
function switchTab(tab, btn) {
  document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  btn.classList.add('active');
}

/* ────────────────────────────────────────────────
   MODAL HELPERS
──────────────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modal when clicking the dark overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

/* ────────────────────────────────────────────────
   AUTH MODAL
──────────────────────────────────────────────── */
function openAuth(tab, fromOrder) {
  if (currentUser) {
    if (fromOrder) placeOrder();
    return;
  }
  if (fromOrder) pendingCheckout = true;
  openModal('auth-modal');
  switchAuthTab(tab || 'login');
}

function switchAuthTab(tab) {
  ['login', 'signup'].forEach(t => {
    document.getElementById('modal-tab-' + t).classList.toggle('active', t === tab);
    document.getElementById('form-' + t).classList.toggle('active', t === tab);
  });
  // Clear error messages
  document.getElementById('login-error').style.display  = 'none';
  document.getElementById('signup-error').style.display = 'none';
}

function handleLogin() {
  const input = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value.trim();
  const errEl = document.getElementById('login-error');
  errEl.style.display = 'none';

  if (!input || !pass) {
    errEl.textContent = 'Please enter your email/phone and password.';
    errEl.style.display = 'block';
    return;
  }

  const users = loadUsers();
  const key = Object.keys(users).find(email =>
    email.toLowerCase() === input.toLowerCase() ||
    users[email].phone === input
  );

  if (!key) {
    errEl.textContent = 'No account found with that email/phone. Please sign up first.';
    errEl.style.display = 'block';
    return;
  }

  const user = users[key];
  if (user.password !== pass) {
    errEl.textContent = 'Incorrect password. Please try again.';
    errEl.style.display = 'block';
    return;
  }

  loginUser(user);
}

function handleSignup() {
  const fname = document.getElementById('signup-fname').value.trim();
  const lname = document.getElementById('signup-lname').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass  = document.getElementById('signup-pass').value.trim();
  const errEl = document.getElementById('signup-error');
  errEl.style.display = 'none';

  if (!fname || !phone || !email || pass.length < 6) {
    errEl.textContent = 'Please fill all fields. Password must be at least 6 characters.';
    errEl.style.display = 'block';
    return;
  }
  if (!email.includes('@')) {
    errEl.textContent = 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }

  const users = loadUsers();
  const existingKey = Object.keys(users).find(e => e.toLowerCase() === email.toLowerCase());
  if (existingKey) {
    errEl.textContent = 'An account with this email already exists. Please login instead.';
    errEl.style.display = 'block';
    return;
  }

  const fullName = fname + (lname ? ' ' + lname : '');
  const newUser = {
    name: fullName,
    email: email,
    phone: phone,
    password: pass,
    wallet: STARTING_WALLET_BALANCE,
    orders: [],
    bookings: [],
  };
  users[email] = newUser;
  saveUsers(users);
  loginUser(newUser);
}

function loginUser(user) {
  currentUser = user;
  currentUser.orders   = currentUser.orders   || [];
  currentUser.bookings = currentUser.bookings || [];
  if (typeof currentUser.wallet !== 'number') currentUser.wallet = STARTING_WALLET_BALANCE;

  localStorage.setItem('smm_session', currentUser.email);

  const initial = user.name.charAt(0).toUpperCase();

  // Update nav — hide login/order buttons, show user pill
  document.querySelector('.btn-nav-login').style.display  = 'none';
  document.querySelector('.btn-nav-order').style.display  = 'none';
  const pill = document.getElementById('nav-user-pill');
  pill.style.display = 'flex';
  document.getElementById('nav-avatar').textContent   = initial;
  document.getElementById('nav-username').textContent = user.name.split(' ')[0];

  // Populate dropdown
  document.getElementById('dd-name').textContent  = user.name;
  document.getElementById('dd-email').textContent = user.email;
  updateWalletUI();

  closeModal('auth-modal');

  // After login actions
  setTimeout(() => {
    if (pendingCheckout) {
      pendingCheckout = false;
      if (Object.keys(cart).length > 0) placeOrder();
      else document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
    if (pendingBooking) {
      pendingBooking = false;
      submitBookingForm();
    }
  }, 300);
}

function handleLogout() {
  currentUser = null;
  cart = {};
  localStorage.removeItem('smm_session');
  updateCartUI();
  Object.keys(MENU).forEach(renderSection);

  // Restore nav to logged-out state
  document.querySelector('.btn-nav-login').style.display  = '';
  document.querySelector('.btn-nav-order').style.display  = '';
  document.getElementById('nav-user-pill').style.display  = 'none';

  // Close dropdown if open
  document.getElementById('nav-user-pill').classList.remove('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Restore session on page load
window.addEventListener('DOMContentLoaded', () => {
  const sessionEmail = localStorage.getItem('smm_session');
  if (sessionEmail) {
    const users = loadUsers();
    if (users[sessionEmail]) loginUser(users[sessionEmail]);
  }
});

/* ────────────────────────────────────────────────
   WALLET
──────────────────────────────────────────────── */
function updateWalletUI() {
  if (!currentUser) return;
  const balanceText = '₹' + currentUser.wallet;
  const ddEl = document.getElementById('dd-wallet-balance');
  const modalEl = document.getElementById('wallet-modal-balance');
  if (ddEl) ddEl.textContent = balanceText;
  if (modalEl) modalEl.textContent = balanceText;
}

function openWalletModal(suggestedAmount) {
  if (!currentUser) { openAuth('login'); return; }
  document.getElementById('wallet-error').style.display = 'none';
  document.getElementById('wallet-add-amount').value = suggestedAmount > 0 ? suggestedAmount : '';
  updateWalletUI();
  openModal('wallet-modal');
}

function setWalletAmount(amount) {
  document.getElementById('wallet-add-amount').value = amount;
}

function selectPaymentMethod(method, btnEl) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.pm-option').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

const PAYMENT_METHOD_LABELS = {
  gpay: 'Google Pay', phonepe: 'PhonePe', paytm: 'Paytm',
  card: 'Card', upi: 'UPI',
};

function handleAddMoney() {
  const amountInput = document.getElementById('wallet-add-amount');
  const amount = parseInt(amountInput.value, 10);
  const errEl = document.getElementById('wallet-error');

  if (!amount || amount <= 0) {
    errEl.textContent = 'Please enter a valid amount.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';

  // Simulate a payment confirmation via the chosen method (no real gateway connected)
  currentUser.wallet += amount;
  saveCurrentUser();
  updateWalletUI();
  amountInput.value = '';
  closeModal('wallet-modal');
  alert(`✅ ₹${amount} added via ${PAYMENT_METHOD_LABELS[selectedPaymentMethod]}.\nNew wallet balance: ₹${currentUser.wallet}`);

  // Retry whatever action triggered the top-up
  if (pendingWalletAction === 'checkout') {
    pendingWalletAction = null;
    placeOrder();
  } else if (pendingWalletAction === 'booking') {
    pendingWalletAction = null;
    submitBookingForm();
  }
}

/* ────────────────────────────────────────────────
   ORDER & BOOKING HISTORY
──────────────────────────────────────────────── */
function openOrdersModal() {
  if (!currentUser) { openAuth('login'); return; }
  const list = document.getElementById('orders-list');
  const orders = currentUser.orders || [];

  list.innerHTML = orders.length === 0
    ? `<div class="history-empty">You haven't placed any orders yet.</div>`
    : orders.map(o => `
        <div class="history-card">
          <div class="history-card-top">
            <strong>#${o.id}</strong>
            <span class="history-card-date">${o.date}</span>
          </div>
          <div class="history-items">${o.items.map(escHtml).join('<br/>')}</div>
          <div class="history-total">Paid: ₹${o.total}</div>
        </div>`).join('');

  openModal('orders-modal');
}

function openBookingsModal() {
  if (!currentUser) { openAuth('login'); return; }
  const list = document.getElementById('bookings-list');
  const bookings = currentUser.bookings || [];

  list.innerHTML = bookings.length === 0
    ? `<div class="history-empty">You haven't booked any tables yet.</div>`
    : bookings.map(b => `
        <div class="history-card">
          <div class="history-card-top">
            <strong>${escHtml(b.guests)}</strong>
            <span class="history-card-date">${b.date}</span>
          </div>
          <div class="history-items">
            🗓️ ${escHtml(b.bookingDate)} &nbsp;•&nbsp; 🕐 ${escHtml(b.time)}<br/>
            ${b.seat ? '💺 ' + escHtml(b.seat) : ''}
          </div>
          <div class="history-total">
            <span class="history-badge">Confirmed</span>
            &nbsp; Fee paid: ₹${b.fee}
          </div>
        </div>`).join('');

  openModal('bookings-modal');
}

// Toggle dropdown on click (for touch devices)
document.addEventListener('DOMContentLoaded', () => {
  const pill = document.getElementById('nav-user-pill');
  if (pill) {
    pill.addEventListener('click', () => pill.classList.toggle('active'));
    document.addEventListener('click', e => {
      if (!pill.contains(e.target)) pill.classList.remove('active');
    });
  }
});

/* ────────────────────────────────────────────────
   TABLE BOOKING
──────────────────────────────────────────────── */
function handleBooking() {
  if (!currentUser) {
    pendingBooking = true;
    openAuth('login');
    return;
  }
  submitBookingForm();
}

function submitBookingForm() {
  const name    = document.getElementById('book-name').value.trim();
  const phone   = document.getElementById('book-phone').value.trim();
  const date    = document.getElementById('book-date').value;
  const time    = document.getElementById('book-time').value;
  const guests  = document.getElementById('book-guests').value;
  const seat    = document.getElementById('book-seat').value;

  if (!name || !phone || !date || !time) {
    alert('Please fill in Name, Phone, Date, and Time Slot.');
    return;
  }

  if (currentUser.wallet < TABLE_BOOKING_FEE) {
    pendingWalletAction = 'booking';
    openWalletModal(TABLE_BOOKING_FEE - currentUser.wallet);
    return;
  }

  // Deduct reservation fee
  currentUser.wallet -= TABLE_BOOKING_FEE;
  currentUser.bookings = currentUser.bookings || [];
  currentUser.bookings.unshift({
    date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    bookingDate: date,
    time: time,
    guests: guests,
    seat: seat,
    fee: TABLE_BOOKING_FEE,
  });
  saveCurrentUser();
  updateWalletUI();

  const successEl = document.getElementById('booking-success');
  successEl.innerHTML = `
    <h4>✅ Booking Confirmed!</h4>
    <p>Hi ${escHtml(name)}, your table for <strong>${guests}</strong> on <strong>${date}</strong><br/>
    at <strong>${time}</strong> is reserved.<br/>
    We'll call <strong>${escHtml(phone)}</strong> to confirm.<br/>
    ₹${TABLE_BOOKING_FEE} reservation fee paid from your wallet.</p>`;
  successEl.style.display = 'block';

  // Clear form
  ['book-name', 'book-phone', 'book-date', 'book-note'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('book-time').selectedIndex   = 0;
  document.getElementById('book-guests').selectedIndex = 0;
  document.getElementById('book-seat').selectedIndex   = 0;
}

/* ────────────────────────────────────────────────
   DATE INIT
──────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('book-date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
});

/* ────────────────────────────────────────────────
   MOBILE NAV TOGGLE
──────────────────────────────────────────────── */
function toggleMobileMenu() {
  document.querySelector('.nav-mobile-menu').classList.toggle('open');
}

function closeMobileMenu() {
  document.querySelector('.nav-mobile-menu').classList.remove('open');
}
