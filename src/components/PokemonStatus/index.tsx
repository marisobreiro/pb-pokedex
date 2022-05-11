import React from "react";

import * as S from "./styles";

type PokemonStatusProps = {
    type: string,
    value: number
}

export default function PokemonStatus({type, value}: PokemonStatusProps) {
    return (
        <S.Status>
            <S.Type>{type}</S.Type>
            <S.Value>{value}</S.Value>

            <S.PercentBar>
                <S.Percent />
            </S.PercentBar>
        </S.Status>
    )
}