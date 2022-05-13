import React, { useEffect, useState } from "react";
import { FlatList} from "react-native";
import axios from "axios";

import { NavigationScreenProps } from "../../navigation/types";
import PokemonCard from "../../components/PokemonCard";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";

import * as S from "./ListaScreen.styles";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {

    // Obtendo dados da API
    const [pokemons, setPokemons] = useState([]);

    const url: string = 'http://localhost:3300/pokemons';

    useEffect(() => {
        const getPokemons = async () => {
            const response = await axios.get(url);
            setPokemons(response.data);
        };
        getPokemons();
    }, []);

    // Navegação entre páginas
    const {navigation} : any = props;

    function handleNavigation(id: any): void {
        navigation.navigate('DetalhesScreen', {
            id: id
        });
    }

    return (
        <S.Container>
            <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

            <S.Title>Pokédex</S.Title>
            <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>

            <FlatList 
                data={pokemons}
                initialNumToRender={4}
                renderItem={({item}) => (
                    <PokemonCard 
                        id={item.id} 
                        name={item.name}
                        type={item.type[0]}
                        typeTwo={item.type[1]}
                        handleNavigation={() => handleNavigation(item.id)}
                        />
                )}
            />
        </S.Container>
    );
}

