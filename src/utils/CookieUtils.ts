import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

function setTokensOnCookies(tokens: any) {
    const cookies = new Cookies()
    const accessTokenDecoded = jwtDecode(tokens.accessToken) as any
    const refreshTokenDecoded = jwtDecode(tokens.refreshToken) as any

    cookies.set("accessToken", tokens.accessToken, { path: '/', expires: new Date(accessTokenDecoded.exp * 1000) })
    cookies.set("refreshToken", tokens.refreshToken, { path: '/', expires: new Date(refreshTokenDecoded.exp * 1000) })
}

export default setTokensOnCookies