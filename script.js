

// карта гугл
function initMap() {
    // Styles a map in night mode.
    var pos =  {lat:  53.918981, lng: 27.579380};
    var opt = {
        center: pos,
        zoom: 15,
    };
    var myMap = new google.maps.Map(document.getElementById('map'), opt);    
    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
    });
};

// функция отрытия гугл карт 
var listmapLi = document.getElementById('openmapLi');
    listmapLi.addEventListener('click', openPM);
var listmapI = document.getElementById('openmapI');
    listmapI.addEventListener('click', openPM);
var listmapAdres = document.getElementById('openmapAdres');
    listmapAdres.addEventListener('click', openPM);
     
 function openPM() {
    var body = document.getElementById('body');
        body.classList.toggle('body-class-control');
    var maplist = document.getElementById('map-list');
        maplist.style.display = 'block';
        
    var closemap = document.getElementById('closemap');
        closemap.addEventListener('click', closemapFun);
        
        function closemapFun(){
            maplist.style.display = '';
        }
}

  
    // предотвращаем переход по ссылке
    // return false


