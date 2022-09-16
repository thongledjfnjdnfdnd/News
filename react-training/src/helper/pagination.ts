export const pagination = (pageNumber: number, limit: number, category?: string) => {
  category
    ? `http://localhost:4000/articles?category=${category}&_page=${pageNumber}&_limit=${limit}`
    : `http://localhost:4000/articles?&_page=${pageNumber}&_limit=${limit}`
}
