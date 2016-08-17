document.onkeydown = function(event){
    if(event.keyCode == 8){
        var focus = event.path[0];
        if(['INPUT','TEXTAREA','SELECT','OPTION'].indexOf(event.target.tagName) == -1 && !document.activeElement.isContentEditable){
            event.preventDefault();
            window.history.back(-1);
        }
    }
}