export interface IPokemon {

    abilities: any[];
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: object;
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
    };
    stats: any[];
    types: any[];
    weight: number;
}
