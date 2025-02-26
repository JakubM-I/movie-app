import styled from "styled-components";

export const StyledNavBar = styled.div`
    width: min(1368px, 100%);
    margin-inline: auto;
    min-height: 94px;
    padding-inline: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;

    @media (width <= 1024px) {
        gap: clamp(2.5rem, -5.0392rem + 15.6863vw, 5rem);
    }

    @media (width <= 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0px;
        row-gap: 24px;
        padding: 16px;
    }
`
export const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;

    @media (width <= 1024px) {
        gap: clamp(0.5rem, 0.2159rem + 1.4205vw, 1.125rem);
    }
`

export const StyledLogoIcon = styled.img`
    width: min(100%, 40px);
    height: auto;

    @media (width <= 1024px) {
        width: clamp(1.0625rem, 0.4091rem + 3.267vw, 2.5rem);
    }

`

export const StyledLogoName = styled.span`
    font-size: 24px;
    line-height: 1;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    @media (width <= 1024px) {
        font-size: clamp(0.8125rem, 0.5rem + 1.5625vw, 1.5rem);
    }
`

export const StyledMenu = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    gap: 16px;
    list-style: none;

    @media (width <= 1024px) {
        gap: clamp(0.3125rem, 0rem + 1.5625vw, 1rem);
    }
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

    @media (width <= 1024px) {
        font-size: clamp(0.75rem, 0.6932rem + 0.2841vw, 0.875rem);
        padding: clamp(0.5rem, 0.3295rem + 0.8523vw, 0.875rem) clamp(0.75rem, 0.4091rem + 1.7045vw, 1.5rem);
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
    }
`

export const StyledSearch = styled.div`
    height: 48px;
    width: min(100%, 432px);
    margin-inline-start: auto;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 33px;
    padding: 12px 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    @media (width <= 768px) {
        width: 100%;
    }

    @media (width <= 425px) {
        padding: 16px 14px;
        gap: 8px;
    }
`

export const StyledSearchInput = styled.input`
    border: none;
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    flex-grow: 1;
    outline: none;

    @media (width <= 1024px) {
        font-size: clamp(0.8125rem, 0.7273rem + 0.4261vw, 1rem);
    }
`