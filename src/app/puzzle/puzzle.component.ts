import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {
  words = ["quit", "free", "health", "save", "strength"]
  n = 8

  constructor() {

    const map = [];
    const directions = [];

    directions.push(
      function horizontal(word, n) {
        let hdSS = horizAndDiagStartSpace(n, word)
        let start = hdSS[Math.floor(Math.random() * hdSS.length)];
        let letters = word.split('');
        let tempMap = []
        letters.forEach(function (letter, i) {
          console.log(`num: ${start + i}, letter: ${letter}`)
          map.forEach(function(square) {
            if(start + i == square.num && letter != square.letter) {
              layout(this.words, this.n);
            }
          });
          tempMap.push({num: start + i, letter: letter});
        });

        map.push(tempMap);
        console.log(`horizontal ${word}`);
      }
    )
    directions.push(
      function down(word) {
        console.log(`down ${word}`);
      }
    )
    
    let grid = Math.pow(this.n, 2)
    
    let n = this.n
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

    function horizAndDiagStartSpace(n, word) {
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
      console.log(startSpace);
      return startSpace;
    }

    layout(this.words, this.n)
    console.log(map.flat(Infinity));

  }

  ngOnInit() {
    
  }

  
  

}
