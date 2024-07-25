/* eslint-disable react/prop-types */

import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Filter({ filterField, options = [] }) {
  const [searchParams, setSearchParam] = useSearchParams();

  const currentField = searchParams.get(filterField) || options.at(0).value;
  console.log(searchParams);

  function handleClick(value) {
    searchParams.set(filterField, value);
    if(searchParams.get('page')) searchParams.set('page',1)
    setSearchParam(searchParams);
  }
  return (
    <StyledFilter>
      {options?.map((ele) => (
        <FilterButton
          key={ele.value}
          onClick={() => handleClick(ele.value)}
          active={ele.value === currentField}
        >
          {ele.label}
        </FilterButton>
      ))}
     
    </StyledFilter>
  );
}
