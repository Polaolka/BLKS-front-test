import styled from "@emotion/styled";
import { colors, mediaSizes } from "../../components/const";
export const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.mainDark};
  gap: 15px;
  @media screen and (min-width: ${mediaSizes.laptop}) {
    padding: 0 15px 24px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

