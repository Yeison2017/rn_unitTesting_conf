export interface IUsContext {
  clave: string;
  edad: number;
}

export interface IUsContextResponse {
  nombreClave: string;
  anios: number;
  latlng: {
    lat: number;
    lng: number;
  };
}

export const usContext = ({ clave, edad }: IUsContext): IUsContextResponse => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.123,
      lng: -12.3232,
    },
  };
};
