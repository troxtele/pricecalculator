$(document).ready(function () {
  $(document).on("keyup keyup blur keydown change", ".amount", function () {
    var amount = $(this).val();
    var price = $(this).parents(".repeater_radek").find(".price").val();
    var kolik_procent_dph = $(this)
      .parents(".repeater_radek")
      .find(".kolik_procent_dph")
      .val();
    $(this)
      .parents(".repeater_radek")
      .find(".total")
      .val(totalPrice(amount, price, kolik_procent_dph));
    totalSumOfPrice();
  });
  $(document).on("keyup keyup blur keydown change", ".price", function () {
    var amount = $(this).parents(".repeater_radek").find(".amount").val();
    var price = $(this).val();
    var kolik_procent_dph = $(this)
      .parents(".repeater_radek")
      .find(".kolik_procent_dph")
      .val();
    $(this)
      .parents(".repeater_radek")
      .find(".total")
      .val(totalPrice(amount, price, kolik_procent_dph));
    totalSumOfPrice();
  });
  $(document).on(
    "keyup keyup blur keydown change",
    ".kolik_procent_dph",
    function () {
      var amount = $(this).parents(".repeater_radek").find(".amount").val();
      var price = $(this).parents(".repeater_radek").find(".price").val();
      var kolik_procent_dph = $(this).val();
      $(this)
        .parents(".repeater_radek")
        .find(".total")
        .val(totalPrice(amount, price, kolik_procent_dph));
      totalSumOfPrice();
    }
  );
  $(document).on("keyup  blur keydown  change", ".input_sleva", function () {
    var input_zaklad_dph = document.querySelector(".input_zaklad_dph").value;
    console.log(input_zaklad_dph);
    var input_sleva = document.querySelector(".input_sleva").value;
    console.log(input_sleva);
    document.getElementById("zaklad_dph").value =
      input_zaklad_dph - input_sleva;
  });

  $(document).on("click", ".delete", function () {
    event.preventDefault();
    //  var x = confirm('Chcete opravdu smazat tento záznam?');
    //  if (x){
    // 	 $(this).parents('.repeater_radek').remove();
    // 	 totalSumOfPrice();
    //  }
    $(this).parents(".repeater_radek").remove();
    totalSumOfPrice();
  });
});
function totalSumOfPrice() {
  var sleva = document.querySelector("#sleva").value;
  var total = 0;
  $(".total").each(function () {
    total += parseInt($(this).val() == "" ? 0 : $(this).val());
    //  total = total - sleva;
  });
  // $('#totalPrice').text(total);			<span id="totalPrice"></span>
  document.getElementById("totalPrice_2").value = total; // pro uložení do pole INPUT
  zaklad_dph();
  console.log(total);
}
function totalPrice(amount, price, kolik_procent_dph) {
  cena_bez_dph = amount * price;
  // vysledek_funkce_totalPrice =  zaokrouhliNaDesetinneMisto(cena_bez_dph+((cena_bez_dph/100)*kolik_procent_dph), 2);
  cena_dph = (cena_bez_dph / 100) * kolik_procent_dph;
  vysledek_funkce_totalPrice = cena_bez_dph + cena_dph;
  vysledek_funkce_totalPrice = vysledek_funkce_totalPrice.toFixed(2);

  document.getElementById("zaklad_dph").value = cena_bez_dph;
  document.getElementById("dph_celkem").value = zaokrouhliNaDesetinneMisto(
    vysledek_funkce_totalPrice - cena_bez_dph,
    2
  );
  return vysledek_funkce_totalPrice;
}
function zaklad_dph() {
  var input_zaklad_dph = document.querySelector(".input_zaklad_dph").value;
  var input_sleva = document.querySelector(".input_sleva").value;
  // document.getElementById("zaklad_dph").value = (input_zaklad_dph-input_sleva);
}

function zaokrouhliNaDesetinneMisto(cislo, pocetMist) {
  pocetMist = Math.pow(10, pocetMist);
  cislo = cislo * pocetMist;
  cislo = Math.round(cislo);
  cislo = cislo / pocetMist;
  return cislo;
}
