import Product from "../interfaces/Product";

export default function FavoritesEntryComponent(
  {
    price,
    id,
    title,
    body
  }: Product
): string {
  return /* html */ `
    <tr>
      <td class="conceptTable">
        <a class="product-image" href="?htmlFileName=product&id=${id}">
          ${title}
        </a>
      </td>
      <td class="text-center"></td>
      <td class="text-center">${body}</td>
      <td class="text-center">$${price}</td>
      <td class="text-center">F</td>
    </tr>
  `;
}
