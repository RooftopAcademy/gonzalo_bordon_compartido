type searchURLSetter = {
    htmlFileName?: htmlFileName,
    page?: string,
    cod?: string,
    search?: string
}
type searchParam = "htmlFileName" | "page" | "cod" | "search";
type htmlFileName = "index" | "cart" | "product" | "products" | "error";

export {
    searchURLSetter,
    searchParam,
    htmlFileName
}