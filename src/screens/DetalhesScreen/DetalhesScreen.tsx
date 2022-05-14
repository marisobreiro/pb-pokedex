import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationScreenProps } from "../../navigation/types";

// Services e Types
import { api } from "../../services/api";
import { PokemonDetailsProps } from "../../@types";

// Components
import PokemonStatus from "../../components/PokemonStatus";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";

// Style e imagens
import * as S from "./DetalhesScreen.styles";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";

export function DetalhesScreen(props: NavigationScreenProps<"DetalhesScreen">) {

    const { navigation }: any = props;
    const pokemonId: number = props.route.params.id;

    const [ total, setTotal] = useState(0);
    const [ pokemon, setPokemon ] = useState<PokemonDetailsProps>({base:{}});

    // Obtendo dados do pokemon selecionado
    useEffect(() => {
        async function getPokemon() {
            const response = await api.get(`pokemons/${pokemonId}`);
            setPokemon(response.data);
        };
        getPokemon();
    }, []);

    // Obtendo a soma total do Status do Pokemon
    useEffect (() => {
        setTotal(
            (pokemon.base.HP + pokemon.base.Speed + pokemon.base.Attack + pokemon.base['Sp. Attack'] + pokemon.base['Sp. Defense'])
        )
    })

    // Navegação - Back to ListaScreen
    function handleNavigation(): void {
        navigation.navigate("ListaScreen");
    }

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
                        <S.PokemonName>{pokemon.name}</S.PokemonName>
                        <S.TypeList>
                            {pokemon && pokemon.type != undefined &&
                                pokemon.type.map((item, index) => {
                                return (<PokemonTypeBadge key={index} type={item}/>)
                            })}
                        </S.TypeList>
                    </View>
                    <S.PokemonNumber>#{[pokemon.id].toString().padStart(3, "0")}</S.PokemonNumber>
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
                    <PokemonStatus type="HP" value={pokemon.base.HP} style={pokemon.type}/>
                    <PokemonStatus type="Attack" value={pokemon.base.Attack} style={pokemon.type}/>
                    <PokemonStatus type="Defense" value={pokemon.base.Defense} style={pokemon.type}/>
                    <PokemonStatus type="Sp. Atk" value={pokemon.base['Sp. Attack']} style={pokemon.type}/>
                    <PokemonStatus type="Sp. Def" value={pokemon.base['Sp. Defense']} style={pokemon.type}/>
                    <PokemonStatus type="Speed" value={pokemon.base.Speed} style={pokemon.type}/>

                    <PokemonStatus type="Total" value={total} style={pokemon.type}/>
                </S.ScrollView>
            </S.Content>
        </S.Container>
    );
}
