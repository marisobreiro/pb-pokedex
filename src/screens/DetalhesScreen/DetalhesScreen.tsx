import React, { useEffect, useState } from "react";
import { NavigationScreenProps } from "../../navigation/types";

import { api } from "../../services/api";
import { PokemonDetailsProps } from "../../@types";
import { images } from "../../global/images";

import { PokemonDetailsHeader } from "../../components/PokemonDetails/Header";
import { PokemonDetailsStatus } from "../../components/PokemonDetails/Status";

import * as S from "./DetalhesScreen.styles";

export function DetalhesScreen(props: NavigationScreenProps<"DetalhesScreen">) {

    const { navigation }: any = props;
    const pokemonId: number = props.route.params.id;
    const defaultPokemon: any = {base:{}, type: ["normal"]};

    const [ pokemon, setPokemon ] = useState<PokemonDetailsProps>(defaultPokemon);

    // Obtendo dados do pokemon selecionado
    useEffect(() => {
        async function getPokemon() {
            const response = await api.get(`pokemons/${pokemonId}`);
            setPokemon(response.data);
        };
        getPokemon();
    }, []);

    // Navegação - Back to ListaScreen
    function handleNavigation(): void {
        navigation.navigate("ListaScreen");
    }

    return (
        <S.Container type={pokemon.type[0].toLowerCase()}>
            <S.Header >
                <S.ContainerBackgroundImage source={images.pokeballBackgroundImage}/>

                <S.DotsBackgroundImage source={images.dotsCardImage} />

                <S.GoBackButton onPress={handleNavigation}>
                    <S.GoBackImage source={images.backImage} />
                </S.GoBackButton>

                <PokemonDetailsHeader
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                />
            </S.Header>
            <PokemonDetailsStatus 
                type={pokemon.type}
                base={pokemon.base}
            />
        </S.Container>
    );
}
