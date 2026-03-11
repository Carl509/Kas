// =============================================
// CONFIGURATION — Mets ton numero ici
// =============================================
var WHATSAPP_NUMBER = '+509 48 61 3794'; // ex: 50931234567

// =============================================
// PRODUITS
// =============================================
var products = [
  { id:1,  cat:'bracelet', name:'Bracelet Oeil de Tigre & Citrine',  brand:'Collection Natura',     desc:'Duo oeil de tigre et citrine naturelle',              price:1500, badge:'Bestseller', img:'img/78c78d22ead02b276bf616f28f306cf9.jpg' },
  { id:2,  cat:'bracelet', name:'Bracelet Oeil de Tigre',             brand:'Collection Natura',     desc:'Perles en oeil de tigre authentique et brillantes',   price:1200, badge:null,         img:'img/225582d189f2c9aef68e28cb278e52d7.jpg' },
  { id:3,  cat:'bracelet', name:'Bracelet Onyx & Howlite',            brand:'Collection Minimaliste',desc:'Onyx mat et howlite blanche, separateurs argentes',   price:1300, badge:null,         img:'img/d6b8590ed49011b9a4ab29e513f14232.jpg' },
  { id:4,  cat:'special',  name:'Bracelet Prenom Personnalise',       brand:'Sur Mesure',            desc:'Onyx mat avec lettres cubiques, votre prenom',        price:1800, badge:'Sur Mesure',  img:'img/41acae3a2684c6a55513d4b6662dd02c.jpg' },
  { id:5,  cat:'duo',      name:'Duo Yin Yang Couple',                brand:'Collection Couple',     desc:'Deux bracelets avec pendentif Yin Yang argente',      price:2500, badge:'Duo',         img:'img/5d0eefe1615e4106450b84e382229cab.jpg' },
  { id:6,  cat:'bracelet', name:'Bracelet Jade Bleu Royal',           brand:'Collection Premium',    desc:'Perles jade bleu intense, couleur vive et profonde',  price:1400, badge:'Nouveau',     img:'img/0226131747069823fbc78079f0397beb.jpg' },
  { id:7,  cat:'bracelet', name:'Bracelet Corail Rouge Luxe',         brand:'Edition Luxe',          desc:'Corail rouge et boule pave argent, style premium',    price:2200, badge:'Luxe',        img:'img/7ea92ae19935809c76a5fe38d43f11ed.jpg' },
  { id:8,  cat:'special',  name:'Bracelet Message Romantique',        brand:'Collection Messages',   desc:'Onyx avec lettres lumineuses, duo romantique',        price:2000, badge:'Duo',         img:'img/f9135f9d02c60eb2cea9f0d90cfadf7e.jpg' },
  { id:9,  cat:'duo',      name:'Duo Yin Yang Pendentif',             brand:'Collection Couple',     desc:'Howlite marbree et onyx avec charm yin yang',         price:2200, badge:'Couple',      img:'img/26966f871bdb447194974f1298515e09.jpg' },
  { id:10, cat:'bracelet', name:'Bracelet Black & Gold Disco',        brand:'Edition Limitee',       desc:'Onyx mat avec boules pave dore scintillant',          price:2500, badge:'Limite',      img:'img/158875c6f6c53747df02e98e73effcf5.jpg' },
  { id:11, cat:'special',  name:'Bracelet Basketball Onyx Mat',       brand:'Collection Sport',      desc:'Onyx mat avec boule basketball centrale',             price:1400, badge:'Sport',        img:'img/bdf2ca4d04a0226ae7cfa958996518e1.jpg' },
  { id:12, cat:'bracelet', name:'Bracelet Amethyste',                 brand:'Collection Pierre',     desc:'Amethyste violette naturelle, pierre de serenite',    price:1500, badge:null,          img:'img/18b5a76e5dcc5be9f65dd78c98028dc2.jpg' },
  { id:13, cat:'bracelet', name:'Bracelet Amethyste & Citrine',       brand:'Collection Pierre',     desc:'Amethyste et citrine pour harmonie et energie',       price:1700, badge:'Nouveau',     img:'img/c331e73b1bf3de7f8061e574c6fec777.jpg' },
  { id:14, cat:'bracelet', name:'Shamballa Cristaux Aqua',            brand:'Collection Shamballa',  desc:'Boules cristal aqua sur fil macrame noir, ajustable', price:1800, badge:'Shamballa',   img:'img/59a6f24e58358062a821e5c7c20cdcbb.jpg' },
  { id:15, cat:'duo',      name:'Duo Howlite & Onyx',                 brand:'Collection Couple',     desc:'Howlite marbree et onyx brillant, duo assorti',       price:2200, badge:'Duo',         img:'img/1465ce18707ab00a99790c4dfd5e761c.jpg' },
  { id:16, cat:'special',  name:'Bracelet Basketball Marbre',         brand:'Collection Sport',      desc:'Onyx marbre avec boule basketball, style unique',     price:1400, badge:'Sport',        img:'img/716d1c0e4fe3ce9db2e95b3832a3f15d.jpg' },
  { id:17, cat:'duo',      name:'Duo Fantome Couple',                 brand:'Collection Originale',  desc:'Blanc/noir avec charms fantomes dores, original !',   price:2500, badge:'Original',     img:'img/9b726a646601830978e133e9589f3b1f.jpg' },
  { id:18, cat:'bracelet', name:'Bracelet Couronne Royale',           brand:'Edition Luxe',          desc:'Onyx brillant avec charm couronne pave argent',       price:2000, badge:'Luxe',        img:'img/5e0669db5b78cacc767fb4d696a4f490.jpg' },
  { id:19, cat:'bracelet', name:'Bracelet Collection',                brand:'K.A.S Signature',       desc:'Bracelet artisanal en pierres naturelles selectionnees',price:1500, badge:null,         img:'img/aed1dd17a3e992f45176acc0f31a17e0.jpg' }
];

