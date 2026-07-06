let country = "India";
function outer() {
    let state = "Gujarat";

    function inner() {
        let city = "Vadodara";
        console.log(city);
        console.log(state);
        console.log(country);
    }
    inner();
}
outer();