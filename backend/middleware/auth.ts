

// Authentication layer for API routes.

/*



export default function authHandler(req, res, next)

    try {
        Step-1 Check for cookie or Bearer token

        Step-2 if token not found return 401 error

        Step-3 If token found, Decrypt it using jwt
        jwt.verify(token, SECRET_KEY);

        Step-4 if token expiry or invalid throw error 401

        Step-5 if successfully decoded, then merge user object into request object.

    } catch(e) {
        log
        throw error
    }








* */