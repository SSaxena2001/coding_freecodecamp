function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

const s = (...args) => {
  return args.reduce((sum, value) => (sum = sum + value));
};
console.log(s(6, 7, 8));

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.map((a) => {
    failureItems.push(`<li class="text-warning">${a}</li>`);
  });
  // Only change code above this line

  return failureItems;
}
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

console.log(makeList(result.failure));

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
// Only change code above this line

let users1 = {
  Alan: {},
  Jeff: {},
};
console.log(isEveryoneHere(users));

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      count = count + 1;
    }
  }
  return count;
  // Only change code above this line
}
console.log(countOnline(users));
console.log(
  countOnline({
    Alan: {
      online: false,
    },
    Jeff: {
      online: true,
    },
    Sarah: {
      online: false,
    },
  })
);

function findLongestWordLength(str) {
  let longest = str
    .split(" ")
    .map((s) => s.length)
    .sort((a, b) => a - b)
    .reverse();
  return longest[0];
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Open sesame", "sage"));

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return [];
  } else {
    let s = "";
    for (let i = 0; i < num; i++) {
      s = s + str;
    }
    return s;
  }
}

console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
  if (num < str.length) {
    return (
      str
        .split("")
        .filter((element, index) => index < num)
        .join("") + "..."
    );
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

function findElement(arr, func) {
  let num = 0;
  num = arr.filter((element) => func(element));
  return num[0];
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  localArr.splice();
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  let newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  var temp_list = [...bookList];
  var book_index = temp_list.indexOf(bookName);
  if (book_index >= 0) {
    temp_list.splice(book_index, 1);
    return temp_list;

    // Change code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

bookList;
newBookList;
newerBookList;
newestBookList;

// The global variable
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

var ratings = [];
ratings = watchList.map((movie) => {
  return {
    title: movie.Title,
    rating: movie.imdbRating,
  };
});
// watchList
ratings;
// Only change code above this line

console.log(JSON.stringify(ratings));

// The global variable
var s1 = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach((element) => {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  newArray;
  // Only change code above this line
  return newArray;
};

var new_s = s1.myFilter(function (item) {
  return item % 2 === 1;
});

function getRating(watchList) {
  // Only change code below this line
  var averageRating =
    watchList
      .filter((movie) => movie.Director === "Christopher Nolan")
      .map((film) => Number(film.imdbRating))
      .reduce((sum, rating) => sum + rating, 0) /
    watchList.filter((film) => film.Director === "Christopher Nolan").length;
  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList));

function splitify(str) {
  // Only change code below this line
  const s = str.split(/\W/);
  s;
  // Only change code above this line
}
splitify("Hello World,I-am code");

function urlSlug(title) {
  let result = title
    .toLowerCase()
    .split(" ")
    .filter((value) => value !== "")
    .join("-");
  result;
}
urlSlug(" Winter Is  Coming");

function destroyer(arr) {
  let args = [...arguments].slice(1);
  return arr.filter((item) => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  // Only change code below this line
  let keys = Object.keys(source);
  return collection.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  // Only change code above this line
}

whatIsInAName(
  [
    {
      first: "Romeo",
      last: "Montague",
    },
    {
      first: "Mercutio",
      last: null,
    },
    {
      first: "Tybalt",
      last: "Capulet",
    },
  ],
  {
    last: "Capulet",
  }
);

function translatePigLatin(str) {
  arr = str.split("");
  var s = null;
  if (["a", "e", "i", "o", "u"].includes(arr[0])) {
    s = str + "way";
  } else {
    s = arr.slice(1, arr.length).concat(arr[0]).concat(["a", "y"]).join("");
  }
  s;
  return s;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));

function myReplace(str, before, after) {
  if (before.match(/[A-Z]/)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
    after;
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"),
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);

function pairElement(str) {
  let stringArr = str.split("");
  var newArray = [];
  stringArr.map((value) => {
    if (value === "A") {
      newArray.push(["A", "T"]);
    } else if (value === "T") {
      newArray.push(["T", "A"]);
    } else if (value === "C") {
      newArray.push(["C", "G"]);
    } else {
      newArray.push(["G", "C"]);
    }
  });
  newArray;
  return newArray;
}

pairElement("ATCGA");

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("bcdf"));

function uniteUnique(arr) {
  let args = [...arguments];
  var resArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      resArr.push(args[i][j]);
    }
  }
  let temp_arr = [];
  resArr.map((value) => {
    if (!arr.includes(value)) {
      temp_arr.push(value);
    }
  });
  return [...arr, ...temp_arr];
}

console.log(
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
);

const a1 = (x) => (y) => (z) => x + y + z;
console.log(a1(10)(20)(30));

function sumFibs(num) {
  let a = 1,
    b = 1;
  let result = [b];
  if (num === 1) {
    return a;
  } else {
    for (let i = 1; i < num; i++) {
      result.push(b + a);
      a = b;
      b = result[i];
    }
  }
  return (
    result.reduce((sum, value) => {
      if (value <= num && value % 2 == 1) {
        return (sum += value);
      }
      return (sum += 0);
    }) + 1
  );
}
console.log(sumFibs(75024));

function sumPrimes(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0 && i > 1) {
      arr.push(i);
    }
  }
  return arr.reduce((sum, value) => sum + value);
}
console.log(sumPrimes(977));

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  }),
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

