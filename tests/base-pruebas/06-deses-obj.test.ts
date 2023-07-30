import {
  IUsContext,
  IUsContextResponse,
  usContext,
} from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const context: IUsContext = {
      clave: "12345",
      edad: 15,
    };

    const data: IUsContextResponse = usContext(context);

    expect(data).toEqual({
      nombreClave: context.clave,
      anios: context.edad,
      latlng: {
        lat: 14.123,
        lng: -12.3232,
      },
    });
  });
});
