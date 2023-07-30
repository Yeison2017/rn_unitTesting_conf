import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // expect(testUser).toStrictEqual(user);
    expect(testUser).toEqual(user);
  });

  test("getUserioActivo debe de retornar un objeto", () => {
    const name = "Yeison";

    const user = getUsuarioActivo(name);

    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
