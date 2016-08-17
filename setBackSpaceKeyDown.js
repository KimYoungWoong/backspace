document.onkeydown = function(event){
    if(event.keyCode !== 8){
        return;
    }
    
    const focus = event.path[0];
    
    if(['INPUT','TEXTAREA','SELECT','FILED'].indexOf(focus.tagName) > -1){
        return;
    }
    
    if(document.activeElement.isContentEditable){
        return;
    }
    
    event.preventDefault();
    window.history.back(-1);
} 