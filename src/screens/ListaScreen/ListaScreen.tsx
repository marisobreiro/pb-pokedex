import React from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

import * as S from "./ListaScreen.styles";
import PokemonCard from "../../components/PokemonCard";

export function ListaScreen() {
    return (
        <S.Container>
            <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

            <S.ScrollView>
                <S.Title>Pokédex</S.Title>
                <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

                <S.Content>
                    <PokemonCard id={39} name={'Jiglypuff'} type={'Fairy'}/>
                </S.Content>
            </S.ScrollView>
        </S.Container>
    );
}
