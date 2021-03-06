import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

type PokemonStatusStyleProps = {
    percent: keyof typeof theme.colors.type,
    percentage: any,
}

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin-top: 10px;
    font-weight: 400;

    width: 70px;
  `}
`;

export const Value = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
    width: 40px;
    text-align: right;
    margin-right: 20px;
  `}
`;

export const PercentBar = styled.ScrollView`
  background: #eee;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Percent = styled.ScrollView<PokemonStatusStyleProps>`
  ${(props) => css`
    background: ${props.theme.colors.type[props.percent]};
    width: ${props.percentage}%;
    height: 4px;
    border-radius: 4px;
  `}
`;


