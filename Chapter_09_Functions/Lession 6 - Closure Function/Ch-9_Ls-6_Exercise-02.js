function password_Attempt(max_Attempts) {
    const password = "Test@123";
    let attempts = 0;
    function try_Again(test_password) {
        if (attempts < max_Attempts) {
            if (test_password === password) {
                attempts++;
                return `Check-in successfully.`;
            }
            attempts++;
            return `Try again...`;
        }
        return `You have exceeded limit. Please try after some time.`;
    }
    return try_Again;
}

let auth = password_Attempt(3);
console.log(auth("Test123"));
console.log(auth("test@123"));
console.log(auth("Test@1235"));
console.log(auth("Test@123"));
