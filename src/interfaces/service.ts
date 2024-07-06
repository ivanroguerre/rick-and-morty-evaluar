export interface IRickAndMortyServiceGetCharactersParams {
  // Acá se pueden agregar muchos más filtros, por ahora solo se filtra por nombre
  filters?: {
    name?: string;
  };
}
