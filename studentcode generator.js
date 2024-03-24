const { readlink } = require('fs');

function calculategrade(marks){
    if(marks>79 && marks<=100){
        return "A";
    }
    else if (marks>=60 && marks <=79){
        return "B";
    }
    else if (marks>49 && marks<59){
        return "C";
    }
    else if (marks>=40 && marks<=49){
        return "D"
    }
    else {
        return "E"
    }
 
}
function main (){
    const readline =require ('readline').createInterface({
    });
    readline.question("Enter the student`s mark:" ,(mark) => {
        mark = parseInt(mark);
        if (!isNaN (mark) && mark >=0 && mark <=100) {
            const grade =calculategrade(mark);
            console.log ("Please enter a valid mark from 0 and 100.")
        }
        readline.close()

    })
}