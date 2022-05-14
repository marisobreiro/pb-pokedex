import React, { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { NavigationScreenProps } from "../../navigation/types";

import PokemonStatus from "../../components/PokemonStatus";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";

import * as S from "./DetalhesScreen.styles";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";

export function DetalhesScreen(props: NavigationScreenProps<"DetalhesScreen">) {

    const {navigation}: any = props;
    const pokemonId: number = props.route.params.id;

    const url: string = 'http://localhost:3300/pokemons';

    const [pokemon, setPokemon] = useState<any>([]);

    // Obtendo dados do pokemon selecionado
    useEffect(() => {
        const getPokemon = async () => {
            const response = await axios.get(`${url}/${pokemonId}`);
            setPokemon(response.data);
            console.log(response.data)
        };
        getPokemon();
    }, []);

    // Navegação entre telas - Back to ListaScreen
    function handleNavigation(): void {
        navigation.navigate("ListaScreen");
    }

    return (
        <S.Container>
            <S.Header>
                <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

                <S.DotsBackgroundImage source={dotsCardImage} />

                <S.GoBackButton onPress={handleNavigation}>
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
                        <S.PokemonName>{pokemon.name}</S.PokemonName>
                        <S.TypeList>
                            <PokemonTypeBadge type={pokemon.type}/>
                            <PokemonTypeBadge typeTwo={pokemon.type} />
                        </S.TypeList>
                    </View>
                    <S.PokemonNumber>#{[pokemon.id].toString().padStart(3, "0")}</S.PokemonNumber>
                </View>

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
