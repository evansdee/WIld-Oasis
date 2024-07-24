import { useSearchParams } from "react-router-dom";

export function useSearch(field, value) {
  const [searchParams, setSearchParams] = useSearchParams();

  return function handleParams(e) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  };
}
