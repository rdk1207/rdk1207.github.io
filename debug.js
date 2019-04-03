document.addEventListener('DOMContentLoaded', e => {
    if(window.location.hash === '#debug'){
        document.getElementById('debug').style.display = 'flex';
    }
});

function debug(element){
    switch(element.value){
        case 'borders':
            toggleBorders(element.checked);
            break;
        default:
    }
}

function toggleBorders(bordersOn){
    if(bordersOn){
        document.getElementById('debug-stylesheet').textContent = '*{border: solid 1px lightblue;}';
    }
    else{
        document.getElementById('debug-stylesheet').textContent = '';
    }
}