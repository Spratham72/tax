// - File `` 
// - Should be able to calculate the tax based on the income and savings

// **Rules for tax calculations**
// - Below 2,50,000 no tax
// - Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
// - Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
// - Amount earned above 10,00,000 - 30% of the amount earned in this slab

// The rules for the rebate based on the savings is mentioned below
// - 50% of the savings amount can be deducted from the total income if the total income is below 5,00,000
// - 30% of the savings amount can be deducted from the total income if the total income is below 10,00,000
// - 10% of the savings amount can be deducted from the total income if the total income is above 10,00,000 the maximum cap of the deduction is 50,000
var tax=(amount)=>{
    let tax=0;
    if(amount<250000){
        return `No tax`
    }
    else if(amount>250000  && amount<500000){
        amount=amount-(amount*0.50);
        tax=0.10*amount;
        return tax;
    }
    else if(amount>500000  && amount<1000000){
        amount=amount-(amount*0.30);
        tax=0.20*amount;
        return tax;
    }
    else{
        amount=amount-50000;
        tax=0.30*amount;
        return tax;
    }
}

module.exports=tax;