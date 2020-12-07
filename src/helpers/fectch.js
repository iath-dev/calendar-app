const BASE_URL = process.env.REACT_APP_API_URL

export const noTokenFetch = (endpoint, data, method = "GET") => {
    const url = `${BASE_URL}${endpoint}`;

    if (method === "GET") {
        return fetch(url)
    } else {
        return fetch(url,  {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}

export const TokenFetch = (endpoint, data, method = "GET") => {
    const url = `${BASE_URL}${endpoint}`

    if (method === "GET") {
        return fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('token-calendar')
            }
        })
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token-calendar')
            },
            body: JSON.stringify(data)
        })
    }
}