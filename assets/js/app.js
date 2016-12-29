var get = {
    item: function(item, dom){
        return typeof(dom)!="undefined"?dom.querySelector(item):document.querySelector(item);
    },
    all: function(itens, dom){
        return typeof(dom)!="undefined"?dom.querySelectorAll(itens):document.querySelectorAll(itens);
    }
},
app = {
    init: function(){
        app.setEvents();
    },
    setEvents: function(){
        get.item("body").addEventListener('click', function(e) {
            get.all(".navbar-drop-item.active").forEach(function(arr){
                arr.className = "navbar-drop-item";
            });
            var target = e.target; 
            if(target.className == "material-icons" || target.tagName == "SPAN"){
                if(target.parentNode.className == "navbar-drop-open"){
                    target = target.parentNode;
                }
            }
            console.log(target);
            if(target.className == "navbar-drop-open"){
               if(target.className.indexOf("active")==-1){
                    target.parentNode.className += " active";
                } 
            }
        }); 
    }
}
app.init();