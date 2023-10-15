'use strict';

// Import
import langlists from './lang.json' assert {type: 'json'}
const background = document.getElementById('main');
const output = document.querySelectorAll('.output')
const colors = ['#baffc9', '#ffffba', '	#ffdfba', '	#bae1ff', '#b0b7c2'];

const today = new Date();
const start = new Date('2023-03-20');
const elapsed = ((today - start) / (1000 * 60 * 60 * 24)) + 1;

const yearMonths = 4
const monthDays = 91
const monthWeeks = 10
const yearDays = yearMonths * monthDays
const weekDays = (monthDays - 1) / monthWeeks

let currentMonth = (Math.floor(elapsed / monthDays)) % yearMonths;
let currentYear = Math.floor(elapsed / yearDays);
let currentMonthDay = (Math.floor(elapsed) % monthDays);

// Function that pads inputs with zeros

function pad(u) {
    switch (u) {
        case ('day'): document.getElementById("day").value = String(currentMonthDay).padStart(2, '0'); break;
        case ('month'): document.getElementById("month").value = String(currentMonth + 1).padStart(1, '0'); break;
        case ('year'): document.getElementById("year").value = String(currentYear).padStart(4, '0'); break;
    }
}

// Switching days

document.body.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 39) {
        next()
    } else if (event.keyCode === 37) {
        prev()
    }
});
document.querySelector('#prev').addEventListener('click', () => {
    prev()
})
document.querySelector('#next').addEventListener('click', () => {
    next()
})

function next() {
    if (currentYear == 9999 && currentMonth == yearMonths - 1 && currentMonthDay == monthDays - 1) { } else {
        if (currentMonthDay == monthDays - 1 && currentMonth == yearMonths - 1) {
            currentMonthDay = 0;
            currentMonth = 0;
            currentYear++;
            pad('day');
            pad('month');
            pad('year');
            generate();
        } else {
            if (currentMonthDay == monthDays - 1) {
                currentMonthDay = 0;
                currentMonth++;
                pad('day');
                pad('month');
                generate();
            } else {
                currentMonthDay++;
                pad('day');
                generate();
            };
        }
    }
}
function prev() {
    if (currentYear == 0 && currentMonth == 0 && currentMonthDay == 0) { } else {
        if (currentMonthDay == 0 && currentMonth == 0) {
            currentMonthDay = monthDays - 1;
            currentMonth = yearMonths - 1;
            currentYear--;
            pad('day');
            pad('month');
            pad('year');
            generate();
        } else {
            if (currentMonthDay == 0) {
                currentMonthDay = monthDays - 1;
                currentMonth--;
                pad('day');
                pad('month');
                generate();
            } else {
                currentMonthDay--;
                pad('day');
                generate();
            };
        }
    }
}

// Check browser language

let lang;
const possibleLangs = ['pl', 'es']
if (possibleLangs.indexOf(navigator.language) >= 0) {
    lang = navigator.language
} else { lang = 'en' }

// Change languages

document.querySelectorAll('.lang').forEach(element => {
    element.addEventListener('click', () => {
        lang = element.id
        generate()
    })
});

// Changing the current date

function goTo() {
    currentMonthDay = +document.getElementById("day").value;
    currentMonth = +document.getElementById("month").value - 1;
    currentYear = +document.getElementById("year").value;
    generate();
}

document.querySelector('button').addEventListener('click', () => {
    goTo()
})
document.querySelectorAll('input').forEach(element => {
    element.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            goTo()
        }
    });
})

// Main function for generating everything
function generate() {
    // Check if date format is correct
    if (currentMonthDay >= 0 && currentMonthDay <= monthDays - 1 && currentMonth >= 0 && currentMonth <= yearMonths - 1 && currentYear >= 0 && currentYear <= 9999 && Number.isInteger(currentMonthDay) == true && Number.isInteger(currentMonth) == true && Number.isInteger(currentYear) == true) {

        const alias = "" + currentMonth + currentMonthDay;
        const currentWeekDay = (currentMonthDay % weekDays);
        const currentMonthWeek = Math.floor(currentMonthDay / weekDays) + 1;

        pad('day');
        pad('month');
        pad('year');
        
        // Display most text
        document.title = langlists.misclang[0][lang];
        output[0].innerText = langlists.misclang[1][lang];
        output[2].innerText = currentMonthDay + langlists.misclang[2][lang] + langlists.months[currentMonth][lang + 'form'];
        output[3].innerText = langlists.misclang[4][lang] + currentYear;
        output[5].innerText = langlists.misclang[5][lang];
        output[6].innerText = langlists.misclang[6][lang];
        // X, Days 0
        if(currentMonthWeek % 2 == 0 && currentWeekDay == 4){
            output[1].innerText = 'X';
        }else{
            output[1].innerText = langlists.weekdays[currentWeekDay][lang];
        };
        if (currentMonthDay == 0) {
            output[1].innerText = '';
            monthday.innerText = '0';
            document.querySelectorAll('section').forEach(element => {
                element.style.background = "url('../assets/img/texture.png'), linear-gradient(" + colors[4] + ", #ffffff)";
            });
        }

        // Background
        document.querySelectorAll('section').forEach(element => {
            element.style.background = "linear-gradient(" + colors[currentMonth] + ", #ffffff)";
            element.style.background = "url('../assets/img/texture.png'), linear-gradient(" + colors[currentMonth] + ", #ffffff)";
        });

        // Doomsday
    } else if (elapsed == 3600000) {
        document.body.style.background = 'none';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.innerHTML = "<img src='img/e.gif' style='display:block'></img>";

    } else {
        window.alert("Please insert correct date format");
    }
}

// Initial generation of all the elements
generate()