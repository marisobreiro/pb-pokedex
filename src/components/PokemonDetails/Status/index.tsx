import React, { useEffect, useState } from "react";

import { PokemonDetailsProps } from "../../../@types";

import PokemonStatus from "../../PokemonStatus";

import * as S from "./styles";

export function PokemonDetailsStatus({base, type}: PokemonDetailsProps) {

    const [ total, setTotal] = useState(0);
    
    // Obtendo a soma total do Status do Pokemon
    useEffect (() => {
        setTotal(
            (base.HP + base.Speed + base.Attack + base['Sp. Attack'] + base['Sp. Defense'])
        )
    })

    return (
        <S.Content>
            <S.ScrollView>
                <S.Paragraph type={type[0].toLowerCase()} maxFontSizeMultiplier={1.25}>Status</S.Paragraph>
                    <PokemonStatus 
                        type="HP" 
                        value={base.HP} 
                        style={type}
                    />
                    <PokemonStatus 
                        type="Attack" 
                        value={base.Attack} 
                        style={type} 
                    />
                    <PokemonStatus 
                        type="Defense" 
                        value={base.Defense} 
                        style={type}
                    />
                    <PokemonStatus 
                        type="Sp. Atk" 
                        value={base['Sp. Attack']} 
                        style={type}
                    />
                    <PokemonStatus 
                        type="Sp. Def" 
                        value={base['Sp. Defense']} 
                        style={type}
                    />
                    <PokemonStatus 
                        type="Speed" 
                        value={(base.Speed)} 
                        style={type}
                    />
                    <PokemonStatus 
                        type="Total" 
                        value={total} 
                        style={type}
                    />
            </S.ScrollView>
        </S.Content>
    )
}