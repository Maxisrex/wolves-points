export interface loginData {
    tEmail:string;
    tPassword:string;
}

export interface loginResponde {
    usuario:Result;
    token:string;
}
export interface Usuario{
    google: boolean;
    nombre: string;
    correo: string;
    uid:    string;
    img?:   string;
    empresa:string;
}

export interface googleUserInfo {
    idToken: string,
    serverAuthCode: string,
    scopes: Array<string>, // on iOS this is empty array if no additional scopes are defined
    user: {
        email: string,
        id: string,
        givenName: string,
        familyName: string,
        photo: string, // url
        name: string // full name
    }
}


// Generated by https://quicktype.io

export interface Respons {
    result: Result;
    token:  string;
}

export interface Result {
    nombreRespuesta:        string;
    correoRespuesta:        string;
    imagenRespuesta:        string;
    codigoEmpresaRespuesta: string;
    idUsuarioRespuesta:     number;
    Acceso:                 boolean;
}