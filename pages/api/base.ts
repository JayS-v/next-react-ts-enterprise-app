import process from 'process'

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface RequestData {
    url: string,
    body?: any,
    headers?: HeadersInit
    backendType?: BackendType
}

type RequestHandler = (data: RequestData) => Promise<Response>
type MetaRequestData = { url: string, method: HTTPMethod, body: any, headers?: HeadersInit }
type BackendType = 'auth' | 'backend'

export const request = (backendType: BackendType ,{url, headers, body, method}: MetaRequestData): Promise<Response> => {
    switch (backendType) {
        case 'auth':
            return sendRequestAuth({url, method, body, headers})
        case 'backend':
            return sendRequest({url, method, body, headers})
    }
}

/////////////////////////////////////////////////////////////////////////

function sendRequest({ headers, url, body, method }: MetaRequestData): Promise<Response> {
    return fetch(`${process.env.BACKEND_URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers,
    } as RequestInit)
}

function sendRequestAuth({ headers, url, body, method }: MetaRequestData): Promise<Response> {
    return fetch(`${process.env.KEYCLOAK_URL}/${process.env.AUTH_API}${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers,
    } as RequestInit)
}

//////////////////////////////////////////////////////////////////////////

export const get = ({headers, url, body, backendType}: RequestData): Promise<Response> =>
    request(backendType!, {url, method: 'GET', body: null, headers})

export const post = ({headers, url, body, backendType}: RequestData): Promise<Response> =>
    request(backendType!, {url, method: 'POST', body, headers})

export const put = ({headers, url, body, backendType}: RequestData): Promise<Response> =>
    request(backendType!, {url, method: 'PUT', body, headers})

export const patch = ({headers, url, body, backendType}: RequestData): Promise<Response> =>
    request(backendType!, {url, method: 'PUT', body, headers})

export const deleteReq = ({headers, url, body, backendType}: RequestData): Promise<Response> =>
    request(backendType!, {url, method: 'DELETE', body: null, headers})

//////////////////////////////////////////////////////////////////////////

export const authorizedRequest = (token: string | undefined, reqData: RequestData, handler: RequestHandler): Promise<Response> => {
    if (reqData.headers) {
        (reqData.headers as Record<string, string>)["Authorization"] = token ?? ''
    } else {
        reqData.headers = {
            "Authorization": token,
        } as Record<string, string>
    }

    return handler(reqData)
}