import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { NavigationScreenProps } from "../../navigation/types";

import pokebolaAnimation from "./pokebola.json";

import * as S from "./BemVindoScreen.styles";

export function BemVindoScreen(props: NavigationScreenProps<"BemVindoScreen">) {

    const { navigation }: any = props;

    function handleNavigation() {
        navigation.navigate("ListaScreen");
    }

    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <AnimatedLottieView autoPlay source={pokebolaAnimation} loop />
                </S.WrapperAnimation>
                <S.Title maxFontSizeMultiplier={1.25}>Bem vindo</S.Title>
                <S.Paragraph maxFontSizeMultiplier={1.25}>Encontre todos os pokémons em um só lugar</S.Paragraph>
            </S.Content>

            <S.Button activeOpacity={0.7} onPress={handleNavigation}>
                <S.ButtonText maxFontSizeMultiplier={1.25}>Entrar</S.ButtonText>
        </S.Button>
        </S.Container>
    );
}
