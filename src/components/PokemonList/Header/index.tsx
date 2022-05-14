import React from "react";

import * as S from './styles';

export function PokemonListHeader() {
    return (
        <>
            <S.ContainerBackgroundImage source={require('../../../global/assets/Pokeball-bg.png')} />
                <S.Title>Pokédex</S.Title>
                <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>
        </>
    )   
}