export const paginate = (query: any) => {
  const page = parseInt(query.page) || 1;
  const size = parseInt(query.size) || 10;
  const offset = (page - 1) * size;
  const limit = size;

  return { limit, offset };
};
