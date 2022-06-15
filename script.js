const input = document.querySelector(".novaTarefa");
const btn = document.querySelector(".btnNovaTarefa");
const lista = document.querySelector(".listaTarefa");


//funcoes
function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto){
    const li = criaLi();
    lista.appendChild(li);   
    insertCheckbox(li);
    li.innerText=texto;
    btnRemove(li);

    
}

function limpaInput()
{
    input.focus();
    input.value = '';
}

function btnRemove(li){
    const btn = document.createElement('button');
    btn.innerHTML = "X";
    li.appendChild(btn)
    btn.addEventListener('click', function(e){
        li.remove();
    })
}

function insertCheckbox(li){
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    li.appendChild(cb);
}

// recuperando placeholder
btn.addEventListener('click', function(){
    if(!input.value) return;
    criaTarefa(input.value);
    limpaInput();
});

input.addEventListener('keypress', function(e){
    if(!input.value) return;

    if(e.key == 'Enter'){
       criaTarefa(input.value); 
       limpaInput();
    } 
})