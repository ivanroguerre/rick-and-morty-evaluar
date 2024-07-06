// Se mantiene simple la interfaz pero es acá en donde podrían agregarse más
// opciones de configuración. P. ej: headers, body, etc.
export interface IClientConfig {
  // Para mantenerlo simple solo acepta el método GET pero se puede extender
  // a todos los verbos HTTP al agregar más métodos en la propiedad `method`
  // P. ej: method?: "get" | "post" | "put"
  // El método es opcional ya que de no pasarse se ejecuta una petición GET
  // y así el cliente se conforma con la mayoría de clientes HTTP existentes
  method?: "get";
  url: string;
  params?: { [key: string]: string };
}
