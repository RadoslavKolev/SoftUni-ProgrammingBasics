function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let seconds = distance * timePerMeter;
    let bonusSeconds = Math.floor(distance / 15) * 12.5;

    let totalSeconds = seconds + bonusSeconds;

    if (totalSeconds < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSeconds - record).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(['10464', '1500', '20']);
worldSwimmingRecord(['55555.67', '3017', '5.03']);