const API_KEY = '88cbb71bd9c54332899953287b7b567e';
const urlS = `http://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=1&apiKey=${API_KEY}`; // sports news
const urlBase = `http://newsapi.org/v2/everything?q=baseball&pageSize=4&apiKey=${API_KEY}` //baseball news
const urlFoot = `http://newsapi.org/v2/everything?q=football&pageSize=4&apiKey=${API_KEY}` // football news

// sports news
async function sports() {
    fetch(urlS)
    .then((res) => res.json())
    .then((data) => {
        let sports = data.articles;
        console.log(sports);
        var image = data.articles[0].urlToImage;
        var title = data.articles[0].title;
        var info = data.articles[0].description;
        var link = data.articles[0].url;
        
        document.getElementById('image').src = image;
        document.getElementById('title').innerHTML = title;
        document.getElementById('info').innerHTML = info;
        document.getElementById('link').href = link;
    })
    .catch((err) => console.log(err))
};

// baseball news
async function baseball() {
    fetch(urlBase)
    .then((res) => res.json())
    .then((data) => {
        let baseball = data.articles;
        console.log(baseball);

        function baseballTemplate(base) {
            return `
            
                <div class='card'>
                    <img src='${base.urlToImage}'>
                    <p class='card-text' id='title'>${base.title}</p>
                    <a href='${base.url}' target='_blank'>read more</a>
                </div>
                
            `
        }
        
        document.getElementById('grid').innerHTML = `
            ${baseball.map(baseballTemplate).join('')}
        `
    })
    .catch((err) => console.log(err))
}

// football news
async function football() {
    fetch(urlFoot)
    .then((res) => res.json())
    .then((data) => {
        let football = data.articles;
        console.log(football);

        function footballTemplate(foot) {
            return `
            
                <div class='card'>
                    <img src='${foot.urlToImage}'>
                    <p class='card-text' id='title'>${foot.title}</p>
                    <a href='${foot.url}' target='_blank'>read more</a>
                </div>
                
            `
        }
        
        document.getElementById('gridF').innerHTML = `
            ${football.map(footballTemplate).join('')}
        `
    })
    .catch((err) => console.log(err))
}

sports();
baseball();
football();

