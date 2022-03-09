function isValidWalk(walk) {
    let vertCoord = 0;
    let horCoord = 0;
    if (walk.length !== 10) {
        return false;
    }
    walk.forEach(direction => {
        switch (direction) {
            case "n":
                vertCoord++;
                break;
            case "s":
                vertCoord--;
                break;
            case "w":
                horCoord--;
                break;
            case "e":
                horCoord++;
                break;
            default:
                break;
        }
    });
    return (vertCoord === 0 && horCoord === 0);
  }