function userLogin(role) {

    if (role === "Admin") {
        let welcomeMessage = "Welcome Admin.";
        console.log(`Inside block -> ${welcomeMessage}`);
    }
    console.log(`Outside block -> ${welcomeMessage}`);
}

userLogin("Admin");