
// input boix validations
export const validationSchema={
    password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, /* This regex ensures the password contains at least 8 characters, with at least one letter and one number.*/
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    emailanother:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, /*This regex checks if the input follows the standard email format. */
    phoneno: /^\d{10}$/,
    textonly: /^[a-zA-Z\s]+$/,
    numberonly:/^\d*$/,
    url:/^(https?:\/\/)?([^\s@]+@[^\s@]+\.)?[^\s@]+\.[^\s@]+$/,    /* This regex checks for a valid URL, with optional HTTP/HTTPS protocols.*/
    creditcard:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/, /* This regex validates major credit card numbers (Visa, MasterCard, American Express, Discover). */
    phonenumberincludeplus:/^\+?[1-9]\d{1,14}$/ , /* This regex validates international phone numbers, including optional '+' at the beginning. */
    username:/^[a-zA-Z0-9_]{3,16}$/ /*This regex checks for usernames that are 3-16 characters long, consisting of letters, numbers, and underscores. */
}

// input image and file accept types

export const inputAcceptimages={
    pdf:"application/pdf, application/msword, text/plain",
    image:"image/png, image/jpeg, image/gif",
    image1:"image/*",
    bothimagepdf:"image/*,application/pdf",
    imageurl:"URL.createObjectURL()"

}


