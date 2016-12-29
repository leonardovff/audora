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
    removeToogle: function(el){
        el.className = "toogle";
    },
    addToogle: function(el){
        el.className += " toogleshow";
    },
    setEvents: function(){
        get.item("body").addEventListener('click', function(e) {
            //MENU DROP DOWN ACTIONS
            get.all(".navbar-drop-item.active").forEach(function(arr){
                arr.className = "navbar-drop-item";
            });
            var target = e.target; 
            if(target.className == "material-icons" || target.tagName == "SPAN"){
                if(target.parentNode.className == "navbar-drop-open"){
                    target = target.parentNode;
                }
            }
            if(target.className == "navbar-drop-open"){
               if(target.className.indexOf("active")==-1){
                    target.parentNode.className += " active";
                } 
            }
        }); 
        get.all('.evento-info').forEach(function(arr){
           arr.addEventListener('click', function(){
               var atual = get.item('.toogleshow'),
               target = get.item("#"+this.dataset.id),
               next = null;
               if(atual != target){
                  next = target;
               }
               if(atual!=null){
                   app.removeToogle(atual);
               }
               if(next!=null){
                   app.addToogle(next);
               }
           });
        });
    }
}
app.init();