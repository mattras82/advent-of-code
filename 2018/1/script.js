'use strict';

import Input from './input';

class Solutions {
    first() {
        let commands = Input.split('\n');
        let result = 0;
        commands.map((val) => {
            if (isNaN(parseInt(val))) return false;
            result += parseInt(val);
        });
        return Promise.resolve(result);
    }

    second() {
        let commands = Input.split('\n');
        let frequencies = [];
        let frequency = 0;
        let result = false;
        while (!result) {
            for (let i = 0; i < commands.length; i++) {
                let val = commands[i];
                if (isNaN(parseInt(val))) continue;
                if (typeof val !== 'number') {
                    val = parseInt(val);
                    commands[i] = val;
                }
                frequency += val;
                if (frequencies[frequency]) {
                    result = frequency;
                    break;
                }
                frequencies[frequency] = true;
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