var cart = [];

// AFFICHAGE DES PRODUITS
function renderProducts(filter) {
  if (!filter) { filter = 'all'; }
  var grid = document.getElementById('productsGrid');
  var list = [];
  var i;
  for (i = 0; i < products.length; i++) {
    if (filter === 'all' || products[i].cat === filter) {
      list.push(products[i]);
    }
  }
  var html = '';
  for (i = 0; i < list.length; i++) {
    var p = list[i];
    var badge = p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '';
    html += '<div class="product-card fade-in visible">';
    html += '<div class="product-img">';
    html += '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">';
    html += badge;
    html += '<div class="product-actions">';
    html += '<button class="add-to-cart-btn" onclick="addToCart(' + p.id + ')">Ajouter au panier</button>';
    html += '</div></div>';
    html += '<p class="product-brand">' + p.brand + '</p>';
    html += '<h3 class="product-name">' + p.name + '</h3>';
    html += '<p class="product-desc">' + p.desc + '</p>';
    html += '<div class="product-footer">';
    html += '<span class="product-price">$HTG ' + p.price.toLocaleString('fr') + '</span>';
    html += '<button class="wishlist-btn">&#9825;</button>';
    html += '</div></div>';
  }
  grid.innerHTML = html;
}

// FILTRES
function filterProducts(cat, btn) {
  var tabs = document.querySelectorAll('.filter-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  btn.classList.add('active');
  renderProducts(cat);
}

// AJOUTER AU PANIER
function addToCart(id) {
  var p = null;
  var ex = null;
  var i;
  for (i = 0; i < products.length; i++) {
    if (products[i].id === id) { p = products[i]; break; }
  }
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { ex = cart[i]; break; }
  }
  if (ex) {
    ex.qty++;
  } else {
    cart.push({ id: p.id, cat: p.cat, name: p.name, brand: p.brand, desc: p.desc, price: p.price, badge: p.badge, img: p.img, qty: 1 });
  }
  updateCartUI();
  var sidebar = document.getElementById('cartSidebar');
  if (!sidebar.classList.contains('open')) { toggleCart(); }
}

// MISE A JOUR DU PANIER
function updateCartUI() {
  var i;
  var count = 0;
  for (i = 0; i < cart.length; i++) { count += cart[i].qty; }
  document.getElementById('cartCount').textContent = count;

  var container = document.getElementById('cartItemsContainer');
  var footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Votre panier est vide.<br><br><em>Decouvrez nos creations</em></div>';
    footer.style.display = 'none';
    return;
  }

  var html = '';
  for (i = 0; i < cart.length; i++) {
    var item = cart[i];
    html += '<div class="cart-item">';
    html += '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>';
    html += '<div class="cart-item-info">';
    html += '<div class="cart-item-name">' + item.name + '</div>';
    html += '<div class="cart-item-price">$HTG ' + item.price.toLocaleString('fr') + '</div>';
    html += '<div class="cart-item-qty">';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ', -1)">-</button>';
    html += '<span class="qty-num">' + item.qty + '</span>';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ', 1)">+</button>';
    html += '<button class="remove-item" onclick="removeItem(' + item.id + ')">Retirer</button>';
    html += '</div></div></div>';
  }
  container.innerHTML = html;

  var total = 0;
  for (i = 0; i < cart.length; i++) { total += cart[i].price * cart[i].qty; }
  document.getElementById('cartTotal').textContent = '$HTG ' + total.toLocaleString('fr');
  footer.style.display = 'block';
}

// QUANTITE
function changeQty(id, d) {
  var i;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += d;
      if (cart[i].qty <= 0) { cart.splice(i, 1); }
      break;
    }
  }
  updateCartUI();
}

function removeItem(id) {
  var i;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { cart.splice(i, 1); break; }
  }
  updateCartUI();
}

// OUVRIR / FERMER PANIER
function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartSidebar').classList.toggle('open');
}

// COMMANDER VIA WHATSAPP
function orderOnWhatsApp() {
  if (cart.length === 0) { return; }
  var i;
  var msg = 'Bonjour K.A.S !\n\nJe voudrais commander :\n\n';
  for (i = 0; i < cart.length; i++) {
    var item = cart[i];
    msg += '- ' + item.name + '\n';
    msg += '  Qte : ' + item.qty + ' x $HTG ' + item.price.toLocaleString('fr') + ' = $HTG ' + (item.price * item.qty).toLocaleString('fr') + '\n\n';
  }
  var total = 0;
  for (i = 0; i < cart.length; i++) { total += cart[i].price * cart[i].qty; }
  msg += '----------\nTotal : $HTG ' + total.toLocaleString('fr') + '\n\nMerci de confirmer la disponibilite et la livraison.';
  window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

// ANIMATIONS AU SCROLL
var obs = new IntersectionObserver(function(entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('visible');
    }
  }
}, { threshold: 0.08 });

var fadeEls = document.querySelectorAll('.fade-in');
for (var k = 0; k < fadeEls.length; k++) {
  obs.observe(fadeEls[k]);
}

// INIT
renderProducts();
