declare module "*.png";
declare module "*.json";

export type PokemonDetailsProps = {
    id: number,
    name: string,
    type: string[],
    tipo: string,
    base: {
        "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed": number
    }
}

export type PokemonsDataProps = {
    id: number,
    name: string,
    type: any
}

export type PokemonCardProps = {
    id: number,
    name: string,
    type: string[],
    handleNavigation: any
}