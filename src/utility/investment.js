export function calculateInvestmentResult({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    durationInvestment,
}){
    const annualData =[];
    let investmentValue = initialInvestment;
    
    for(let i = 0; i < durationInvestment; i++){
        const interestEarnedYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedYear + annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
        });
        
    }
    return annualData;
}



export const formatter = new Intl.NumberFormat('en-US', {

    
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

});