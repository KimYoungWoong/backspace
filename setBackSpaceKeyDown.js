document.onkeydown = function(event){
    if(event.keyCode !== 8){
        return;
    }else{
        var focus = event.path[0];
        var passFiled = '/INPUT/OPTION/SELECT/TEXTAREA/i';

        if(passFiled.test(focus) && !document.activeElement.isContentEditable){
            event.preventDefault();
            window.history.back(-1);
        }
    }
} 