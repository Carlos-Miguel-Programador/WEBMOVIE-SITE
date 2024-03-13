/*function translation(search)
{
    fetch(`https://api.mymemory.translated.net/get?q=${search}&langpair=en|pt`)
    .then(r=> {return r.json()})
    .then(data=>{
        console.log(data);
    })
}*/

const key = '446fec02';

async function Publicidade(img, url, titulo, tipo, ano)
{
    var imagem = document.querySelector(img);

    reponse = await fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data = data.Search;

        data.map(element=>{
            if(element.Year == '2024' && element.Poster != 'N/A'){
                
                imagem.src = element.Poster;
                document.getElementById(titulo).innerHTML = element.Title;
                document.getElementById(ano).innerHTML = 'Data de lançamento: ' + (element.Year);

                if(element.Type == 'movie')
                {
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'filme';
                }
                else{
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'série';
                }
            }
            else if(element.Year == '2023' || element.Year == '2022-2023' && element.Poster != 'N/A'){
                
                imagem.src = element.Poster;
                document.getElementById(titulo).innerHTML = element.Title;
                document.getElementById(ano).innerHTML = 'Data de lançamento: ' + (element.Year);

                if(element.Type == 'movie')
                {
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'filme';
                }
                else{
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'série';
                }
            }
            else if(element.Year == '2022' && element.Poster != 'N/A'){
                
                imagem.src = element.Poster;
                document.getElementById(titulo).innerHTML = element.Title;
                document.getElementById(ano).innerHTML = 'Data de lançamento: ' + (element.Year);

                if(element.Type == 'movie')
                {
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'filme';
                }
                else{
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'série';
                }
            }
            else if(element.Year == '2021' && element.Poster != 'N/A'){
                
                imagem.src = element.Poster;
                document.getElementById(titulo).innerHTML = element.Title;
                document.getElementById(ano).innerHTML = 'Data de lançamento: ' + (element.Year);

                if(element.Type == 'movie')
                {
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'filme';
                }
                else{
                    document.getElementById(tipo).innerHTML = 'Tipo: ' + 'série';
                }
            }
        });
        
    });
}


Publicidade('#imagem1', `https://www.omdbapi.com/?s=Black%20Panther&page=1&apikey=${key}`, 'titulo-desc1', 'tipo-desc1', 'ano-desc1');
Publicidade('#imagem2', `https://www.omdbapi.com/?s=marvel&page=1&apikey=${key}`, 'titulo-desc2', 'tipo-desc2', 'ano-desc2');
Publicidade('#imagem3', `https://www.omdbapi.com/?s=terror&page=1&apikey=${key}`, 'titulo-desc3', 'tipo-desc3', 'ano-desc3');
Publicidade('#imagem4', `https://www.omdbapi.com/?s=jungle&page=1&apikey=${key}`, 'titulo-desc4', 'tipo-desc4', 'ano-desc4');
Publicidade("#imagem5", `https://www.omdbapi.com/?s=The%20Man%20from%20Toronto&page=1&apikey=${key}`, 'titulo-desc5', 'tipo-desc5', 'ano-desc5');
Publicidade('#imagem6', `https://www.omdbapi.com/?s=dragon&page=1&apikey=${key}`, 'titulo-desc6', 'tipo-desc6', 'ano-desc6');
Publicidade("#imagem7", `https://www.omdbapi.com/?s=doctor&page=1&apikey=${key}`, 'titulo-desc7', 'tipo-desc7', 'ano-desc7');
Publicidade("#imagem8", `https://www.omdbapi.com/?s=adam&apikey=${key}`, 'titulo-desc8', 'tipo-desc8', 'ano-desc8');
Publicidade("#imagem9", `https://www.omdbapi.com/?s=floresta&page=1&apikey=${key}`, 'titulo-desc9', 'tipo-desc9', 'ano-desc9');
Publicidade("#imagem10", `https://www.omdbapi.com/?s=spider%20man&page=1&apikey=${key}`, 'titulo-desc10', 'tipo-desc10', 'ano-desc10');
Publicidade("#imagem11", `https://www.omdbapi.com/?s=gigante&page=1&apikey=${key}`, 'titulo-desc11', 'tipo-desc11', 'ano-desc11');
Publicidade("#imagem12", `https://www.omdbapi.com/?s=miraculous&page=1&apikey=${key}`, 'titulo-desc12', 'tipo-desc12', 'ano-desc12');