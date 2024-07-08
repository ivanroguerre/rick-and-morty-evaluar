import { ICharacter } from "../interfaces/api";

// En esta caso se hace un mapeo directo pero si se tuviesen que traducir
// muchos más campos en la respuesta de la API lo recomendable sería utilizar
// alguna solución más robusta o incluso pensar en emplear I18N
export const translateStatus = (status: ICharacter["status"]) => {
  switch (status) {
    case "Alive":
      return "vivo";
    case "Dead":
      return "muerto";
    case "unknown":
      return "desconocido";
    default:
      const _exhaustiveCheck: never = status;
      throw new Error(`Valor de status inválido: ${_exhaustiveCheck}`);
  }
};
