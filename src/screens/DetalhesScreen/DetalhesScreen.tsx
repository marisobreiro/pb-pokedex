import React from "react";
import { View } from "react-native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";

import * as S from "./DetalhesScreen.styles";
import PokemonStatus from "../../components/PokemonStatus";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";

export function DetalhesScreen() {
    return (
        <S.Container>
            <S.Header>
                <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

                <S.DotsBackgroundImage source={dotsCardImage} />

                <S.GoBackButton>
                    <S.GoBackImage source={backImage} />
                </S.GoBackButton>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <S.PokemonName>Bulbasaur</S.PokemonName>
                        <S.TypeList>
                            <PokemonTypeBadge type="Grass"/>
                            <PokemonTypeBadge type="Poison" />
                        </S.TypeList>
                    </View>
                    <S.PokemonNumber>#001</S.PokemonNumber>
                </View>

                <S.PokemonImage
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
                    }}
                />
            </S.Header>

            <S.Content>
                <S.ScrollView>
                <S.Paragraph>Status</S.Paragraph>

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
