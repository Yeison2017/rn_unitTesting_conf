import {
  IUsContext,
  IUsContextResponse,
  usContext,
} from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const context: IUsContext = {
      clave: "",
      edad: 0,
    };

    const data: IUsContextResponse = usContext(context);

    expect(data).toEqual({
      nombreClave: context.clave,
      anios: context.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
