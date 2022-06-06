function countHours(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let totalTimeToRead = totalPages / pagesPerHour;
    let hoursNeeded = totalTimeToRead / daysToRead;

    console.log(hoursNeeded);
}

countHours(['212', '20', '2']);
countHours(['432', '15', '4']);