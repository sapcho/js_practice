
function fun() {
    for (var i=1; i<=10; i++) {
        var itm = document.getElementById("demo");
        var cln = itm.cloneNode(true);
        document.getElementById("demo").parentNode.appendChild(cln);
        cln.textContent = i;
    }

    document.getElementById("demo").parentNode.removeChild(document.getElementById("demo"));
}


function fun2() {

        document.getElementsByTagName("H1")[0].setAttribute("style", "background-color: red;");

}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
    document.getElementById("demo").parentNode.removeChild(document.getElementById("demo"));
}


function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '200px';
    tbl.style.height  = '200px';


    for(var i = 0; i < 5; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 5; j++) {
            var x = Math.floor((Math.random() * 255) + 1);
            var y = Math.floor((Math.random() * 255) + 1);
            var z = Math.floor((Math.random() * 255) + 1);
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(''));
            td.style.background = getRandomColor();
            td.style.border = '0.5px solid black';
        }
    }
    table.innerHTML = "";
    table.appendChild(tbl);
    tbl.style.margin= '10px';
}
tableCreate();

function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}