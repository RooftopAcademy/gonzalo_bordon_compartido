export default function ProductSpecComponent(
    specTitle: string,
    specBody: string
): string {
    return /* html */ `
        <div class="productSpecs">
            <span class="product-spec">${specTitle}: </span> ${specBody}
        </div>
    `;
}