import { htmlString } from "../../client/types/html";

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
        ${createExteriorPaginator(1, "<<", maxPage, (page >= 3))}
        ${createMidPaginator(left, maxPage, page)}
        ${createMidPaginator(center, maxPage, page)}
        ${createMidPaginator(right, maxPage, page)}
        ${createExteriorPaginator(maxPage, ">>", maxPage, (page <= maxPage))}
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
    content: string,
    maxPage: number,
    condition: boolean
): htmlString {
    return (condition && maxPage > 3) 
        ? `
            <a class="js-paginator" data-page="${thisPage}">
                ${content}
            </a>
        `
        : ""
    ;
}
