import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

type PokemonContainerProps = {
    type: keyof typeof theme.colors.backgroundType
}

export const Container = styled.View<PokemonContainerProps>`
  ${(props) => css`
    background: ${props.theme.colors.backgroundType[props.type]};

    flex: 1;
    position: relative;
  `}
`;

export const ContainerBackgroundImage = styled.ImageBackground`
  width: 190px;
  height: 190px;
  opacity: 0.3;

  position: absolute;
  bottom: -20px;
  right: -20px;
`;

export const DotsBackgroundImage = styled.ImageBackground`
  width: 74px;
  height: 32px;

  position: absolute;
  bottom: 120px;
  left: 60px;
`;

export const Header = styled.View`
  margin-top: 30px;
  padding: 30px 20px;

  position: relative;
  height: 45%;

  z-index: 1;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  justify-content: center;

  margin-bottom: 20px;
`;

export const GoBackImage = styled.Image`
  width: 25px;
  height: 25px;
`;