function binaryAgent(str) {
  let arr = str.split(" ");
  let newArr = arr.map((value) => {
    let temp = [];
    for (let i = 0; i < value.length; i++) {
      temp.push(Number(value[i]) * Math.pow(2, value.length - i - 1));
    }
    return temp;
  });
  return newArr
    .map((value) => {
      let sum = 0;
      for (let i = 0; i < value.length; i++) {
        sum += value[i];
      }
      return String.fromCharCode(sum);
    })
    .join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

function addTogether() {
  var args = Array.from(arguments);
  return args.some((n) => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : (n) => (typeof n === "number" ? n + args[0] : undefined);
}

addTogether(2, 3);

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((value) => {
    let temp = 0;
    temp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(value.avgAlt + earthRadius, 3) / GM)
    );
    delete value.avgAlt;
    value["orbitalPeriod"] = temp;
    return value;
  });
}

orbitalPeriod([
  {
    name: "sputnik",
    avgAlt: 35873.5553,
  },
]);
orbitalPeriod([
  {
    name: "iss",
    avgAlt: 413.6,
  },
  {
    name: "hubble",
    avgAlt: 556.7,
  },
  {
    name: "moon",
    avgAlt: 378632.553,
  },
]);

function sym(args) {
  let temp = [];
  let arg = Object.values(arguments);
  for (let i = 0; i < arg.length; i++) {
    // arg[i].map(value=>{
    //   temp.push(value);
    // });
    temp = [...temp, ...arg[i]];
  }
  let commonArr = temp.filter(
    (value, index, self) => self.indexOf(value) !== index
  );
  return temp
    .filter((value) => !commonArr.includes(value))
    .sort((a, b) => a - b);
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]));

function palindrome(str) {
  let arr = str
    .toLowerCase()
    .split("")
    .filter((value) => value.match(/[a-z0-9+]/g));
  arr;
  let revArr = str
    .toLowerCase()
    .split("")
    .filter((value) => value.match(/[a-z0-9+]/g))
    .reverse();
  revArr;
  let flag = [];
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] === revArr[i]) {
      flag.push(true);
    } else {
      flag.push(false);
    }
  }
  flag;
  return flag.every((value) => value == true);
}

console.log(palindrome(""));

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
console.log(romanize(152));

