import React from "react";

import { PokemonCardProps } from "../../@types";
import { images } from "../../global/images";
import PokemonTypeBadge from "../PokemonTypeBadge";

import * as S from "./styles";

export default function PokemonCard({id, name, type, handleNavigation}: PokemonCardProps) {

    return (
        <S.Card activeOpacity={0.9} onPress={handleNavigation} type={type[0].toLowerCase()}>
            <S.CardLeft>
                <S.CardDotsBackgroundImage source={images.dotsCardImage} />

                <S.CardPokemonNumber maxFontSizeMultiplier={1.25}>#{id.toString().padStart(3, "0")}</S.CardPokemonNumber>
                <S.CardPokemonName maxFontSizeMultiplier={1.25}>{name}</S.CardPokemonName>

                <S.CardPokemonTypeList>
                    {type.map((item, index)=> {
                        return (<PokemonTypeBadge key={index} type={item} />)
                    })}
                </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
                <S.CardPokemonBackgroundImage source={images.pokeballCardImage} />

                <S.CardPokemonImage
                    source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    }}
                />
            </S.CardRigth>
        </S.Card>
    )
}