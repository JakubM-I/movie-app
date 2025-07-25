import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px;
    font-weight: 400;
    font-size: 10px;
  }
`;