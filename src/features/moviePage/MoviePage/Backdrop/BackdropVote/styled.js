import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin: 24px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Star = styled(StarIcon)`
  height: 35px;;
  width: auto;
  transform: translate(-8%);
`;

export const Average = styled.strong`
  font-size: 30px;
  font-weight: 500;
  margin-left: 8px;
`;

export const OutOf = styled.span`
  margin-left: 8px;
`;

export const Count = styled.p`
  margin: 16px auto 0px 0px;
  width: 100%;
`;