function rot13(str) {
  let arr = str.split("");
  let reg = /[A-Z]+/g;
  return arr
    .map((value) => {
      if (value.match(reg)) {
        if (value.match(/[A-M]/)) {
          return String.fromCharCode(value.charCodeAt() + 13);
        } else {
          return String.fromCharCode(value.charCodeAt() - 13);
        }
      } else {
        return value;
      }
    })
    .join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let totalCash = 0;
  let cidReverse = [...cid].reverse();
  let temp = [];
  let cashValue = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = {
    status: "",
    change: [],
  };

  cid.forEach((element) => {
    totalCash += element[1];
  });
  totalCash = parseFloat(totalCash.toFixed(2));

  function cashUnit(unit, index) {
    let unitTotal = cidReverse[index][1];
    let amount = Math.floor(change / cashValue[unit]) * cashValue[unit];
    if (unitTotal > 0) {
      if (unitTotal >= amount) {
        change -= amount;
        change = parseFloat(change.toFixed(2));
        return amount;
      } else {
        change -= unitTotal;
        change = parseFloat(change.toFixed(2));
        return unitTotal;
      }
    } else {
      return 0;
    }
  }

  function getChange() {
    let changeOwed = cash - price;
    for (let [index, value] of cidReverse.entries()) {
      let changeGotten = cashUnit(value[0], index);
      if (changeGotten > 0) {
        temp.push([value[0], changeGotten]);
      }
      if (change === 0) {
        break;
      }
    }
    if (totalCash < changeOwed || change !== 0) {
      changeDue.status = "INSUFFICIENT_FUNDS";
    } else if (totalCash == changeOwed) {
      changeDue.status = "CLOSED";
      changeDue.change = [...cid];
    } else {
      changeDue.status = "OPEN";
      changeDue.change = [...temp];
    }
  }

  getChange();
  return changeDue;
}
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

function updateInventory(arr1, arr2) {
  let common_values = [];
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);

function countingValleys(steps, path) {
  // Write your code here
  let arr = path.split("");
  let temp = [];
  let sum = 0,
    count = 0;
  arr.map((value) => {
    if (value === "D") {
      sum += -1;
    }
    if (value === "U") {
      sum += 1;
    }
    temp.push(sum);
  });
  for (let i = 0; i < steps; i++) {
    if (temp[i] === 0) {
      if (temp[i - 1] < 0) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(countingValleys(8, "DDUUUUDD"));

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let temp_arr = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      temp_arr.push(keyboards[i] + drives[j]);
    }
  }
  temp_arr = temp_arr.filter((value) => value <= b).sort((a, b) => b - a);
  if (temp_arr.length === 0) {
    return -1;
  }
  return temp_arr[0];
}

console.log(getMoneySpent([4], [5], 5));

function catAndMouse(x, y, z) {
  diff_A = z > x ? z - x : x - z;
  diff_B = z > y ? z - y : y - z;
  if (diff_A === diff_B) {
    return "Mouse C";
  } else if (diff_A > diff_B) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}
console.log(catAndMouse(1, 3, 2));

function formingMagicSquare(s) {
  // Write your code here
  const squares = [
    "618753294",
    "816357492",
    "834159672",
    "438951276",
    "672159834",
    "276951438",
    "294753618",
    "492357816",
  ];
  let min = 100;
  let cost = (s, squares) => {
    return [...s.map((value) => value.join("")).join("")].reduce(
      (target, item, index) => {
        target += Math.abs(+item - +squares[index]);
        return target;
      },
      0
    );
  };

  squares.forEach((item, index) => {
    let value = cost(s, squares[index]);

    value < min && (min = value);
  });

  return min;
}
console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);

function makeString(s) {
  return s
    .split(" ")
    .map((val) => val.split("")[0])
    .join("");
}

console.log(makeString("sees eyes xray yoat"));

function rotLeft(a, d) {
  let firstElem = a.shift();
  if (d === 1) return [...a, firstElem];
  a = [...a, firstElem];
  return rotLeft(a, d - 1);
}
console.log(rotLeft([1, 2, 3, 4, 5], 4));

