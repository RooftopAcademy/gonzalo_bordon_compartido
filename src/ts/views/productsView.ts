export default function productsView(
    productsHTML: string,
    paginator: string
): string {
    return `
        <h1 class="products-header">Productos</h1>
        <div class="products" id="products">
            ${productsHTML}
        <div class="paginator">
            ${paginator}
        </div>
    `
}