import axios from "axios";

export class API {
    public static path = axios.create({
        baseURL: `http://127.0.0.1:8080/api/`
        });
}