import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client({});

export class RouteOptimizationService {
  static async optimizeRoute(origins, destination) {
    try {
      const response = await client.distancematrix({
        params: {
          origins: origins,
          destinations: [destination],
          key: "<YOUR_API_KEY>",
        },
      });
  
      // logica para ordenar las paradas basandose en la distancia
  
      const sortedOrigins = origins.sort((a, b) => {
        return (
          response.data.rows[origins.indexOf(a)].elements[0].distance.value -
          response.data.rows[origins.indexOf(b)].elements[0].distance.value
        );
        return sortedOrigins;
      });
    } catch (error) {
      console.error("Error optimizing route:  ", error);
      throw error;
    }
  }
}
