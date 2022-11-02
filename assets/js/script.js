async function loadPosts(){
    document.querySelector('div').innerHTML ="<img src='https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif' >"
    let fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let lista = await fetchPosts.json();
    let html = '';

let myTimer = setTimeout(build,500) 
function build(){
    for(let i in lista){

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
}   

}