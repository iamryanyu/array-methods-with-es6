((() => {
  // Some data we can work with

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // 🤔 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

  console.table(fifteen);

  // Array.prototype.map()
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // 🤔 2. Give us an array of the inventor first and last names
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

  console.log(fullNames);

  // Array.prototype.sort()
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function
  // 🤔 3. Sort the inventors by birthdate, oldest to youngest
  // const ordered = inventors.sort(function(a, b) {
  //   if (a.year > b.year) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

  console.table(ordered);

  // Array.prototype.reduce()
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // 🤔 4. How many years did all the inventors live?
  // var totalYears = 0;
  //
  // for(var i = 0; i < inventors.length; i++) {
  //   totalYears += inventors[i].passed - inventors[i].year;
  // }

  const totalYears = inventors.reduce((sum, inventor) => {
    return sum + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);

  // 🤔 5. Sort the inventors by years lived
  const oldest = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;

    return lastInventor > nextInventor ? -1 : 1;
  });

  console.table(oldest);

  // 🤔 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // const category = document.querySelector('.mw-category');
  // const links = category.querySelectorAll('a');

  // const links = Array.from(document.querySelectorAll('.mw-category a'));
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator
  // https://rainsoft.io/how-three-dots-changed-javascript/

  // const links = [...document.querySelectorAll('.mw-category a')];
  // // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  // const de = links
  //             .map(link => link.textContent)
  //             .filter(streetName => streetName.includes('de'));
  //
  // console.log(de);

  // 7. sort Exercise
  // 🤔 Sort the people alphabetically by last name
  const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');

    return aLast > bLast ? 1 : -1;
  });

  console.log(alpha);

  // 8. Reduce Exercise
  // 🤔 Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

  const transportation = data.reduce((obj, item) => {

    if (!obj[item]) {
      obj[item] = 0;
    }

    obj[item]++;

    return obj;
  }, {});

  console.log(transportation);

  // More sample data
  const students = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Array.prototype.some()
  // 🤔 9. Is at least one student 19?
  const isAdult = students.some(student => {
    const currentYear = (new Date()).getFullYear();

    return currentYear - student.year >= 19;
  });

  console.log(isAdult);

  // Array.prototype.every()
  // 🤔 10. Is everyone 19?
  const allAdults = students.every(student => {
    const currentYear = (new Date()).getFullYear();

    return currentYear - student.year >= 19;
  });

  console.log(allAdults);

  // Array.prototype.find()
  // 🤔 11. Find the comment with the ID of 823423
  const comment = comments.find(comment => comment.id === 823423);

  console.log(comment);

  // Array.prototype.findIndex()
  // 🤔 12. Find and delete the comment with the ID of 823423
  const index = comments.findIndex(comment => comment.id === 823423);

  // comments.splice(index, 1);

  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ];

  console.table(comments);
  console.table(newComments);

}))();
