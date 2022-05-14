import React from "react";

import * as S from './styles';

type PokemonTypeBadgeProps = {
    type: string,
    key: any
}

export default function PokemonTypeBadge ({type, key}: PokemonTypeBadgeProps) {
    return (
        <S.CardPokemonTypeBadge key={key} type={type.toLowerCase()}>
            <S.CardPokemonType>{type}</S.CardPokemonType>
        </S.CardPokemonTypeBadge>
    )
}