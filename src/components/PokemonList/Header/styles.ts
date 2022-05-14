import styled, { css } from "styled-components/native";

export const ContainerBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 200px;

  position: absolute;
  top: -80px;
`;

export const Content = styled.View`
  margin-bottom: 50px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.black};
    font-size: 32px;
    font-weight: bold;
    margin-top: 80px;
  `}
`;

export const Paragraph = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin: 10px 0;
    font-weight: 400;
  `}
`;