'use strict';

import Input from './input';

class Solutions {
    first() {
        let two = 0;
        let three = 0;
        Input.split('\n').forEach((val) => {
            val = val.trim();
            let letters = {};
            let thisTwo = false;
            let thisThree = false;
            if (val.length > 0) {
                [...val].forEach((letter) => {
                    if (letters[letter]) {
                        letters[letter]++;
                    } else {
                        letters[letter] = 1;
                    }
                });
            }
            for (let l in letters) {
                if (letters.hasOwnProperty(l)) {
                    if (letters[l] === 2) thisTwo = true;
                    if (letters[l] === 3) thisThree = true;
                    if (thisTwo && thisThree) break;
                }
            }
            if (thisTwo) two++;
            if (thisThree) three++;
        });

        return Promise.resolve(two * three);
    }

    second() {
        let ids = Input.split('\n');
        let results = [];
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i];
            for (let x = i+1; x < ids.length; x++) {
                let compare = ids[x];
                let differences = 0;
                for (let s = 0; s < id.length; s++) {
                    if (id.charAt(s) !== compare.charAt(s)) differences++;
                    if (differences > 1) break;
                    if (s === id.length -1 && differences === 1) {
                        results.push(id);
                        results.push(compare);
                    }
                }
                if (results.length === 2) break;
            }
            if (results.length === 2) break;
        }
        let result = '';
        for (let s = 0; s < results[0].length; s++) {
            if (results[0].charAt(s) !== results[1].charAt(s)) {
                result = results[0].substr(0, s) + results[0].substr(s + 1);
            }
        }

        return Promise.resolve(result);
    }

    solve(problem) {
        return this[problem]();
    }
}

export default {
    Solutions
}