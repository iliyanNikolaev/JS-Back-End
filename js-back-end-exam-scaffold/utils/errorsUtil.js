// Тази util функционалност се използва защото по време на заявки към базата, можем да получим два вида грешки
// Първият вид са грешки, които ние сме throw-нали
// Вторият вид са грешки, които са дошли от mongoose: например, дадено пропърти което е required в mongooseSchema-та, а при заявката не е подадено

// Проблема е че при обикновените грешки чрез error.message ни дава директно съобщението от грешката, а при mongoose грешките ни връща обект, който
// се налага да обработим допълнително за да стигнем до съобщението (или съобщенията, понеже може да върне няколко грешки едновременно)

// когато е обикновена грешка това error.name, по което суичваме в generateErrorMessage, връща 'Error', a mongoose грешките връщат 'ValidationError'

function generateErrorMessage(error){

    switch(error.name){
        case 'Error': 
            return error.message;
        case 'ValidationError':
            return getMongooseErrorMessage(error);
        default: 
            return error.message;
    }
}

function getMongooseErrorMessage(error){
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    // Mongoose грешката е обект който има пропърти 'errors', което е обект от обекти за всяка една конкретна грешка, и всеки един от тези обекти има
    // пропърти 'message', което е message-а който сме подали в mongoose.Schema-та  

    return errors[0]; // Тук връщаме 0 елемент от масив, понеже горната магия, ще върне масив, в който ще стои съобщението от всяка една
    // възникнала грешка, по задание е достатъчно да върнем само първата грешка
}

module.exports = generateErrorMessage;





