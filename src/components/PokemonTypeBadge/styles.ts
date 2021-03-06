import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

type PokemonBadgeStyleProps = {
    type: keyof typeof theme.colors.type
}

export const CardPokemonTypeBadge = styled.View<PokemonBadgeStyleProps>`
    ${(props) => css`
        background: ${props.theme.colors.type[props.type]};
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5.5px 5px;
        margin-top: 5px;
        margin-right: 5px;
    `}
`;

export const CardPokemonType = styled.Text`
    ${(props) => css`
        color: ${props.theme.colors.text.white};
        font-size: 12px;
        line-height: 14px;
        font-weight: 400;
    `}
`;

export const IconBadge = styled.Image`
    ${(props) => css `
        width: 12px;
        height: 12px;
        margin-right: 5px;
    `}
`

