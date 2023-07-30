import heroes from "../data/heroes";
import { IHeroes } from "../data/heroes";

export const getHeroeById = (id: number) =>
  heroes.find((heroe: IHeroes) => heroe.id === id);
export const getHeroesByOwner = (owner: string) =>
  heroes.filter((heroe: IHeroes) => heroe.owner === owner);
