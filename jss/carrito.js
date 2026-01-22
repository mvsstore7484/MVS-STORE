document.addEventListener("DOMContentLoaded", () => {

  const items = document.getElementById("cartItems");
  const totalSpan = document.getElementById("total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    items.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      items.innerHTML = "<p>El carrito está vacío</p>";
      totalSpan.textContent = "0";
      return;
    }

    cart.forEach((item, index) => {
      total += item.price;

      const div = document.createElement("div");
      div.className = "cart-item";

      div.innerHTML = `
        <strong>${item.name}</strong><br>
        ${item.price} Robux<br>
        <button onclick="removeItem(${index})">Eliminar</button>
      `;

      items.appendChild(div);
    });

    totalSpan.textContent = total;
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  renderCart();
});
