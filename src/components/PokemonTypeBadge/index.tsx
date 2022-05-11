import React from "react";

import * as S from './styles';

type PokemonTypeBadgeProps = {
    type: string,
}

export default function PokemonTypeBadge ({type}: PokemonTypeBadgeProps) {
    return (
        <S.CardPokemonTypeBadge>
            <S.CardPokemonType>{type}</S.CardPokemonType>
        </S.CardPokemonTypeBadge>
    )
}