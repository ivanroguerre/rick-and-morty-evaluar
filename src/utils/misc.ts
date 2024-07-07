import { ICharacter } from "../interfaces/api";

let timeoutId: number;

// Debounce simple. Se podría utilizar también una librería externa que cubra
// la mayoría de casos de uso o que sea específica para React.
// 1000ms es un buen valor por defecto.
export const debounce = (callback: VoidFunction, delay: number = 1000) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(callback, delay);
};

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
