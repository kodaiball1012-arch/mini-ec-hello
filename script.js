// ダミー商品データ（ECっぽさを出す）
const products = [
  { id: 1, name: "コーヒー豆", price: 1200, description: "香り高いスペシャルティ（ダミー）" },
  { id: 2, name: "マグカップ", price: 900, description: "毎朝使える定番（ダミー）" },
  { id: 3, name: "エコバッグ", price: 600, description: "お買い物のお供に（ダミー）" }
];

const yen = n => n.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

const loadCart = () => Number(localStorage.getItem("cartCount") || "0");
const saveCart = (n) => localStorage.setItem("cartCount", String(n));

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="price">${yen(p.price)}</div>
      <button data-id="${p.id}">カートに追加</button>
    `;
    grid.appendChild(card);
  });

  // まとめてイベント委譲
  grid.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const next = loadCart() + 1;
      saveCart(next);
      document.getElementById("cartCount").textContent = next;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cartCount").textContent = loadCart();
  renderProducts();
});
