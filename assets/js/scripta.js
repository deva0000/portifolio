function loadPosts(){
document.querySelector('div').innerHTML = 'Carregando';

let fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
let postsJson = await fetchPosts.json();
return postsJson;
}
    console.log('asdasd')
    for(let i in postsJson){
        html += `<div class=commentContainer>
                    <div class=postUserId>
                       Usuário  ${lista[i].userId}, Comentário ${lista[i].id}
                    </div>
                    <h3>
                        Disse:<p>${lista[i].body}
                    </h3>
                </div>`


    }
    document.querySelector('div').innerHTML = html;




