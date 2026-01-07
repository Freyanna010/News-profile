import { useSearchParams } from 'react-router-dom';

export const usePageFromSearchParams = (
  paramName = 'page',
  defaultPage = 1
) => {
  const [searchParams] = useSearchParams();

  const pageParam = searchParams.get(paramName);
  const page = pageParam ? Number(pageParam) : defaultPage;

  return Number.isNaN(page) ? defaultPage : page;
};
