import './mode.js'
import './loader.js'
import { aboutCountry } from "./function.js";
const container = document.querySelector("#container");

// BIROR CARDNI USTIGA BOSGANDA VA SEARCHDA DAVLAT NOMINI YOZIB ENTER TUGMASINI BOSGANDA SHU DAVLAT HAQIDA MA'LUMOT CHIQARADI
document.addEventListener("DOMContentLoaded", function() {
    let country = JSON.parse(localStorage.getItem("country"));
    let slug = window.location.href.substring(window.location.href.search("id=")+3);

    // USTIGA BOSGANDA 
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
        .then(res => res.json())
        .then(data => {
            if (slug == data.name.slug) {
                let tr = aboutCountry(data);
                container.innerHTML = tr;
            }
            if ( data.languages) {
                data.languages.forEach(item => {
                    const languages = document.querySelector("#languages");
                    languages.innerHTML += `${item} `;
                })
            }
            if ( data.borders) {
                data.borders.forEach(item => {
                    const borders = document.querySelector("#borders");
                    borders.innerHTML += `<span class="country-neighbour">${item.common}</span>`;
                })
            }
        })
        .catch(err => {
            console.log(err);
        })

    // SEARCHDA YOZIB ENTER TUGMASINI BOSGANDA 
    if (slug == country.data[0].name.slug) {
        let tr = aboutCountry(country.data[0]);
        container.innerHTML = tr;
    }
    if ( country.data[0].languages) {
        country.data[0].languages.forEach(item => {
            const languages = document.querySelector("#languages");
            languages.innerHTML += `${item} `;
        })
    }
    if ( country.data[0].borders) {
        country.data[0].borders.forEach(item => {
            const borders = document.querySelector("#borders");
            borders.innerHTML += `<span class="country-neighbour">${item.common}</span>`;
        })
    }

    console.log(country.data[0]);
});