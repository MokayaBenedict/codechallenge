const myPayee = (monthlypay) => {

    if (mSalary <= 24000){
        return mSalary * (10/100);

    }
    else if (mSalary >= 24001 && mSalary <= 32333){
        return ((mSalary-24000) * 0.25) + (24000 * 0.1)
    }
    else if (mSalary >= 32334 && mSalary <= 500000){
        return ((mSalary - 32333) * 0.3) + (24000 * 0.1) +  (32333 * 0.25);
    }
    else if (mSalary >= 500001 && mSalary <= 800000){
        return ((mSalary - 500000) * 0.32) + (24000 * 0.1) + (500000 * 0.3);
    }
    else {
        return mSalary * 0.35;
    }

}


const nhifDeduction = (grossPay) => {

if (grossPay <= 5999){
    return 150;
}
else if (grossPay >= 6000 && grossPay <= 7999){
    return 300;
}
else if (grossPay >= 8000 && grossPay <= 11999){
    return 400;
}
}
console.log (nhifDeduction(5000));







