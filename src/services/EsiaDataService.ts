import http from "../plugins/apiEsia";

class EsiaDataService {
    getToken(username:any, password: any): Promise<any> {
        const params = new URLSearchParams()
        params.append('client_id', 'tvscp')
        params.append('client_secret', import.meta.env.VITE_ESIA_CLIENT_SECRET)
        params.append('grant_type', 'password')
        params.append('scope', 'openid')
        params.append('username', username)
        params.append('password', password)

        return http.post(
            "/realms/master/protocol/openid-connect/token",
            params,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
    }

    userinfo(token: any): Promise<any> {
        // const token = '';
        return http.get(
            `/realms/master/protocol/openid-connect/userinfo`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    }
}

export default new EsiaDataService();