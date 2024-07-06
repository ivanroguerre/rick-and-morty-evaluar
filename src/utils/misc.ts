let timeoutId: number;

// Debounce simple. Se podría utilizar también una librería externa que cubra
// la mayoría de casos de uso o que sea específica para React.
// 1000ms es un buen valor por defecto.
export const debounce = (callback: VoidFunction, delay: number = 1000) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(callback, delay);
};
