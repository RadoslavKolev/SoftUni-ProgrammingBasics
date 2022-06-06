function grades(input) {
    let students = Number(input[0]);

    let failedStudents = 0;
    let studentsWithGrade3 = 0;
    let studentsWithGrade4 = 0;
    let topStudents = 0;

    let totalGrades = 0;

    for (let i = 1; i <= students; i++) {
        let currentGrade = Number(input[i]);

        if (currentGrade >= 2.00 && currentGrade <= 2.99) {
            failedStudents++;
        } else if (currentGrade <= 3.99) {
            studentsWithGrade3++;
        } else if (currentGrade <= 4.99) {
            studentsWithGrade4++;
        } else {
            topStudents++;
        }

        totalGrades += currentGrade;
    }

    let failedPercentage = (failedStudents / students * 100).toFixed(2);
    let studentsWithGrade3Percentage = (studentsWithGrade3 / students * 100).toFixed(2);
    let studentsWithGrade4Percentage = (studentsWithGrade4 / students * 100).toFixed(2);
    let topStudentsPercentage = (topStudents / students * 100).toFixed(2);

    let averageGrade = (totalGrades / students).toFixed(2);

    console.log(`Top students: ${topStudentsPercentage}%`);
    console.log(`Between 4.00 and 4.99: ${studentsWithGrade4Percentage}%`);
    console.log(`Between 3.00 and 3.99: ${studentsWithGrade3Percentage}%`);
    console.log(`Fail: ${failedPercentage}%`);
    console.log(`Average: ${averageGrade}`);
}

grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);