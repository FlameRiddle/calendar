'use strict';
const background = document.getElementById('main');
const today = new Date();
const start = new Date('2023-02-14');
const elapsed = ((today - start) / (1000 * 60 * 60 * 24)) + 1;
const colors = ['#baffc9', '#ffffba', '	#ffdfba', '	#bae1ff'];
const charset = "ABCDEFGHI-JKLMNOPQR-STUVWXYZ&-";

let month = (Math.floor(elapsed / 90)) % 4;
let year = Math.floor(elapsed / 360);
let monthDay = (Math.floor(elapsed) % 90);
let lang, weekdays, months, midday, misclang, holiday, singlemonth;

// Function that pads inputs with zeros

function pad(u) {
    switch (u) {
        case ('day'): document.getElementById("day").value = String(monthDay).padStart(2, '0'); break;
        case ('month'): document.getElementById("month").value = String(month + 1).padStart(1, '0'); break;
        case ('year'): document.getElementById("year").value = String(year).padStart(4, '0'); break;
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

function next() {
    if (year == 9999 && month == 3 && monthDay == 89) { } else {
        if (monthDay == 89 && month == 3) {
            monthDay = 0;
            month = 0;
            year++;
            pad('day');
            pad('month');
            pad('year');
            generate();
        } else {
            if (monthDay == 89) {
                monthDay = 0;
                month++;
                pad('day');
                pad('month');
                generate();
            } else {
                monthDay++;
                pad('day');
                generate();
            };
        }
    }
}
function prev() {
    if (year == 0 && month == 0 && monthDay == 0) { } else {
        if (monthDay == 0 && month == 0) {
            monthDay = 89;
            month = 3;
            year--;
            pad('day');
            pad('month');
            pad('year');
            generate();
        } else {
            if (monthDay == 0) {
                monthDay = 89;
                month--;
                pad('day');
                pad('month');
                generate();
            } else {
                monthDay--;
                pad('day');
                generate();
            };
        }
    }
}

// Check browser language

const possibleLangs = ['pl', 'es']
if (possibleLangs.indexOf(navigator.language) >= 0) {
    lang = navigator.language
} else { lang = 'en' }

// Change languages

document.querySelectorAll('.lang').forEach(element => {
    element.addEventListener('click', () => {
        generate(element.id)
    })
});

// Changing the current date

function goTo() {
    monthDay = +document.getElementById("day").value;
    month = +document.getElementById("month").value - 1;
    year = +document.getElementById("year").value;
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

function generate(lang) {
    // Check if date format is correct
    if (monthDay >= 0 && monthDay <= 89 && month >= 0 && month <= 3 && year >= 0 && year <= 9999 && Number.isInteger(monthDay) == true && Number.isInteger(month) == true && Number.isInteger(year) == true) {

        const weekday = monthDay % 9;
        const monthweek = Math.floor(monthDay / 9) + 1
        const alias = "" + month + monthDay;

        switch (lang) {
            case "en":
                midday = 'Wednesday';
                weekdays = ['Preday', 'Sunday', 'Afterday', 'Thursday', midday, 'Frensday', 'Sixday', 'Tuesday', 'Friday'];
                singlemonth = ['Spring', 'Summer', 'Fall', 'Winter'];
                months = ['Spring', 'Summer', 'Fall', 'Winter'];
                misclang = ["The World's Best Calendar", " day of ", "Year ", "The Awesomest Calendar", "This silly little website was made by FlameRiddle", "Old look (might not work on most devices)", "Today is the nameday of"];
                switch (alias) {
                    case "00": holiday = "Today is Spring's Birthday!"; break;
                    case "023": holiday = "Today is Coner Day!"; break;
                    case "035": holiday = "Today is Home Hearth Day!"; break;
                    case "045": holiday = "Today is Spring's Name Day! Yippeee!!"; break;
                    case "071": holiday = "Today is Easter!!!"; break;
                    case "075": holiday = "Today is Sex Day!"; break;
                    case "076": holiday = "Today is Hip Hop Day!"; break;
                    case "089": holiday = "Today is Spring's Deathday...."; break;
                    case "10": holiday = "Today is Summer's Birthday!"; break;
                    case "145": holiday = "Today is Summer's Name Day! Yippeee!!"; break;
                    case "179": holiday = "Paul Dano."; break;
                    case "189": holiday = "Today is Summer's Deathday...."; break;
                    case "20": holiday = "Today is Falls's Birthday!"; break;
                    case "21": holiday = "Today is Harvest Festival!!"; break;
                    case "245": holiday = "Today is Fall's Name Day! Yippeee!!"; break;
                    case "289": holiday = "Today is Fall's Deathday...."; break;
                    case "30": holiday = "Today is Winter's Birthday!"; break;
                    case "345": holiday = "Today is Winter's Name Day! Yippeee!!"; break;
                    case "389": holiday = "Today is Winter's Deathday...."; break;
                    default: holiday = "Today there's no special events...";
                };
                ; break;

            case "es":
                midday = 'Miércoles';
                weekdays = ['Anteminges', 'Dominges', 'Domipues', 'Jueves', midday, 'Miades', 'Sedíes', 'Martes', 'Viernes'];
                singlemonth = ['Primavera', 'Verano', 'Otoño', 'Invierno']
                months = ['la Primavera', 'el Verano', 'el Otoño', 'el Invierno'];
                misclang = ["El Calendario Mejor", " día de ", "Año ", "El Calendario Cojonudísimo", "credits", "old", "nameday"];
                switch (alias) {
                    case "00": holiday = "Hoy tenemos el Cumpleaños de la Primavera!"; break;
                    case "023": holiday = "Hoy tenemos la Piñadilla!"; break;
                    case "035": holiday = "Hoy tenemos Día del Hogar!"; break;
                    case "045": holiday = "Hoy tenemos la Onomástica de la Primavera! Hurraa!!"; break;
                    case "071": holiday = "Hoy tenemos la Pascua!!!"; break;
                    case "075": holiday = "Hoy tenemos el Día de la sexo!"; break;
                    case "076": holiday = "Hoy tenemos el Día de la Hip Hop!"; break;
                    case "089": holiday = "Hoy tenemos el Día de la Muerte de la Primavera...."; break;
                    case "10": holiday = "Hoy tenemos el Cumpleaños de el Verano!"; break;
                    case "145": holiday = "Hoy tenemos la Onomástica de el Verano! Hurraa!!"; break;
                    case "179": holiday = "Paul Dano."; break;
                    case "189": holiday = "Hoy tenemos el Día de la Muerte de el Verano...."; break;
                    case "20": holiday = "Hoy tenemos el Cumpleaños de el Otoño!"; break;
                    case "21": holiday = "Hoy tenemos la Fiesta de la Recolección!!"; break;
                    case "245": holiday = "Hoy tenemos la Onomástica de el Otoño! Hurraa!!"; break;
                    case "289": holiday = "Hoy tenemos el Día de la Muerte de el Otoño...."; break;
                    case "30": holiday = "Hoy tenemos el Cumpleaños de el Invierno!"; break;
                    case "345": holiday = "Hoy tenemos la Onomástica de el Invierno! Hurraa!!"; break;
                    case "389": holiday = "Hoy tenemos el Día de la Muerte de el Invierno...."; break;
                    default: holiday = "Hoy no hay ningún evento especial...";
                }
                ; break;

            case "pl":
                midday = 'Środek';
                weekdays = ['Przedniedziałek', 'Niedziałek', 'Poniedziałek', 'Czwartek', midday, 'Śrobotek', 'Szóstek', 'Bortek', 'Piątek'];
                singlemonth = ['Wiosna', 'Lato', 'Jesień', 'Zima']
                months = ['Wiosny', 'Lata', 'Jesieni', 'Zimy'];
                misclang = ["Najlepszy Kalendarz", " dzień ", "Rok ", "Najniesamowitszy Kalendarz", "Ta głupiutka stronka została zrobiona przez FlameRiddle", "Stary wygląd (może nie działać na większości urządzeń)", "Dzisiaj imieniny"];
                switch (alias) {
                    case "00": holiday = "Dzisiaj Urodziny Wiosny!"; break;
                    case "023": holiday = "Dzisiaj Szyszkielniki!"; break;
                    case "035": holiday = "Dzisiaj Święto Domowego Ogniska!"; break;
                    case "045": holiday = "Dzisiaj Imieniny Wiosny! Hurraa!!"; break;
                    case "071": holiday = "Dzisiaj Wielkanoc!!!"; break;
                    case "075": holiday = "Dzisiaj Dzień Seksu!"; break;
                    case "076": holiday = "Dzisiaj Dzień Hip Hopu!"; break;
                    case "089": holiday = "Dzisiaj Dzień Śmierci Wiosny...."; break;
                    case "10": holiday = "Dzisiaj Urodziny Lata!"; break;
                    case "145": holiday = "Dzisiaj Imieniny Lata! Hurraa!!"; break;
                    case "179": holiday = "Paul Dano."; break;
                    case "189": holiday = "Dzisiaj Dzień Śmierci Lata...."; break;
                    case "20": holiday = "Dzisiaj Urodziny Jesieni!"; break;
                    case "21": holiday = "Dzisiaj Dożynki!!"; break;
                    case "245": holiday = "Dzisiaj Imieniny Jesieni! Hurraa!!"; break;
                    case "289": holiday = "Dzisiaj Dzień Śmierci Jesieni...."; break;
                    case "30": holiday = "Dzisiaj Urodziny Zimy!"; break;
                    case "345": holiday = "Dzisiaj Imieniny Zimy! Hurraa!!"; break;
                    case "389": holiday = "Dzisiaj Dzień Śmierci Zimy...."; break;
                    default: holiday = "Nie ma dziś szczególnych wydarzeń...";
                }
                ; break;
        }
        if (monthweek % 2 == 0) {
            midday = 'X';
        }

        pad('day');
        pad('month');
        pad('year');

        output1.innerText = weekdays[weekday];
        document.title = misclang[0];
        output2.innerText = monthDay + misclang[1] + months[month];
        output3.innerText = misclang[2] + year;
        headline.innerText = misclang[3];
        events.innerText = holiday;
        credits.innerText = misclang[4];
        old.innerText = misclang[5];
        output4.innerText = misclang[6];
        output5.innerText = charset.charAt(monthDay % 30);

        document.querySelectorAll('section').forEach(element => {
            element.style.background = "linear-gradient(" + colors[month] + ", #ffffff)";
        })

        /* possibly gonna fix at some point?

        const table = document.createElement("table");
        for (let i = 0; i < 10; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement("td");
                const value = i * 9 + j + 1;
                cell.textContent = value;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        document.querySelector('#calendar').appendChild(table);
        */

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

generate(lang)