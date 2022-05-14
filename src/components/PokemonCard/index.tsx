import React from "react";

import pokeballCardImage from "../../global/assets/Pokeball.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./styles";
import PokemonTypeBadge from "../PokemonTypeBadge";

type PokemonCardProps = {
    id: number,
    name: string,
    type: string,
    typeTwo: string,
    handleNavigation: any
}

export default function PokemonCard({id, name, type, typeTwo, handleNavigation}: PokemonCardProps) {

    return (
        <S.Card activeOpacity={0.9} onPress={handleNavigation} type={type[0].toLowerCase()}>
            <S.CardLeft>
                <S.CardDotsBackgroundImage source={dotsCardImage} />

                <S.CardPokemonNumber>#{id.toString().padStart(3, "0")}</S.CardPokemonNumber>
                <S.CardPokemonName>{name}</S.CardPokemonName>

                <S.CardPokemonTypeList>
                    <PokemonTypeBadge type={type}/>
                    <PokemonTypeBadge type={typeTwo} />
                </S.CardPokemonTypeList>
            </S.CardLeft>

            <S.CardRigth>
                <S.CardPokemonBackgroundImage source={pokeballCardImage} />

                <S.CardPokemonImage
                    source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    }}
                />
            </S.CardRigth>
        </S.Card>
    )
}