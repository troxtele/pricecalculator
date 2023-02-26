$(document).ready(function () {});

const items = () => {
  // console.log(document.querySelectorAll(".item"));
};

const unit = () => {};

const totalPrice = document.querySelector(".all_price");
const totalVat = document.querySelector(".all_vat");
const totalPriceWithVat = document.querySelector(".all_price_vat");

const totalCalculation = () => {
  const totals = document.querySelectorAll(".total");
  const totalWithVats = document.querySelectorAll(".total_with_vat");
  const vatAmounts = document.querySelectorAll(".vat_amount");
  // Total calculation
  totalPrice.value = [...totals].reduce(
    (prev, next) => (Number(prev) + Number(next.value)).toFixed(2),
    0
  );
  totalVat.value = [...totalWithVats].reduce(
    (prev, next) => (Number(prev) + Number(next.value)).toFixed(2),
    0
  );
  totalPriceWithVat.value = [...vatAmounts].reduce(
    (prev, next) => (Number(prev) + Number(next.value)).toFixed(2),
    0
  );
};
const calculation = (item) => {
  const amount = item.querySelector(".amount");
  const price = item.querySelector(".price");
  const total = item.querySelector(".total");
  const totalWithVat = item.querySelector(".total_with_vat");
  const vat = item.querySelector(".vat");
  const vatAmount = item.querySelector(".vat_amount");
  // total price
  total.value = (amount.value * price.value).toFixed(2);
  vatAmount.value = (total.value * (Number(vat.value) / 100)).toFixed(2);
  totalWithVat.value = (Number(total.value) + Number(vatAmount.value)).toFixed(
    2
  );
  totalCalculation();
};

const amount = (el) => {
  const greatparent = el.parentNode.parentNode;
  calculation(greatparent);
};
const priceWithoutVat = (el) => {
  const greatparent = el.parentNode.parentNode;
  calculation(greatparent);
  items();
};
const vatPercent = (el) => {
  const greatparent = el.parentNode.parentNode;
  calculation(greatparent);
  items();
};
// delete Item
const delte = (el) => {
  el.parentNode.parentNode.remove();
  totalCalculation();
};
