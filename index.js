//const jsonfile = require('jsonfile');
import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';


//const moment = require('moment');
//const simpleGit = require('simple-git');
//const random = require('random');
import random from 'random';
const FILE_PATH = './data.json';

const makeCommit = n => {
    if(n===0) return simpleGit().push();
    const x = random.int(0,50);
    const y = random.int(0,6);
    const DATE = moment().subtract(1, 'y').add(1, 'd')
                    .add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE    
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
        makeCommit.bind(this, --n));        
    });

}

makeCommit(261)

"private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  
    "type": "module",
  
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "jsonfile": "^6.1.0",
    "moment": "^2.29.4",
    "morgan": "~1.9.1",
    "random": "^4.1.0",
    "simple-git": "^3.16.1"
  }
}