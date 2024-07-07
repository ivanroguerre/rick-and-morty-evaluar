import {
  IClientConfig,
  IRickAndMortyClientResponse,
} from "../interfaces/client";

import { buildQueryString } from "../utils/client";

const RICK_AND_MORTY_URL = "https://rickandmortyapi.com/api";

export const makeRequest = async <Result>(
  config: IClientConfig
): Promise<IRickAndMortyClientResponse<Result>> => {
  const fetchMethod = config.method || "get";
  const fetchPath = config.path || "";
  const fetchParams = config.params || {};

  let fetchURL = RICK_AND_MORTY_URL;
  if (fetchPath !== "") fetchURL += `/${fetchPath}`;

  const queryString = buildQueryString(fetchParams);
  if (queryString !== "") fetchURL += `?${queryString}`;

  // Se puede agregar más configuración en el segundo parámetro del
  // constructor para el objeto `Request`. P. ej: header, body, etc.
  const fetchRequest = new Request(fetchURL, { method: fetchMethod });

  try {
    const response = await fetch(fetchRequest);
    // Por ahora no se tiene en cuenta el código de respuesta ya que
    // igualmente no se ha centralizado el manejo de errores.
    if (!response.ok) {
      // La API no retorna arreglo vacío sino un error 404 cuando no
      // hay personajes que coincidan con la búsqueda
      if (response.status === 404)
        return Promise.reject("No se encontraron resultados!");
      throw new Error();
    }
    return response.json();
  } catch {
    // Se puede centralizar acá la gestión de errores. Por ahora solo
    // se retorna una cadena de texto para cualquier error lanzado por
    // el cliente y que puede ser mostrado directamente al usuario.
    return Promise.reject(
      "Ha ocurrido un error al tratar de obtener la información."
    );
  }
};
