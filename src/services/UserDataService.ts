import http from "../plugins/apiMain";
import EsiaDataService from "./EsiaDataService";

class UserDataService {

    userinfo(): Promise<any> {
        return http.get(
            `/tvs/user`,
            {
                headers: {
                    'Authorization': 'Bearer ' + EsiaDataService.getLocalToken()
                }
            }
        );
    }
}

export default new UserDataService();