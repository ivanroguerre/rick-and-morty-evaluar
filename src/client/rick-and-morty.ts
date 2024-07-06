import { IClientConfig } from "../interfaces/client";

import { buildQueryString } from "../utils/client";

export const makeRequest = async (config: IClientConfig) => {
  const fetchMethod = config.method || "get";
  let fetchURL = config.url;
  const fetchParams = config.params || {};

  const queryString = buildQueryString(config.params);
  if (queryString !== "") fetchURL = `${fetchURL}?${queryString}`;

  // Se puede agregar más configuración en el segundo parámetro del
  // constructor para el objeto `Request`. P. ej: header, body, etc.
  const fetchRequest = new Request(fetchURL, { method: fetchMethod });

  try {
    return await fetch(fetchRequest);
  } catch {
    // Se puede centralizar acá la gestión de errores. Por ahora solo
    // se retorna una cadena de texto para cualquier error lanzado por
    // el cliente y que puede ser mostrado directamente al usuario.
    return Promise.reject(
      "Ha ocurrido un error al tratar de obtener la información."
    );
  }
};
