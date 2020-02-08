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

    const map = []
    const directions = []

    directions.push(
      function horizontal(word, n) {
        let start = Math.floor(Math.random() * (grid + 1));
        if (start + word.length > )
        let letters = word.split('');
        let tempMap = []
        letters.forEach(function (letter, i) {
          if ((start + i) % n === 0) {
            horizontal(word, n);
          }
          console.log(`num: ${start + i}, letter: ${letter}`)
          tempMap.push({num: start + i, letter: letter})
        });

        
       console.log(`horizontal ${word}`);
      }
    )
    directions.push(
      function down(word) {
        console.log(`down ${word}`);
      }
    )
    
    let grid = Math.pow(this.n, 2)
    let rhEdge = []
    _.times(this.n, function() {
      rhEdge.push();
    });

    function layout(words, n) {
      words.forEach(function (word, i) {
        // set location
  
        // set direction
        console.log(i)
        directions[Math.floor(Math.random() * directions.length)](word, n);
      });
    }

    layout(this.words, this.n)
    console.log(map.flat(Infinity));
  }

  ngOnInit() {
    
  }

  
  

}
