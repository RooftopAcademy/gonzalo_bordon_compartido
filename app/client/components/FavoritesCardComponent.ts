import Product from "../interfaces/Product";

export default function FavoritesCardComponent({
  price,
  id,
  title,
  category,
}: Product): string {
  return /* html */ `
    <tr>
      <td class="text-center adminTD">
        <div class="favorites-icon selected" data-id="${id}" style="padding: 0;position: static;">
          &#9733;
        </div>
      </td>
      <td class="conceptTable">
        <a class="cartTitle" href="/product/${id}">
          ${title}
        </a>
      </td>
      <td class="text-center">${category}</td>
      <td class="text-center">$${price}</td>
    </tr>
  `;
}
