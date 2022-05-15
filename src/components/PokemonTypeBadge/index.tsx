import React from "react";

import { PokemonTypeBadgeProps } from "../../@types";
import { icons } from "../../global/icons";

import * as S from './styles';

export default function PokemonTypeBadge ({type, key}: PokemonTypeBadgeProps) {
    return (
        <S.CardPokemonTypeBadge index={key} type={type.toLowerCase()}>
            <S.IconBadge source={icons[type]}/>
            <S.CardPokemonType maxFontSizeMultiplier={1.25}>{type}</S.CardPokemonType>
        </S.CardPokemonTypeBadge>
    )
}