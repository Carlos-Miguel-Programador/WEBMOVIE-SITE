const search     = document.querySelector('.search');
const btn        = document.querySelector('.btn-buscar');
const AllSection = document.querySelectorAll('section');


async function B4_SEARCH()
{
    Clear();

    try {
        document.body.removeChild(document.querySelector('body #control'))
    } catch (error) {
        
    }

    const wait = document.createElement('address');
    wait.setAttribute('class', 'wait')
    wait.innerHTML = 'Aguarde...';
    wait.style = 'margin-top: 5%'
    document.body.appendChild(wait);

    await fetch(`https://www.omdbapi.com/?s=${search.value}&page=${4}&apikey=446fec02`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(data.Error == 'Movie not found!')
        {
            const h1 = document.createElement('address')
            h1.style = 'text-align: center; width:100%; margin-top: 5%'
            h1.innerHTML = 'Nenhum resultado encontrado!!!';

            document.body.appendChild(h1);

            document.body.removeChild(document.querySelector('body .wait'));
        }
        else if(search.value != '' && data.Error != 'Movie not found!')
        {
            let size = data.Search.length;
            
            Listar(0, size, data);
            Listar(4, size, data);
            Listar(8, size, data);

            document.body.removeChild(document.querySelector('body .wait'));

            const tam = document.querySelectorAll('section').length;

            document.querySelectorAll('section')[tam-1].style = 'margin-bottom: 8%';

                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                document.querySelector('.b2').disabled;
                document.querySelector('.b1').onclick = B3_SEARCH;
            


        }
    })
    .catch(()=>{
        const address = document.createElement('address');

        address.style = 'text-align: center; width:100%; margin-top: 5%'
        address.innerHTML = 'Nenhum resultado encontrado!!!';

        document.body.appendChild(address);

        document.body.removeChild(document.querySelector('body address'));
    })
}

async function B3_SEARCH()
{
    Clear();

    try {
        document.body.removeChild(document.querySelector('body #control'))
    } catch (error) {
        
    }

    const wait = document.createElement('address');
    wait.setAttribute('class', 'wait')
    wait.innerHTML = 'Aguarde...';
    wait.style = 'margin-top: 5%'
    document.body.appendChild(wait);

    await fetch(`https://www.omdbapi.com/?s=${search.value}&page=${3}&apikey=446fec02`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(data.Error == 'Movie not found!')
        {
            const h1 = document.createElement('address')
            h1.style = 'text-align: center; width:100%; margin-top: 5%'
            h1.innerHTML = 'Nenhum resultado encontrado!!!';

            document.body.appendChild(h1);

            document.body.removeChild(document.querySelector('body .wait'));
        }
        else if(search.value != '' && data.Error != 'Movie not found!')
        {
            let size = data.Search.length;
            let result = data.totalResults;
            
            Listar(0, size, data);
            Listar(4, size, data);
            Listar(8, size, data);

            document.body.removeChild(document.querySelector('body .wait'));

            const tam = document.querySelectorAll('section').length;

            document.querySelectorAll('section')[tam-1].style = 'margin-bottom: 8%';

            if(result >= 20)
            {
                contador=2;

                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                
                document.querySelector('.b2').onclick = B4_SEARCH;
                document.querySelector('.b1').onclick = B2_SEARCH;
            }else{
                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                
                document.querySelector('.b2').disabled;
                document.querySelector('.b1').onclick = B2_SEARCH;
            }


        }
    })
    .catch(()=>{
        const address = document.createElement('address');

        address.style = 'text-align: center; width:100%; margin-top: 5%'
        address.innerHTML = 'Nenhum resultado encontrado!!!';

        document.body.appendChild(address);

        document.body.removeChild(document.querySelector('body address'));
    })
    
}


async function B2_SEARCH()
{
    Clear();

    try {
        document.body.removeChild(document.querySelector('body #control'))
    } catch (error) {
        
    }

    const wait = document.createElement('address');
    wait.setAttribute('class', 'wait')
    wait.innerHTML = 'Aguarde...';
    wait.style = 'margin-top: 5%'
    document.body.appendChild(wait);

    await fetch(`https://www.omdbapi.com/?s=${search.value}&page=${2}&apikey=446fec02`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(data.Error == 'Movie not found!')
        {
            const h1 = document.createElement('address')
            h1.style = 'text-align: center; width:100%; margin-top: 5%'
            h1.innerHTML = 'Nenhum resultado encontrado!!!';

            document.body.appendChild(h1);

            document.body.removeChild(document.querySelector('body .wait'));
        }
        else if(search.value != '' && data.Error != 'Movie not found!')
        {
            let size = data.Search.length;
            let result = data.totalResults;
            
            Listar(0, size, data);
            Listar(4, size, data);
            Listar(8, size, data);
            
            document.body.removeChild(document.querySelector('body .wait'));

            const tam = document.querySelectorAll('section').length;

            document.querySelectorAll('section')[tam-1].style = 'margin-bottom: 8%';

            if(result >= 20)
            {
                contador=2;

                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                
                document.querySelector('.b2').onclick = B3_SEARCH;
                document.querySelector('.b1').onclick = Search;
            }else{
                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                
                document.querySelector('.b2').disabled;
                document.querySelector('.b1').onclick = Search;
            }


        }
    })
    .catch(()=>{
        const address = document.createElement('address');

        address.style = 'text-align: center; width:100%; margin-top: 5%'
        address.innerHTML = 'Nenhum resultado encontrado!!!';

        document.body.appendChild(address);

        document.body.removeChild(document.querySelector('body address'));
    })
    
}
//FUNÇÃO RESPONSÁVEL POR LISTAR OS ELEMENTOS NO BODY

