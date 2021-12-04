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

    userinfo(): Promise<any> {
        return http.get(
            `/realms/master/protocol/openid-connect/userinfo`,
            {
                headers: {
                    'Authorization': 'Bearer ' + this.getLocalToken()
                }
            }
        );
    }

    getLocalToken(): string|null {
        return localStorage.getItem('esia_token');
    }

    saveLocalToken(token: string, refresh_token: string) {
        localStorage.esia_token = token;
        localStorage.refresh_token = refresh_token;
    }

    removeLocalToken() {
        localStorage.removeItem('esia_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('name');
    }
}

export default new EsiaDataService();