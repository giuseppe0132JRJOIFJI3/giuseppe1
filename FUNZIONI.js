/*
console.log("hello world!!!");
alert("ciao mondo");


function visualizzamessaggio(nome,cognome) {
let miosaluto="";
    let saluto=("ciao "+nome+" "+cognome;
    return saluto;
}

miosaluto=visualizzamessaggio("juan","rossi");
console.log(miosaluto)
*/

function cambiaTesto() {
    document.getElementById("terzoParagrafo").innerHTML="sciao belo"
}

function ripristina() {
    document.getElementById("terzoParagrafo").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum vel excepturi deleniti maxime, sint praesentium, repellat necessitatibus deserunt laboriosam quia sed rem? Error voluptate quisquam officia natus eligendi cum!"

}

function cambiaColore(coloreTesto,coloreSfondo) {
    document.getElementById("terzoParagrafo").style.color=coloreTesto;
    document.getElementById("terzoParagrafo").style.background=coloreSfondo
}

function mousePassaggio() {
    document.getElementById("secondoParagrafo").innerHTML = "pass u mouse"
}

function mouseVia() {
    document.getElementById("secondoParagrafo").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum vel excepturi deleniti maxime, sint praesentium, repellat necessitatibus deserunt laboriosam quia sed rem? Error voluptate quisquam officia natus eligendi cum!</p>"
}

function ripristinaColore() {
    document.getElementById("terzoParagrafo").style.color = "black"
    document.getElementById("terzoParagrafo").style.backgroundColor = "white"
}

function apriFinestra() {
    document.open();
    document.write("<h1>hello</h1> <p>ciaooo</p>");
    document.close(); 
}
