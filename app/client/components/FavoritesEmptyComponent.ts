import Product from "../interfaces/Product";

export default function FavoritesEmptyComponent(): string {
  return /* html */ `
    <tr>
      <td class="conceptTable" colspan="4">
        <a class="cartTitle" href="/products">
          AÚN NO TIENES FAVORITOS, VE A AGREGAR ALGUNOS!!!
        </a>
      </td>
    </tr>
  `;
}
