import { htmlString } from "../types/html";

export default function PaginatorComponenet(
    page: number,
    maxPage: number,
    positions: {
        left: number,
        center: number,
        right: number,
    }
): htmlString {
    const { left, center, right } = positions;

    return `
        ${(page >= 3 && maxPage > 3) ? createExteriorPaginator(1, "<<") : ""}
        ${createMidPaginator(left, maxPage, page)}
        ${createMidPaginator(center, maxPage, page)}
        ${createMidPaginator(right, maxPage, page)}
        ${(page <= 8 && maxPage > 3) ? createExteriorPaginator(maxPage, ">>") : ""}
    `
}


function createMidPaginator(
    thisPage: number, 
    maxPage: number, 
    currentPage: number
): htmlString {
    return (thisPage > 0 && thisPage <= maxPage)
    ? `
        <a class="js-paginator ${(thisPage === currentPage) ? "active" : ""}" data-page="${thisPage}">
            ${thisPage}
        </a>
    `
    : "";
}

function createExteriorPaginator(
    thisPage: number, 
    content: string
): htmlString {
    return `
        <a class="js-paginator" data-page="${thisPage}">
            ${content}
        </a>
    `;
}
