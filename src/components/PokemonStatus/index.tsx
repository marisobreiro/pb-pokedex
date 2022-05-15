import React from "react";

import { PokemonStatusProps } from "../../@types";

import * as S from "./styles";

export default function PokemonStatus({type, value, style}: PokemonStatusProps) {
    return (
        <S.Status>
            <S.Type maxFontSizeMultiplier={1.25}>{type}</S.Type>
            <S.Value maxFontSizeMultiplier={1.25}>{value}</S.Value>

            <S.PercentBar>
                <S.Percent percent={style[0].toLowerCase()} percentage={(value != undefined ? value : 0)}/>
            </S.PercentBar>
        </S.Status>
    )
}