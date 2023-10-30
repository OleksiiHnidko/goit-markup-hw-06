document.getElementById("open-btn").addEventListener("click", function () {
  document.getElementById("backdrop-order").classList.add("is-open");
});

document
  .getElementById("close-order-btn")
  .addEventListener("click", function () {
    document.getElementById("backdrop-order").classList.remove("is-open");
  });