function revStr(str) {
  let arr = str.split("");
  let tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr.push(arr[i]);
  }
  return tempArr.join("");
}
console.log(revStr("Suvi is a moron"));

function sockMerchant(n, ar) {
  let counts = {};
  ar.forEach((val) => {
    counts[val] = (counts[val] || 0) + 1;
  });
  return Object.values(counts).reduce(
    (sum, value) => sum + Math.floor(value / 2),
    0
  );
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

function stripProperty(obj, prop) {
  // write your code here
  const keys = Object.keys(obj);
  if (keys.includes(prop)) {
    delete obj[prop];
    return obj;
  } else {
    return obj;
  }
}

console.log(stripProperty({ foo: 2, bar: 3, baz: 4 }, "foo"));

function repeatedString(s, n) {
  if (s === "a") {
    return n;
  } else if (s.length === 1 || !s.split("").includes("a")) {
    return 0;
  }
  let flag = true;
  for (let i = 1; i <= n; i++) {
    s = s.concat(s);
  }
  s = s.slice(0, n);
  return s.split("").reduce((sum, val) => (val === "a" ? sum + 1 : sum), 0);
}
console.log(repeatedString("aba", 10));

function sumOfIntegersInString(s) {
  let matches = s.match(/\d+/g);
  if (matches) {
    return matches.reduce((sum, value) => sum + Number(value), 0);
  } else return 0;
}

console.log(
  sumOfIntegersInString("h3ll0w0rld"),
  sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."),
  sumOfIntegersInString("Dogs are our best friends.")
);

function lastSurvivor(letters, coords) {
  if (coords.length < 1) return letters;
  else {
    letters = letters
      .split("")
      .filter((val, index) => index !== coords[0])
      .join("");
  }
  return lastSurvivor(letters, coords.splice(1));
}

console.log(
  lastSurvivor("abc", [1, 1]),
  lastSurvivor("c", []),
  lastSurvivor("zbk", [2, 1]),
  lastSurvivor(
    "foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr",
    [
      8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23,
      56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55,
      24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39,
      36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7,
      0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1,
    ]
  )
);
function scale(strng, k, n) {
  if (strng.trim() === "") {
    return strng;
  }
  const eachLine = strng.split("\n").map((val) =>
    val
      .split("")
      .map((v) => v.repeat(k))
      .join("")
  );
  for (let i = 0; i < eachLine.length; i++) {
    eachLine[i] = (eachLine[i] + "\n").repeat(n);
  }
  var lastIndex = eachLine[eachLine.length - 1].lastIndexOf("\n");
  eachLine[eachLine.length - 1] = eachLine[eachLine.length - 1].substring(
    0,
    lastIndex
  );
  return eachLine;
}
console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3));

const isStrobogrammatic = (num) => {
  const map = new Map([
    ["6", "9"],
    ["9", "6"],
    ["0", "0"],
    ["1", "1"],
    ["8", "8"],
  ]);

  for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
    if (!map.has(num[i]) || map.get(num[i]) !== num[j]) {
      return false;
    }
  }

  return true;
};

function solve(x, y) {
  let count = 0;
  for (let i = x; i < y; i++) {
    if (isStrobogrammatic(String(i))) {
      count += 1;
    }
  }
  return count;
}

console.log(solve(10000, 15000));

var romanToInt = function (s) {
  const romanDict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return s.split("").reduce((sum, val, index, s) => {
    if (
      index !== 0 &&
      ["I", "X", "C"].includes(s[index - 1]) &&
      ["V", "X", "L", "C", "D", "M"].includes(val)
    ) {
      return sum - 2 * romanDict[s[index - 1]] + romanDict[val];
    } else {
      return sum + romanDict[val];
    }
  }, 0);
};

console.log(romanToInt("DCXXI"));

function roman_to_Int(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
