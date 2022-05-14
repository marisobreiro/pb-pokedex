import React from "react";
import { Image } from "react-native";

import * as S from './styles';

type PokemonTypeBadgeProps = {
    type: string,
    key: any
}

export default function PokemonTypeBadge ({type, key}: PokemonTypeBadgeProps) {

    let icon = type

    return (
        <S.CardPokemonTypeBadge key={key} type={type.toLowerCase()}>
            <S.CardPokemonType>{type}</S.CardPokemonType>
        </S.CardPokemonTypeBadge>
    )
}