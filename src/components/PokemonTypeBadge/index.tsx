import React from "react";

import * as S from './styles';

type PokemonTypeBadgeProps = {
    type?: string,
    typeTwo?: string,
}

export default function PokemonTypeBadge ({type, typeTwo}: PokemonTypeBadgeProps) {
    return (
        <S.CardPokemonTypeBadge>
            <S.CardPokemonType>{type} {typeTwo}</S.CardPokemonType>
        </S.CardPokemonTypeBadge>
    )
}