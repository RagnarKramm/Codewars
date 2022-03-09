function narcissistic(value) {
    let poweredBy = value.toString().length;
    let comparedValue = 0;
    Array.from(value.toString()).forEach(nr => {
        comparedValue += nr**poweredBy;
    });

    return comparedValue === value;
  }