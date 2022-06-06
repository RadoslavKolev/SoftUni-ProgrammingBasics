function footballLeague(input) {
   let stadiumCapacity = Number(input[0]);
   let totalFans = Number(input[1]); 

   let counterA = 0;
   let counterB = 0;
   let counterV = 0;
   let counterG = 0;

   for (let i = 2; i <= totalFans + 1; i++) {
        let currentSector = input[i];

        switch(currentSector) {
            case 'A':
                counterA++;
                break;
            case 'B':
                counterB++;
                break;
            case 'V':
                counterV++;
                break;
            case 'G':
                counterG++;
                break;
            default:
                console.log(`No such sector in the stadium!`);
        }
   }

   let percentageA = (counterA / totalFans * 100).toFixed(2);
   let percentageB = (counterB / totalFans * 100).toFixed(2);
   let percentageV = (counterV / totalFans * 100).toFixed(2);
   let percentageG = (counterG / totalFans * 100).toFixed(2);

   let percentageFans = (totalFans / stadiumCapacity * 100).toFixed(2);

   console.log(`${percentageA}%`);
   console.log(`${percentageB}%`);
   console.log(`${percentageV}%`);
   console.log(`${percentageG}%`);
   console.log(`${percentageFans}%`);
}

footballLeague([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);