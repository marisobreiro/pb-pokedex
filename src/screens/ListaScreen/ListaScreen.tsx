import React from "react";
import { FlatList } from "react-native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

import * as S from "./ListaScreen.styles";
import PokemonCard from "../../components/PokemonCard";

export function ListaScreen() {

    const data = [
        {
            "id": 1,
            "name": "Bulbasaur",
            "type": ["Grass", "Poison"],
        },
        {
            "id": 2,
            "name": "Ivysaur",
            "type": ["Grass", "Poison"],
        }
    ]
    
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
                    />
                    <PokemonCard id={25} name="Pikachu" />
                    <PokemonCard id={54} name="Psyduck" />
                </S.Content>
            </S.ScrollView>
        </S.Container>
    );
}
