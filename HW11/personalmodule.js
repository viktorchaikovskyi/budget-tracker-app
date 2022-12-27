function greetingUser(name, response) {
    let message = '';
    let currentDate = new Date();
    let currentTime = currentDate.getHours();

    if (currentTime >= 23 && currentTime < 5) {
        message = 'Good night';
    } else if (currentTime >= 5 && currentTime < 11) {
        message = 'Good morning';
    } else if (currentTime >= 11 && currentTime < 17) {
        message = 'Good afternoon';
    } else if (currentTime >= 17 && currentTime < 23) {
        message = 'Good afternoon';
    }

    let res = response.write(
        `<p>Date of request: ${currentDate}</p>
<p>${message}, ${name}</p>`
    );

    return res;
}

module.exports = {greetingUser};