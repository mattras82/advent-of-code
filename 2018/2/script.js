'use strict';

import Input from './input';

class Solutions {
    first() {
        let result = Input;
        return Promise.resolve(result);
    }

    second() {
        let result = Input;
        return Promise.resolve(result);
    }

    solve(problem) {
        return this[problem]();
    }
}

export default {
    Solutions
}