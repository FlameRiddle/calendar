'use strict';
const background = document.getElementById('main');
const today = new Date();
const start = new Date('2023-03-20');
const elapsed = ((today - start)/(1000*60*60*24)) + 1;
const colors = ['#baffc9', '#ffffba', '	#ffdfba', '	#bae1ff'];

let month = (Math.floor(elapsed / 90)) % 4;
let year = Math.floor(elapsed / 360);
let monthday = (Math.floor(elapsed) % 90);

let current;
let weekdays;
let months;
let midday;
let lang;
let misclang;
let holiday;

function pad(u){
    switch(u){
        case('day'): document.getElementById("day").value = String(monthday).padStart(2, '0');break;
        case('month'): document.getElementById("month").value = String(month + 1).padStart(1, '0');break;
        case('year'): document.getElementById("year").value = String(year).padStart(4, '0');;break;
    }
}

console.log(Math.floor(elapsed));
console.log(Math.floor(elapsed) % 9);
console.log(Math.floor(elapsed / 90))

function en(){
    lang = "en";
    generate();
}
function es(){
    lang = "es";
    generate();
}
function pl(){
    lang = "pl";
    generate();
}

document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 39) {
        next()
    }else if (event.keyCode === 37) {
        prev()
    }
});

document.getElementById("day")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        monthday = +document.getElementById("day").value;
        month = +document.getElementById("month").value - 1;
        year = +document.getElementById("year").value;
        generate();
    }
});
document.getElementById("month")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        monthday = +document.getElementById("day").value;
        month = +document.getElementById("month").value - 1;
        year = +document.getElementById("year").value;
        generate();
    }
});
document.getElementById("year")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        monthday = +document.getElementById("day").value;
        month = +document.getElementById("month").value - 1;
        year = +document.getElementById("year").value;
        generate();
    }
});

function generate(){
    if(monthday >= 0 && monthday <= 89 && month >= 0 && month <= 3 && year >= 0 && year <= 9999 && Number.isInteger(monthday) == true && Number.isInteger(month) == true && Number.isInteger(year) == true){
        
        const weekday = monthday % 9;
        const alias = "" + month + monthday;
        const monthweek = Math.floor(monthday / 9) + 1
        
        switch(lang){
            case "en":
                if(monthweek % 2 == 0){
                    midday = 'X';
                }else{
                    midday = 'Wednesday';
                }
                weekdays = ['Preday', 'Sunday', 'Afterday', 'Thursday', midday, 'Frensday', 'Sixday', 'Tuesday', 'Friday'];
                months = ['Spring', 'Summer', 'Fall', 'Winter'];
                misclang = ["The World's Best Calendar", " day of ", "Year ", "The Awesomest Calendar", "Coming soon..."];
                switch(alias){
                    case "00": holiday= "Today is Spring's Birthday!"; break;
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
            ;break;
    
            case "es":
                if(monthweek % 2 == 0){
                    midday = 'X';
                }else{
                    midday = 'Miércoles';
                }
                weekdays = ['Anteminges', 'Dominges', 'Domipues', 'Jueves', midday, 'Miades', 'Sedíes', 'Martes', 'Viernes'];
                months = ['la Primavera', 'el Verano', 'el Otoño', 'el Invierno'];
                misclang = ["El Calendario Mejor", " día de ", "Año ", "El Calendario Cojonudísimo", "Muy pronto..."];
                switch(alias){
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
            ;break;
    
            case "pl":
                if(monthweek % 2 == 0){
                    midday = 'X';
                }else{
                    midday = 'Środek';
                }
                weekdays = ['Przedniedziałek', 'Niedziałek', 'Poniedziałek', 'Czwartek', midday, 'Śrobotek', 'Szóstek', 'Bortek', 'Piątek'];
                months = ['Wiosny', 'Lata', 'Jesieni', 'Zimy'];
                misclang = ["Najlepszy Kalendarz", " dzień ", "Rok ", "Najniesamowitszy Kalendarz", "Już wkrótce..."];
                switch(alias){
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
            ;break;
        }
        
        pad('day');
        pad('month');
        pad('year');
    
        output1.innerText = weekdays[weekday];
        document.title = misclang[0];
        output2.innerText = monthday + misclang[1] + months[month];
        output3.innerText = misclang[2] + year;
        headline.innerText = misclang[3];
        events.innerText = holiday;
        right.innerText = misclang[4];
    
        background.style.background = "linear-gradient(" + colors[month] + ", #ffffff), url('texture.png')";
    
        left.innerHTML = '';
        current = 0;
        for (let i=1; i <= 9; i++){
            if(current == weekday){
                left.innerHTML += "<div class='weekday' id='current'>" + weekdays[current] + "</div>";
            } else{
                left.innerHTML += "<div class='weekday'>" + weekdays[current] + "</div>";
            };
            ++current;
        };

    }else if(elapsed == 3600000){
        document.body.style.background = 'none';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.innerHTML = "<img src='assets/e.gif' style='display:block'></img>";
    }else{
        window.alert("Please insert correct date format");
    }
}

function next(){
    if(year == 9999 && month == 3 && monthday == 89){}else{
        if(monthday == 89 && month == 3){
            monthday = 0;
            month = 0;
            year++;
            pad('day');
            pad('month');
            pad('year');
            generate();
        }else{
            if(monthday == 89){
                monthday = 0;
                month++;
                pad('day');
                pad('month');
                generate();
            }else{
                monthday++;
                pad('day');
                generate();
            };
        }
    }
}
function prev(){
    if(year == 0 && month == 0 && monthday == 0){}else{
        if(monthday == 0 && month == 0){
            monthday = 89;
            month = 3;
            year--;
            pad('day');
            pad('month');
            pad('year');
            generate();
        }else{
            if(monthday == 0){
                monthday = 89;
                month--;
                pad('day');
                pad('month');
                generate();
            }else{
                monthday--;
                pad('day');
                generate();
            };
        }
    }
}
en();