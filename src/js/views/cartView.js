"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cartView() {
    return /* html */ "\n    <div class=\"cartTitle\">\n        <h1>Bienvenido al Carrito</h1>\n    </div>\n    <div class=\"tableContainer\">\n        <table>\n            <thead>\n                <tr>\n                    <th>A</th>\n                    <th>Concepto</th>\n                    <th>Unidades</th>\n                    <th>Precio Unitario</th>\n                    <th>Total</th>\n                </tr>\n            </thead>\n            <tbody id=\"tBodyCart\"></tbody>\n            <tfoot>\n                <tr>\n                    <th colspan=\"4\">Total:</th>\n                    <th id=\"totalCart\"></th>\n                </tr>\n            </tfoot>\n        </table>\n        <div class=\"cartCloseButtonContainer\">\n            <button class=\"cartCloseButton\" id=\"js-closeCart\">Finalizar Compra</button>\n        </div>\n    </div>\n";
}
exports.default = cartView;
