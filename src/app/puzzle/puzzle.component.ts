import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {
  words = ["quit", "free", "health", "save", "goal"]
  n = 8

  constructor() {

    const map = [];
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
          console.log(`num: ${start + i}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if(start + i == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;
            }
          });
          tempMap.push({num: start + i, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
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
          console.log(`num: ${start + i + n * i}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if(start + i == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;     
            }
          });
          tempMap.push({num: start + i + n * i, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
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
          console.log(`num: ${start + i - n * i}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if(start + i == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true; 
            }
          });
          tempMap.push({num: start + i - n * i, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
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
          console.log(`num: ${start + n * i}, letter: ${letter}`)
          map.flat(Infinity).some(function(square) {
            if(start + i == square.num && letter != square.letter) {
              directions[Math.floor(Math.random() * directions.length)](word, n);
              flag = true;
              return true;
            }
          });
          tempMap.push({num: start + n * i, letter: letter});
          return flag;
        });
        console.log(flag);
        if (flag == false) {
          map.push(tempMap);
          console.log(map.flat(Infinity));
        }
      }
    )
    
    let grid = Math.pow(this.n, 2)
    
    let n = this.n
    let words = this.words
    let rhEdge = [];
    let rhCount = 1;
    _.times(this.n, function() {
      rhEdge.push(n * rhCount);
      rhCount += 1;
    });

    let baseEdge = [];
    let baseCount = n - 1;
    _.times(this.n, function() {
      baseEdge.push(n * n - baseCount);
      baseCount -= 1;
    });

    console.log(rhEdge);
    console.log(baseEdge);
    function layout(words, n) {
      words.forEach(function (word, i) {
        // set location
  
        // set direction
        console.log(i)
        directions[Math.floor(Math.random() * directions.length)](word, n);
      });
    }


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

    layout(this.words, this.n)
    console.log(map.flat(Infinity));

  }

  ngOnInit() {
    
  }

  
  

}
