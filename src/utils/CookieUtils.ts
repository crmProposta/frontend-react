import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

function setTokensOnCookies(tokens: any) {
    const cookies = new Cookies()
    const accessTokenDecoded = jwtDecode(tokens.accessToken) as any
    const refreshTokenDecoded = jwtDecode(tokens.refreshToken) as any

    cookies.set("accessToken", tokens.accessToken, { path: '/', expires: new Date(accessTokenDecoded.exp * 1000) })
    cookies.set("refreshToken", tokens.refreshToken, { path: '/', expires: new Date(refreshTokenDecoded.exp * 1000) })
}

function getAccessToken() {
    const cookies = new Cookies()

    return cookies.get("accessToken")
}

function deleteAuthTokens() {
    const cookies = new Cookies()

    cookies.remove("accessToken", { path: '/'})
    cookies.remove("refreshToken", { path: '/'})
}

export default { setTokensOnCookies, getAccessToken, deleteAuthTokens }