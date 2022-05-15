import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${(props) => css`
    background: ${props.theme.colors.background.white};
    flex: 1;
    position: relative;
    padding: 0 20px;
  `}
`;

export const Content = styled.View`
  margin-bottom: 50px;
`;

