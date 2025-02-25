import styled from "styled-components";

export const StyledNavBar = styled.div`
    width: min(1368px, 100%);
    margin-inline: auto;
    min-height: 94px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
`

export const StyledMenu = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
`

export const StyledMenuItem = styled.li`
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    padding: 14px 24px;
    border: 1px solid transparent;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.35s ease;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
    }
`

export const StyledSearch = styled.div`
    height: 48px;
    width: 432px;
    margin-inline-start: auto;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 33px;
`