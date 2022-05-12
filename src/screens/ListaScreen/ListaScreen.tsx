import React, { useEffect, useState } from "react";
import { FlatList, Button } from "react-native";
import axios from "axios";

import { NavigationScreenProps } from "../../navigation/types";
import PokemonCard from "../../components/PokemonCard";

import * as S from "./ListaScreen.styles";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {

    // Obtendo dados da API
    const [pokemons, setPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState('');

    const url: string = 'http://localhost:3300/pokemons';

    useEffect(() => {
        const getPokemons = async () => {
            const response = await axios.get(url);
            setPokemons(response.data);
            setPokemonId(response.data.id)
        };
        getPokemons();
    }, []);

    // Navegação entre páginas
    const {navigation} : any = props;

    function handleNavigation() {
        navigation.navigate('DetalhesScreen', {
            paramKey: pokemonId
        });
    }
    
    return (
        <S.Container>
            <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

            <S.ScrollView>
                <S.Title>Pokédex</S.Title>
                <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

                <S.Content>
                    {pokemons.length > 0 &&
                        pokemons.map((pokemon)  => (
                            <PokemonCard 
                            id={pokemon.id} 
                            name={pokemon.name}
                            pokeData={pokemon}
                            handleNavigation={handleNavigation} />
                    ))}

                </S.Content>
            </S.ScrollView>
        </S.Container>
    );
}

