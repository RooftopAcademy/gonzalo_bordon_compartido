export default function PaginatorComponenet(
  page: number,
  maxPage: number,
): string {
  let left = page - 1;
  let center = page;
  let right = page + 1;

  if (page === 1) {
    ++left;
    ++center;
    ++right;
  } else if (page === maxPage) {
    --left;
    --center;
    --right;
  }

  return `
    ${exteriorPaginator(1, maxPage, "<<", page > 2)}
    ${midPaginator(left, maxPage, page)}
    ${midPaginator(center, maxPage, page)}
    ${midPaginator(right, maxPage, page)}
    ${exteriorPaginator(maxPage, maxPage, ">>", page < (maxPage - 1))}
  `;
}

function midPaginator(
  redirectPage: number,
  maxPage: number,
  currentPage: number
): string {
  return redirectPage > 0 && redirectPage <= maxPage
    ? `
    <a class="js-paginator ${redirectPage === currentPage ? "active" : ""}" data-page="${redirectPage}">
      ${redirectPage}
    </a>
  `
    : "";
}

function exteriorPaginator(
  redirectPage: number,
  maxPage: number,
  content: string,
  condition: boolean
): string {
  return condition && maxPage > 3
    ? `
    <a class="js-paginator" data-page="${redirectPage}">
      ${content}
    </a>
  `
    : "";
}
