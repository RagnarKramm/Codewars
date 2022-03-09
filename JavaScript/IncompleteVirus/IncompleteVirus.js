function incompleteVirus(n) {
    let binaryCount = 0;
    let rank = n.length - 1;

    binaryCount = 2**rank;
    
    for (var i = 0; i < n.length; i++) {
        let rankNr = parseInt(n[i]);
        
        if (i === 0 && rankNr > 1) {
            while (rank > 0) {
                rank--;
                binaryCount += 2**(rank);
            }
            return binaryCount;
        } 
        if (i === 0) {
            continue;
        }

        if(rankNr === 0){
            rank--;
        } else if (rankNr === 1){
            rank--;
            binaryCount += 2**(rank);
            
        } else {
            while (rank > 0) {
                rank--;
                binaryCount += 2**(rank);
            }
            return binaryCount;
        }

      }
    return binaryCount;
  }