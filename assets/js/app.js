var app = {
    init: function(){
        console.log("Entrou");
        app.setEvents();
    },
    setEvents: function(){
        document.querySelectorAll('.tooltip').forEach(function(arr){
            arr.addEventListener("hover",function(e){ 
                console.log(e);
                e.stopPropagation();
                e.preventDefault();
                return false;
            }, false);
        });
    }
}
window.onload = app.init();
console.log('entrou');
$('[title]').hover(
   function(e) {
       console.log("entrou");
       e.preventDefault();
   },
   function() { }
);