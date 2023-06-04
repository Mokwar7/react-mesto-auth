export default class Auth {
    constructor(settings) {
        this._url = settings.url
        this._headers = settings.headers
    }

    _checkPesponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    signUp(data) {
        return fetch(`${this._url}signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                'password': data.password,
                'email': data.email
            })
        })
            .then(this._checkPesponse)
    }

    signIn(data) {
        return fetch(`${this._url}signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                'password': data.password,
                'email': data.email
            })
        })
            .then(this._checkPesponse)
    }
    checkJWT(token) {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            },
        })
            .then(this._checkPesponse)
    }
}

export const auth = new Auth({
    url: 'https://auth.nomoreparties.co/',
    headers: {
      'Content-Type': 'application/json'
    },
})
