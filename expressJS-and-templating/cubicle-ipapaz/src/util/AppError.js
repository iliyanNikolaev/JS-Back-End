class AppError {
    constructor(message, data = {}){
        this.message = message;
        this.data = data;
    }
}

module.exports = AppError;

//създаваме си custom class за грешки който ще throw-ваме в аппа