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
<script src="https://gist.github.com/iamryanyu/a67fe91c469f055b14f4bf64dbc8bcd3.js"></script>
<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a></li>
</ul>

<h2>2. Array.prototype.map()</h2>
<h3>🤔 Give us an array of the inventor's first and last names.</h3>
<p>Code:</p>
<script src="https://gist.github.com/iamryanyu/9522c15d4f9eab9d1d4d1809b6b7c8f5.js"></script>
<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></li>
</ul>

<h2>3. Array.prototype.sort()</h2>
<h3>🤔 Sort the inventors by birthdate, oldest to youngest.</h3>
<p>Code (ES5):</p>
<script src="https://gist.github.com/iamryanyu/6e8dbffbaad2d158069b34b44c0593eb.js"></script>
<p>Code (ES6):</p>
<script src="https://gist.github.com/iamryanyu/5da6837d12b4ccd162875e6ece434334.js"></script>
<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort</a></li>
  <li><a href="https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function">https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function</a></li>
</ul>

<h2>4. Array.prototype.reduce()</h2>
<h3>🤔 How many years did all the inventors live?</h3>
<p>Code (ES5):</p>
<script src="https://gist.github.com/iamryanyu/632133f374ffb5e5234a2cafaff0638a.js"></script>
<p>Code (ES6):</p>
<script src="https://gist.github.com/iamryanyu/dedb1d3777d893abdace7e254c621f5f.js"></script>
<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce</a></li>
</ul>

<h2>5. Sort Exercise</h2>
<h3>🤔 Sort the inventors by years lived.</h3>
<p>Code</p>
<script src="https://gist.github.com/iamryanyu/8eacb741bca1f21efe24becbd0d8a6e0.js"></script>

<h2>6. Map &amp; Filter Exercise</h2>
<h3>🤔 Create a list of Boulevards in Paris that contain 'de' anywhere in the name from:</h3>
<p><a href="https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris">https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris</a></p>
<p>Code:</p>
<script src="https://gist.github.com/iamryanyu/5c68c8cd1c9353de9c3c8d2ad2b7be26.js"></script>
<p>Resources:</p>
<ul>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator</a></li>
  <li><a href="https://rainsoft.io/how-three-dots-changed-javascript/">https://rainsoft.io/how-three-dots-changed-javascript/</a></li>
  <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes</a></li>
</ul>

<h2>7. Sort Exercise</h2>
<h3>🤔 Sort the people alphabetically by last name.</h3>
<p>Code</p>
<script src="https://gist.github.com/iamryanyu/3954152e73415a0f01756f64ce02ab73.js"></script>

<h2>8. Reduce Exercise</h2>
<h3>🤔 Sum up the instances of each of these.</h3>
<script src="https://gist.github.com/iamryanyu/696a1aa61019ad83d6262655f955efcf.js"></script>
<p>Code</p>
<script src="https://gist.github.com/iamryanyu/1e577680e0fcf2e90361e3c26eefe6cc.js"></script>

<center><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ryan-yu-brand.png" alt="Ryan Yu" /></center>
