export default function cartView(): string {
    return /* html */ `
    <div class="cartTitle">
        <h1>Bienvenido al Carrito</h1>
    </div>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>A</th>
                    <th>Concepto</th>
                    <th>Unidades</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="tBodyCart"></tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Total:</th>
                    <th id="totalCart"></th>
                </tr>
            </tfoot>
        </table>
        <div class="cartCloseButtonContainer">
            <button class="cartCloseButton" id="js-closeCart">Finalizar Compra</button>
        </div>
    </div>
`
}