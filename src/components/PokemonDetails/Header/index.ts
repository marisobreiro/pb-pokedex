import React, { useEffect, useState } from "react";
import { View } from "react-native";

// Services e Types

// Components
import PokemonStatus from "../../PokemonStatus";
import PokemonTypeBadge from "../../PokemonTypeBadge";

// Style e imagens
import * as S from "./styles";
import pokeballBackgroundImage from "../../../global/assets/Pokeball-bg.png"    
import dotsCardImage from "../../../global/assets/Pattern.png";
import backImage from "../../../global/assets/Back.png";

type DetalhesScreenHeaderProps = {
    id: number,
    name: string,
    type: string[]
}

export function DetalhesScreenHeader({id, name, type}: DetalhesScreenHeaderProps) {


    return (
        <S.Container>
            <S.Header>
                <S.ContainerBackgroundImage source={pokeballBackgroundImage}/>

                <S.DotsBackgroundImage source={dotsCardImage} />

                <S.GoBackButton onPress={handleNavigation}>
                    <S.GoBackImage source={backImage} />
                </S.GoBackButton>

                <S.DetailsView>
                    <View>
                        <S.PokemonName>{name}</S.PokemonName>
                        <S.TypeList>
                            {type != undefined &&
                                type.map((item, index) => {
                                return (<PokemonTypeBadge key={index} type={item}/>)
                            })}
                        </S.TypeList>
                    </View>
                    <S.PokemonNumber>#{[id].toString().padStart(3, "0")}</S.PokemonNumber>
                </S.DetailsView>

                <S.PokemonImage
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                    }}
                />
            </S.Header>

            <S.Content>
                <S.ScrollView>
                <S.Paragraph>Status</S.Paragraph>

                    {/* {pokemonData.map((item) => {
                        <PokemonStatus type="test" value={item.base.HP} />
                    })} */}

                    <PokemonStatus type="HP" value={45}/>
                    <PokemonStatus type="Attack" value={49}/>
                    <PokemonStatus type="Defense" value={49} />
                    <PokemonStatus type="Sp. Atk" value={65} />
                    <PokemonStatus type="Sp. Def" value={65} />
                    <PokemonStatus type="Speed" value={45} />

                    <PokemonStatus type="Total" value={318} />
                </S.ScrollView>
            </S.Content>
        </S.Container>
    );
}