async function Listar(init, last, data){
    const section = document.createElement('section');
            for(let count=init; count<last; count++)
            {
                try{
                    const div     = document.createElement('div');
                    const img     = document.createElement('img');
                    const date    = document.createElement('p');
                    const type    = document.createElement('p');
                    const title   = document.createElement('h3');
                    const idIMDB  = document.createElement('p');
                    idIMDB.setAttribute('class', 'id');

                    type.setAttribute('class', 'type');
                    
                    if (data.Search[count].Poster == 'N/A') {
                        continue;
                    }else{
                        img.src = data.Search[count].Poster;
                        div.appendChild(img);
                    }                   
                    date.innerHTML  = data.Search[count].Year;

                    idIMDB.innerHTML = ('IMDB <br>'+data.Search[count].imdbID)

                    if(data.Search[count].Title.length <= 42)
                    {
                        title.innerHTML = data.Search[count].Title;
                    }else{
                        title.innerHTML = data.Search[count].Title.substring(0, 42) + '...';
                    }
                    

                    if(data.Search[count].Type == 'movie')
                    {
                        type.innerHTML  = 'F';
                    }else{
                        type.innerHTML  = 'S'
                    }
                
                    div.appendChild(date);
                    div.appendChild(type);
                    div.appendChild(title);
                    div.appendChild(idIMDB);
                
                    section.appendChild(div);
                
                    document.body.appendChild(section)
                    
                    
                    if(section.children.length == 4)
                    {
                        break;
                    }
                }catch{
                    console.log('Err');
                    break
                }
                
            }
}

//FUNÇÃO RESPONSÁVEL POR LIMPAR OS ELEMENTOS ANTERIOR DO BODY

async function Clear(){
    
    const AllSection = document.querySelectorAll('body section');
    const address = document.querySelectorAll('body address');

    try {
        for(let count=0; count<address.length; count++)
        {
           document.body.removeChild(address[count]);
        }
    } catch (error) {
        
    }

    if(AllSection.length != 0)
    {
        for(let count=0; count<AllSection.length; count++)
        {
           document.body.removeChild(AllSection[count]);
        }
    }else{
        console.log('BUGOU');
    }  

}

//FUNÇÃO EXECUTADA QUANDO O BOTÃO DE PESQUISA É CLICADO

async function Search()
{
    Clear();

    if(search.value == '')
    {
        return false;
    }

    try {
        document.body.removeChild(document.querySelector('body #control'))
    } catch (error) {
        
    }

    const wait = document.createElement('address');
    wait.setAttribute('class', 'wait')
    wait.innerHTML = 'Aguarde...';
    wait.style = 'margin-top: 5%'
    document.body.appendChild(wait);

    await fetch(`https://www.omdbapi.com/?s=${search.value}&page=${1}&apikey=446fec02`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        if(data.Error == 'Movie not found!')
        {
            const address = document.createElement('address')
            address.style = 'text-align: center; width:100%; margin-top: 5%'
            address.innerHTML = 'Nenhum resultado encontrado!!!';

            document.body.appendChild(address);

            document.body.removeChild(document.querySelector('body .wait'));
        }
        else if(search.value != '' && data.Error != 'Movie not found!')
        {
            let size = data.Search.length;
            let result = data.totalResults;
            
            Listar(0, size, data);
            Listar(4, size, data);
            Listar(8, size, data);

            console.log(data);

            document.body.removeChild(document.querySelector('body .wait'));

            const tam = document.querySelectorAll('section').length;

            document.querySelectorAll('section')[tam-1].style = 'margin-bottom: 8%';

            if(result >= 20)
            {
                contador=2;

                const bt1 = document.createElement('button');
                const bt2 = document.createElement('button');
                const div = document.createElement('div');

                bt1.setAttribute('class', 'b1');
                bt2.setAttribute('class', 'b2');
                div.setAttribute('id', 'control');

                bt1.innerHTML = 'Voltar';
                bt2.innerHTML = 'Próximo';

                div.appendChild(bt1);
                div.appendChild(bt2);

                document.body.appendChild(div); 
                
                document.querySelector('.b2').onclick = B2_SEARCH;
                document.querySelector('.b1').disabled;
            }


        }else if(search.value == ''){

        }
    })
    .catch(()=>{
        const address = document.createElement('address');

        address.style = 'text-align: center; width:100%; margin-top: 5%'
        address.innerHTML = 'Nenhum resultado encontrado!!!';

        document.body.appendChild(address);

        document.body.removeChild(document.querySelector('body address'));
    })
    
}

document.addEventListener('keyup', (evento)=>{
    if(evento.key == 'Enter')
    {
        Search();
    }
})

btn.onclick = Search;