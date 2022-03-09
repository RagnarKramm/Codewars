function sumFracts(l) {
    let totalDenominator = 1;
    let totalNumerator = 0;
    

    if (!l.length){
        return null;
    }
    
    l.forEach(number=> {
        totalDenominator *= number[1];
    })

    l.forEach(number=> {
        let numerator = number[0];
        let denominator = number[1];
        let multiplyer = totalDenominator / denominator;
        numerator = numerator * multiplyer;
        totalNumerator += numerator;
    })

    let commonDevisor = greatestCommonDivisor(totalNumerator, totalDenominator);
      
    totalNumerator = totalNumerator / commonDevisor;
    totalDenominator = totalDenominator / commonDevisor;

    if (totalNumerator % totalDenominator == 0){
        return totalNumerator / totalDenominator;
    }
    return [totalNumerator, totalDenominator];

  }

function greatestCommonDivisor(first, second) {
    if (second == 0){
        return first;
    }
    return greatestCommonDivisor(second, first % second);
}