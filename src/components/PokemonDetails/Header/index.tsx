import React from "react";
import { View } from "react-native";

import { PokemonDetailsProps } from "../../../@types";

import PokemonTypeBadge from "../../PokemonTypeBadge";

import * as S from './styles';

export function PokemonDetailsHeader({name, type, id}: PokemonDetailsProps) {
    return(
        <>
            <S.DetailsView>
                <View>
                    <S.PokemonName maxFontSizeMultiplier={1.25}>{name}</S.PokemonName>
                        <S.TypeList>
                                {type != undefined &&
                                    type.map((item, index) => {
                                    return (<PokemonTypeBadge key={index} type={item}/>)
                                })}
                        </S.TypeList>
                </View>
                <S.PokemonNumber maxFontSizeMultiplier={1.25}>#{[id].toString().padStart(3, "0")}</S.PokemonNumber>
            </S.DetailsView>

            <S.PokemonImage
            source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }}
            />
        </>
    )
}