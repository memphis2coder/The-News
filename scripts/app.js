const API_KEY = '88cbb71bd9c54332899953287b7b567e';
const urlT = `http://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=${API_KEY}`; // top news
const urlS = `http://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=6&apiKey=${API_KEY}`; // sports news
const urlE = `http://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=6&apiKey=${API_KEY}` // entertainment


// sports news
function sports() {
    fetch(urlS)
    .then((res) => res.json())
    .then((data) => {
        let sports = data.articles;
        console.log(sports);

        function sportTemplate(sport) {
            return `
            <hr>
                <div class=card>
                    <img src='${sport.urlToImage}'>
                    <p class='card-text' id='title'>${sport.title}</p>
                    <a href='${sport.url}' target='_blank'>read more</a>
                </div>
            `
        }
        document.getElementById('sports').innerHTML = `
            <h4 class='grid-title'>Sports</h4>
            ${sports.map(sportTemplate).join('')}
        `
    })
    .catch((err) => console.log(err))
};

// main news
async function main() {
    const response = await fetch(urlT);
    const data = await response.json();
    let top = data.articles;
    console.log(top);

    function topTemplate(top) {
        return `
        <hr>
            <div class=card>
                <img src='${top.urlToImage}'>
                <p class='card-text' id='title'>${top.title}</p>
                <a href='${top.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('top').innerHTML = `
        <h4 class='grid-title'>Top Stories</h4>
        ${top.map(topTemplate).join('')}
    `
};

// entertainment news
async function et() {
    const response = await fetch(urlE);
    const data = await response.json();
    let ent = data.articles;
    console.log(ent);

    function entTemplate(ent) {
        return `
        <hr>
            <div class=card>
                <img src='${ent.urlToImage}'>
                <p class='card-text' id='title'>${ent.title}</p>
                <a href='${ent.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('entertainment').innerHTML = `
        <h4 class='grid-title'>Entertainment</h4>
        ${ent.map(entTemplate).join('')}
    `
};

// show to the date 
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var show = month + "/" + day + "/" + year;

console.log(show);

document.getElementById('date').innerHTML = show;


sports();
main();
et();








