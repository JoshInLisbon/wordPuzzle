import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    let n = 8;
    let words = ["stop", "healthy", "happy", "save", "breath"];
    let gridPositions = Array.from({length: n * n},(v,k)=>k+1);
    let map = [];

    // Directions & Resulting Positions

    const directions = [];
    // Horizontal
    directions.push(
      function horizontal(word, n) {
        console.log(`horizontal: ${word}`);
        let hSS = horizontalStartSpace(word, n);
        let start = hSS[Math.floor(Math.random() * hSS.length)];
        let letters = word.split('');
        let tempMap = [];
        let flag = false;
        letters.some(function (letter, i) {
          let num = start + i;
          // pushHealthyCoordinatesToTempMap(flag, num, letter, word, tempMap);
          console.log(`num: ${num}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if (num == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;     
            }
          });
          tempMap.push({num: num, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          tempMap.forEach(function (square) {
            delete gridPositions[square.num - 1];
          });
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )
    
    // Down Diagonal
    directions.push(
      function downDiagonal(word, n) {
        console.log(`downDiagonal: ${word}`);
        let ddSS = downDiagonalStartSpace(word, n);
        let start = ddSS[Math.floor(Math.random() * ddSS.length)];
        let letters = word.split('');
        let tempMap = [];
        let flag = false;
        letters.some(function (letter, i) {
          let num = start + i + n * i;
          console.log(`num: ${num}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if (num == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;     
            }
          });
          tempMap.push({num: num, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          tempMap.forEach(function (square) {
            delete gridPositions[square.num - 1];
          });
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )

    // Up Diagonal
    directions.push(
      function upDiagonal(word, n) {
        console.log(`upDiagonal: ${word}`);
        let udSS = upDiagonalStartSpace(word, n);
        let start = udSS[Math.floor(Math.random() * udSS.length)];
        let letters = word.split('');
        let tempMap = [];
        let flag = false;
        letters.some(function (letter, i) {
          let num = start + i - n * i;
          console.log(`num: ${num}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if (num == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true; 
            }
          });
          tempMap.push({num: num, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          tempMap.forEach(function (square) {
            delete gridPositions[square.num - 1];
          });
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )

    // Down
    directions.push(
      function down(word, n) {
        console.log(`down: ${word}`);
        let dSS = downStartSpace(word, n);
        let start = dSS[Math.floor(Math.random() * dSS.length)];
        let letters = word.split('');
        let tempMap = [];
        let flag = false;
        letters.some(function (letter, i) {
          let num = start + n * i;
          console.log(`num: ${num}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if (num == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;
            }
          });
          tempMap.push({num: num, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          tempMap.forEach(function (square) {
            delete gridPositions[square.num - 1];
          });
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )

    // Up
    directions.push(
      function up(word, n) {
        console.log(`up: ${word}`);
        let uSS = upStartSpace(word, n);
        let start = uSS[Math.floor(Math.random() * uSS.length)];
        let letters = word.split('');
        let tempMap = [];
        let flag = false;
        letters.some(function (letter, i) {
          let num = start - n * i;
          console.log(`num: ${num}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if (num == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;
            }
          });
          tempMap.push({num: num, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          tempMap.forEach(function (square) {
            delete gridPositions[square.num - 1];
          });
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )
    
    // Only Let Words Spawn In Acceptable Squares
    function horizontalStartSpace(word, n) {
      let startSpace = [];
      let rowSpace = n - word.length + 1;
      let nCount = 0;
      _.times(n, function() {
        let rsCount = 1;
        _.times(rowSpace, function() {
          startSpace.push(rsCount + n * nCount);
          rsCount += 1;
        });
        nCount += 1;
      });
      return startSpace;
    }

    function downDiagonalStartSpace(word, n) {
      let startSpace = [];
      let rowSpace = n - word.length + 1;
      let rs1Count = 0;
      _.times(rowSpace, function() {
        let rs2Count = 1;
        _.times(rowSpace, function() {
          startSpace.push(rs2Count + n * rs1Count);
          rs2Count += 1;
        });
        rs1Count += 1;
      });
      return startSpace;
    }

    function upDiagonalStartSpace(word, n) {
      let startSpace = [];
      let rowSpace = n - word.length + 1;

      let rs1Count = 0;
      _.times(rowSpace, function() {
        let rs2Count = 1;
        _.times(rowSpace, function() {
          startSpace.push(n * n - (n - (rs2Count - n * rs1Count)));
          rs2Count += 1;
        });
        rs1Count += 1;
      });
      return startSpace;
    }

    function downStartSpace(word, n) {
      let startSpace = [];
      let colSpace = n - word.length + 1;
      let csCount = 0;
      _.times(colSpace, function() {
        let nCount = 1;
        _.times(n, function() {
          startSpace.push(nCount + n * csCount)
          nCount += 1;
        });
        csCount += 1;
      });
      return startSpace;
    }

    function upStartSpace(word, n) {
      let startSpace = [];
      let colSpace = n - word.length + 1;
      let csCount = 0;
      _.times(colSpace, function() {
        let nCount = 1;
        _.times(n, function() {
          startSpace.push(n * n - (n - (nCount - n * csCount)))
          nCount += 1;
        });
        csCount += 1;
      });
      return startSpace;
    }

    // Build Layout
    
    function layout(words, n) {
      // Set grid position of letters in words
      words.forEach(function (word, i) {
        console.log(`*** NEW WORD: ${word} ***`);
        directions[Math.floor(Math.random() * directions.length)](word, n);
      });
      // Remove duplicates from map (where two words cross on the same letter)
      map = map.flat(Infinity);
      map = arrayUnique(map, 'num');
      // Randomly allocate rest of grid a random letter
      gridPositions.forEach(function (num) {
        let randLetter = String.fromCharCode(97+Math.floor(Math.random() * 26));
        map.push({num: num, letter: randLetter});
      });

      return map
    }

    // Add onlyUnique function for arrays
    function arrayUnique(arr, uniqueKey) {
      const flagList = []
      return arr.filter(function(item) {
        if (flagList.indexOf(item[uniqueKey]) === -1) {
          flagList.push(item[uniqueKey])
          return true
        }
      })
    }

    layout(words, n);
    console.table(map);
  }

}