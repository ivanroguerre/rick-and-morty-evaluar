export interface ICharacter {
  id: number;
  name: string;
  // Por la documentación se conocen los 3 únicos posibles estados
  status: "Alive" | "Dead" | "unknown";
  location: {
    name: string;
  };
  image: string;
}
