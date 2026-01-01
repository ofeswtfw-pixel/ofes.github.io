document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    const button = event.target.closest('[data-event="add_to_cart"]');
    if (!button) return;

    const productId = button.dataset.productId;
    const productName = button.dataset.productName;
    const price = Number(button.dataset.price);
    const currency = button.dataset.currency;
    const category = button.dataset.category;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: currency,
        value: price,
        items: [
          {
            item_id: productId,
            item_name: productName,
            item_category: category,
            price: price,
            quantity: 1,
          },
        ],
      },
    });
  });
});
