import { 
    CallbackProps, 
    MiddlewareProps, 
    ValidateRequest,
    Request,
    Response
} from "./types";

class Middleware {
    private readonly _validateCallback?: ValidateRequest
    private readonly _callback: CallbackProps;

    constructor({
        validateRequest,
        callback
    }: MiddlewareProps) {
        if(validateRequest) {
            this._validateCallback = validateRequest
        }
        this._callback= callback;
    }

    protected get validateRequest(): ValidateRequest {
        return this._validateCallback;
    }

    protected get callback(): CallbackProps {
        return this._callback;
    }

    public create() {
        const {
            validateRequest,
            callback
        } = this;

        return (
            request: Request,
            response: Response
        ) => {
            try {
                if(validateRequest) {
                    const errorOfRequest = validateRequest(request);

                    if(errorOfRequest) {
                        response.status(400).send("Sua resquisição não passou da validação");
                    }
                }

                callback(request, response);
            } catch (error) {
                response.status(500).send("Error ao executar a requisição");
            }
        };
    }
}

export default Middleware;