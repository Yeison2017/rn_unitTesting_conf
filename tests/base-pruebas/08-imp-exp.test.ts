import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroesById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroesById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroesDC = heroes.filter((heroe) => heroe.owner === owner);
    const response = getHeroesByOwner(owner);

    expect(response).toEqual(heroesDC);
    expect(response.length).toBe(heroesDC.length);
  });

  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const heroesMarvel = heroes.filter((heroe) => heroe.owner === owner);
    const response = getHeroesByOwner(owner);

    expect(response).toEqual(heroesMarvel);
    expect(response.length).toBe(heroesMarvel.length);
  });
});
