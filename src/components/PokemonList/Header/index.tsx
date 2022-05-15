import React from "react";

import { images } from "../../../global/images";

import * as S from './styles';

export function PokemonListHeader() {
    return (
        <>
            <S.ContainerBackgroundImage source={images.pokeballBackgroundImageHalf} />
                <S.Title maxFontSizeMultiplier={1.25}>Pokédex</S.Title>
                <S.Paragraph maxFontSizeMultiplier={1.25}>Encontre todos os pokémons em um só lugar.</S.Paragraph>
        </>
    )   
}