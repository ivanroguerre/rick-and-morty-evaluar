import { IClientConfig } from "../interfaces/client";

// Se puede extender la lógica de esta función para cubrir muchos
// casos borde.
// Se mantiene simple por cuestiones de tiempo.
export const buildQueryString = (params: IClientConfig["params"]) => {
  if (params === undefined) return "";
  return Object.entries(params)
    .map(([key, value]) => {
      // Se cubre caso borde en donde el parámetro puede venir indefinido
      if (value !== undefined) return `${key}=${value}`;
    })
    .join("&");
};
