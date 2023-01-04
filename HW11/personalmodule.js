let currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function greetingUser(name) {
    let currentTime = currentDate.getHours();

    if (currentTime >= 23 && currentTime < 5) {
        return `Good night, ${name}`;
    } else if (currentTime >= 5 && currentTime < 11) {
        return `Good morning, ${name}`;
    } else if (currentTime >= 11 && currentTime < 17) {
        return `Good afternoon, ${name}`;
    } else if (currentTime >= 17 && currentTime < 23) {
        return `Good evening, ${name}`;
    }
}