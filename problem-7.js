const isLeapYear = year => {
    const leap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    console.log(leap ? 'Happy New Year' : 'Not a Leap Year');
  };