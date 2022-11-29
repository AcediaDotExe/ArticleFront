import {parseJwt} from "../parsers/jwt";

export function getParsedToken(): IToken | null {
        const token = getToken();
        if(token){
                return parseJwt(token);
        }
        return null;
}

export function getToken(){
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("token");
}

export interface IToken {
        sub: string,
        iat: string,
        exp: string,
}