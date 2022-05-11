import React from "react";
import { FlatList, Button } from "react-native";
import { NavigationScreenProps } from "../../navigation/types";

import { Link } from "@react-navigation/native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

import * as S from "./ListaScreen.styles";
import PokemonCard from "../../components/PokemonCard";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {
    const { navigation }:any = props;

    function handleNavigation() {
        navigation.navigate("DetalhesScreen");
    }
    
    return (
        <S.Container>
            <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

            <S.ScrollView>
                <S.Title>Pokédex</S.Title>
                <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

                <S.Content>
                        <PokemonCard 
                            id={39} 
                            name={'Jiglypuff'}
                            handleNavigation={handleNavigation}
                            />
                </S.Content>
            </S.ScrollView>
        </S.Container>
    );
}
