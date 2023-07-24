import axios from "axios";
import { ROUTE_API_URL } from "../../consts";

export default class ApiService {
  static async fetchPolyline(startPoint, checkPoint, endPoint) {
    try {
      return await axios.get(
        `${ROUTE_API_URL}/${startPoint.lat},${startPoint.lat};${checkPoint.lat},${checkPoint.lat};${endPoint.lat},${endPoint.lat}?geometries=geojson`
      );
    } catch (error) {
      console.log("error", error);
    }
  }
}
