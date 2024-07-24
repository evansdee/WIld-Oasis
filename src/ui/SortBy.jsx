// import { useSearch } from "../features/cabins/useSearch";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleParams(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} type="white" onChange={handleParams} />;
}
