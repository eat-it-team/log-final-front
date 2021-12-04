import http from "../plugins/apiMain";
import EsiaDataService from "./EsiaDataService";

class AnaliseDataService {
    analyse(): Promise<any> {
        return http.get(
            `/text/analyse`,
            {
                headers: {
                    'Authorization': 'Bearer ' + EsiaDataService.getLocalToken()
                }
            }
        );
    }
}

export default new AnaliseDataService();