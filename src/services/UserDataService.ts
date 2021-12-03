import http from "../plugins/apiMain";
import EsiaDataService from "./EsiaDataService";
import router from "../router";

class UserDataService {

    userinfo(): Promise<any> {
        return http.get(
            `/tvs/user`,
            {
                headers: {
                    'Authorization': 'Bearer ' + EsiaDataService.getLocalToken()
                }
            }
        )
        .catch((e: Error) => {
            EsiaDataService.removeLocalToken();
            router.push('/')
            console.log('logout');
        });
    }
}

export default new UserDataService();