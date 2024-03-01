import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_pwL9DRh3ctMg6sBZHj9fUQGJe5RRaRiKIsxtfshX"
);

export async function convertCurrency(fromcurr, tocurr, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromcurr,
    currencies: tocurr,
  });
  const multiplier = res.data[tocurr];
  return multiplier*units;
}
