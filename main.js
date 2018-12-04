"use strict";

import solutions_2018 from './2018/solutions';

const solutions = {
    2018: solutions_2018
};

(function () {
    let $goButton = document.querySelector('#go'),
        $year = document.querySelector('#year'),
        $day = document.querySelector('#day'),
        $answerContainer = document.querySelector('.answer-container'),
        $answer = $answerContainer.querySelector('#answer');

    if ($year) {
        $year.value = new Date().getFullYear();
    }

    function goClick() {
        let year = $year.value,
            day = $day.value,
            problem = document.querySelector('[name="problem"]:checked').value;

        try {
            let solution = new solutions[year][day].Solutions();

            if (solution && solution.solve) {
                solution.solve(problem).then((result) => {
                    $answer.innerHTML = result;
                    $answerContainer.classList.add('show');
                });
            } else {
                alert('Something went wrong');
            }
        } catch(e) {
            console.log(e);
            alert('Incorrect input');
        }
    }

    $goButton.addEventListener('click', goClick);
})();