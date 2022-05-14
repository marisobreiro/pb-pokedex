import React from "react";

import * as S from "./styles";

type PokemonStatusProps = {
    type: string,
    value: any,
    style: string[],

}

export default function PokemonStatus({type, value, style}: PokemonStatusProps) {
    return (
        <S.Status>
            <S.Type>{type}</S.Type>
            <S.Value>{value}</S.Value>

            <S.PercentBar>
                {/* <S.IconBadge /> */}
                <S.Percent style={style[0].toLowerCase()} percentage={value}/>
            </S.PercentBar>
        </S.Status>
    )
}