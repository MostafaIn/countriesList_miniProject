"use strict"

const searchBar = document.querySelector(".searchBar");
const container = document.querySelector(".container");
const sortingList = document.querySelector(".sortingList");
const searchByAnyWord = document.querySelector(".searchByAnyWord");
const sortStartingWord = document.querySelector(".sortStartingWord");
const countryItems = document.querySelector(".countryItems");

// window.onload = (event) => {
//     // displayCountryList(country_list);
// }

// the sorting key do form A->Z and Z->A.
sortingList.addEventListener("click", function (e) {
    container.innerHTML = " ";
    const sortingIcon = document.querySelector('.fas');
    if (sortingIcon.className === 'fas fa-sort-alpha-down') {
        sortingIcon.setAttribute("class", "fas fa-sort-alpha-up");
        console.log('z => a');

        displayCountryList(country_list.reverse());
    } else {
        sortingIcon.setAttribute("class", "fas fa-sort-alpha-down");
        console.log('a => z');

        displayCountryList(country_list.sort());
    }
    e.preventDefault();
});

// this function make a colorfull box for every item of the array.
function colorBox() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

// with the help of this function I create a box bor every elements of the array.
function displayCountryList(arr) {
    const showArray = arr.forEach((country) => {
        const countryBox = document.createElement('div');
        countryBox.classList.add("countryBox"); // countryBox.setAttribute("class", "countryBox");
        countryBox.textContent = country;
        countryBox.style.backgroundColor = colorBox();
        container.appendChild(countryBox);
        countryItems.textContent = ` Total number of countries are ${arr.length}.`;
    })
    return showArray;
}



searchByAnyWord.addEventListener("click", function () {
     container.innerHTML = " ";
    searchBar.textContent = '';
    searchByAnyWord.setAttribute('style', 'font-weight: bolder; background-color: #7B2A01; color: white; ');
    sortStartingWord.setAttribute('style', 'font-weight: normal; background-color: #eee; color: black; ');
    searchBar.addEventListener('input', (e) => {
        container.innerHTML = '';
        const filtered = country_list.filter(c => c.toLowerCase().includes(searchBar.value.toLowerCase()));
        console.log(filtered);
        console.log(e.target.value);
        displayCountryList(filtered);
    });

});

sortStartingWord.addEventListener("click", function () {
     container.innerHTML = " ";
    searchBar.textContent = '';
    sortStartingWord.setAttribute('style', 'font-weight: bolder; background-color: #7B2A01; color: white; ');
    searchByAnyWord.setAttribute('style', 'font-weight: normal; background-color: #eee; color: black; ');
    searchBar.addEventListener('input', (e) => {
        container.innerHTML = '';
        const filtered = country_list.filter(c => c.toLowerCase().startsWith(searchBar.value.toLowerCase()));
        console.log(filtered);
        console.log(e.target.value);
        displayCountryList(filtered);
    });

});