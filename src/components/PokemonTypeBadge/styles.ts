import styled, { css } from "styled-components/native";

export const CardPokemonTypeBadge = styled.View`
    ${(props) => css`
        background: ${props.theme.colors.type.normal};
        border-radius: 3px;
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
