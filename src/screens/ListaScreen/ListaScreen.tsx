import React, { useEffect, useState } from "react";
import { FlatList} from "react-native";

import { NavigationScreenProps } from "../../navigation/types";
import PokemonCard from "../../components/PokemonCard";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import { api } from "../../services/api";

import * as S from "./ListaScreen.styles";
import { PokemonsDataProps } from "../../@types";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {

    const [pokemons, setPokemons] = useState<PokemonsDataProps[]>([]);

     // Obtendo os Pokemons via API - json-serve
    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('pokemons');
            setPokemons(response.data);
        };
        getPokemons();
    }, []);

    // Navegação entre páginas - Go to Detalhes Screen
    const {navigation} : any = props;

    function handleNavigation(id: number): void {
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
                        key={item.id}
                        id={item.id} 
                        name={item.name}
                        type={item.type}
                        handleNavigation={() => handleNavigation(item.id)}
                        />
                )}
            />
        </S.Container>
    );
}

