const API_KEY = '88cbb71bd9c54332899953287b7b567e';
const urlE = `http://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=6&apiKey=${API_KEY}` // entertainment
const urlM = `http://newsapi.org/v2/everything?q=movies&pageSize=4&apiKey=${API_KEY}`

// entertainment news
async function et() {
    const response = await fetch(urlE);
    const data = await response.json();
    let ent = data.articles;
    //console.log(ent);

        var image = data.articles[0].urlToImage;
        var title = data.articles[0].title;
        var info = data.articles[0].description;
        var link = data.articles[0].url;
        
        document.getElementById('image').src = image;
        document.getElementById('title').innerHTML = title;
        document.getElementById('info').innerHTML = info;
        document.getElementById('link').href = link;

    // function entTemplate(ent) {
    //     return `
    //     <hr>
    //         <div class=card>
    //             <img src='${ent.urlToImage}'>
    //             <p class='card-text' id='title'>${ent.title}</p>
    //             <a href='${ent.url}' target='_blank'>read more</a>
    //         </div>
    //     `
    // }

    // document.getElementById('movies').innerHTML = `
    //     ${ent.map(entTemplate).join('')}
    // `
};

// movies section
async function movies() {
    const response = await fetch(urlM);
    const data = await response.json();
    var movie = data.articles;
    console.log(data)

    function moviesTemplate(movie) {
        return `
        
            <div class=card>
                <img src='${movie.urlToImage}'>
                <p class='card-text' id='title'>${movie.title}</p>
                <a href='${movie.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('grid').innerHTML = `
        ${movie.map(moviesTemplate).join('')}
    `
}

et();
movies();