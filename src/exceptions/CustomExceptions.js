class CustomException extends Error {
    
    #statusCode = 400;
    
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    getStatusCode() {
        return this.#statusCode;
    }
}

exports.CustomException = CustomException;