import styled from "@emotion/styled";
import { colors } from "../../components/const";
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${colors.mainWhite};
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  padding: 1rem /* 16px */;
  max-width: 1980px;
  margin: 0 auto;
  ul {
    & .active {
      padding-bottom: 12px;
      border-bottom: 2px solid black;
    }
  }
`;
