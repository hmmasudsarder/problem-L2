const cars = [
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2020 }
  ];
  
  const sortedCars = cars.sort((a, b) => a.year - b.year);

  