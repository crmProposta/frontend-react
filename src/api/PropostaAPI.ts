import axios from "axios";
import CookieUtils from "../utils/CookieUtils";

export class API {
    public static baseURL = `http://127.0.0.1:8080/api/`
    public static path = axios.create({
        baseURL: API.baseURL
        });

    public static authPath = () => {
        let accessToken = CookieUtils.getAccessToken()
        accessToken = (accessToken != null) ? accessToken : "";

        return axios.create({
            baseURL: API.baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
    }
}