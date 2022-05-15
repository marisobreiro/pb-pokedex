import styled, { css } from "styled-components/native";
import theme from "../../../global/styles/theme";

type PokemonContainerProps = {
    type: keyof typeof theme.colors.backgroundType
}

export const Content = styled.View`
  ${(props) => css`
    flex: 1;
    height: 55%;
    z-index: 0;

    background: ${props.theme.colors.background.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    padding: 40px 20px 20px;
  `}
`;

export const ScrollView = styled.ScrollView``;

export const Paragraph = styled.Text<PokemonContainerProps>`
  ${(props) => css`
    color: ${props.theme.colors.type[props.type]};
    font-size: 24px;
    margin-top: 10px;
    font-weight: 700;
  `}
`;