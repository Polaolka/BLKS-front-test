import styled from "@emotion/styled";
import { colors, mediaSizes } from "../../components/const";
export const FooterStyled = styled.footer`
  padding-top: 16px;
  padding-bottom: 16px;

  & ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    opacity: 0.8;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      flex-direction: row;
      gap: 10px;
    }
  }

  & li {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${colors.colorLigthText};

    &:not(:last-child) {
      @media screen and (min-width: ${mediaSizes.tablet}) {
        padding-right: 10px;
        border-right: 1px solid ${colors.colorLigthText};
      }
    }
  }

  & .name {
    color: ${colors.colorGreen};
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: ${colors.colorLigthText};
    }
  }
`;


