const people = [
    { name: 'masud', age: 18, gender: 'male' },
    { name: 'sadia', age: 15, gender: 'female' },
    { name: 'rakib', age: 25, gender: 'male' },
    { name: 'farzana', age: 22, gender: 'female' }
  ];
  
  const filteredNames = people.filter(person => person.gender !== 'female').map(person => person.name);
  
  