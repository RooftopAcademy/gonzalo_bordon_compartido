export default function getIdProductFromTable(
    e: Event
): number {
    const stringID: string = (e.target as HTMLElement).parentElement.dataset.productId;
    return Number( stringID );
}