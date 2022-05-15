import React, { useEffect, useState } from "react";
import { FlatList} from "react-native";

import { api } from "../../services/api";
import { PokemonsDataProps } from "../../@types";
import { NavigationScreenProps } from "../../navigation/types";

import PokemonCard from "../../components/PokemonCard";
import { PokemonListHeader } from "../../components/PokemonList/Header";

import * as S from "./ListaScreen.styles";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {

    const {navigation} : any = props;
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
    function handleNavigation(id: number): void {
        navigation.navigate('DetalhesScreen', {
            id: id
        });
    }

    return (
        <S.Container>
            <S.Content>
                <FlatList 
                    ListHeaderComponent={PokemonListHeader}
                    data={pokemons}
                    initialNumToRender={8}
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
            </S.Content>
        </S.Container>
    );
}

