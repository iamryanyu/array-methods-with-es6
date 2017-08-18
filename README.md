<h1>Array Cardio with ES6 💪</h1>
<p>Exploring JS array methods - <span class="u-font-color-white">filter(), map(), sort() and reduce()</span>.</p>
<p>JS practice with <a href="http://javascript30.com" target="_blank">JavaScript30</a> by Wes Bos.</p>
<p>
  Updated code available from <a href="https://github.com/iamryanyu/js30-04-array-cardio-with-es6" target="_blank">GitHub (@iamryanyu)</a>
  or <a href="https://codepen.io/iamryanyu/pen/prajEp" target="_blank">CodePen (@iamryanyu).</a>
</p>
<h2>0. Sample data</h2>

```javascript
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
```

<h2>1. Array.prototype.filter()</h2>
<h3>🤔 Filter the list of inventors for those who were born in the 1500's.</h3>
<p>Code:</p>

```javascript
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.table(fifteen);
```

<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a></li>
</ul>

<h2>2. Array.prototype.map()</h2>
<h3>🤔 Give us an array of the inventor's first and last names.</h3>
<p>Code:</p>

```javascript
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(fullNames);
```

<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></li>
</ul>

<h2>3. Array.prototype.sort()</h2>
<h3>🤔 Sort the inventors by birthdate, oldest to youngest.</h3>
<p>Code (ES5):</p>

```javascript
const ordered = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
```

<p>Code (ES6):</p>

```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);
```

<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort</a></li>
  <li><a href="https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function">https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function</a></li>
</ul>

<h2>4. Array.prototype.reduce()</h2>
<h3>🤔 How many years did all the inventors live?</h3>
<p>Code (ES5):</p>

```javascript
var totalYears = 0;

for(var i = 0; i < inventors.length; i++) {
  totalYears += inventors[i].passed - inventors[i].year;
}
```

<p>Code (ES6):</p>

```javascript
const totalYears = inventors.reduce((sum, inventor) => {
  return sum + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
```

<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce</a></li>
</ul>

<h2>5. Sort Exercise</h2>
<h3>🤔 Sort the inventors by years lived.</h3>
<p>Code</p>

```javascript
const oldest = inventors.sort((a, b) => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;

  return lastInventor > nextInventor ? -1 : 1;
});

console.table(oldest);
```

<h2>6. Map &amp; Filter Exercise</h2>
<h3>🤔 Create a list of Boulevards in Paris that contain 'de' anywhere in the name from:</h3>
<p><a href="https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris">https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris</a></p>
<p>Code:</p>

```javascript
const category = document.querySelector('.mw-category');
const links = category.querySelectorAll('a');

const links = Array.from(document.querySelectorAll('.mw-category a'));

const links = [...document.querySelectorAll('.mw-category a')];
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));

console.log(de);
```

<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator</a></li>
  <li><a href="https://rainsoft.io/how-three-dots-changed-javascript/">https://rainsoft.io/how-three-dots-changed-javascript/</a></li>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes</a></li>
</ul>

<h2>7. Sort Exercise</h2>
<h3>🤔 Sort the people alphabetically by last name.</h3>
<p>Code</p>

```javascript
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');

  return aLast > bLast ? 1 : -1;
});

console.log(alpha);
```

<h2>8. Reduce Exercise</h2>
<h3>🤔 Sum up the instances of each of these.</h3>

```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
```

<p>Code</p>

```javascript
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }

  obj[item]++;

  return obj;
}, {});

console.log(transportation);
```
