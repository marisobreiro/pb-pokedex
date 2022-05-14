import React, { useEffect, useState } from "react";
import { FlatList} from "react-native";

import { NavigationScreenProps } from "../../navigation/types";
import PokemonCard from "../../components/PokemonCard";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import { api } from "../../api";

import * as S from "./ListaScreen.styles";

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {

    // Tipagem dos dados do Pokemon
    type PokemonsDataProps = {
        id: number,
        name: string,
        type: any
    }

    // Obtendo os Pokemons via API - json-server
    const [pokemons, setPokemons] = useState<PokemonsDataProps[]>([]);

    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('pokemons');
            setPokemons(response.data);
        };
        getPokemons();
    }, []);

    // Navegação entre páginas
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
                        // type={item.type[0]}
                        // typeTwo={item.type[1]}
                        handleNavigation={() => handleNavigation(item.id)}
                        />
                )}
            />
        </S.Container>
    );
}

