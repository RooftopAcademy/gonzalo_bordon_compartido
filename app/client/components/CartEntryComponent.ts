import CartProduct from "../interfaces/CartProduct";

export default function CartEntryComponent({
  units,
  price,
  total,
  id,
  title,
}: CartProduct): string {
  return /* html */ `
    <tr>
      <td class="text-center adminTD" data-product-id="${id}">
        <div class="reduceOneButton">-1</div>
        <div class="increaseOneButton">+1</div>
      </td>
      <td class="conceptTable">
        <a class="cartTitle" href="/product/${id}">
          ${title}
        </a>
      </td>
      <td class="text-center">${units}</td>
      <td class="text-center">$${price}</td>
      <td class="text-center">$${total}</td>
    </tr>
  `;
}
