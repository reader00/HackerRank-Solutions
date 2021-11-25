// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = new Date(dateString).toLocaleDateString(undefined, {
        weekday: 'long',
    });

    return dayName;
}
