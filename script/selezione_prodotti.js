
var db;
var auth;

setTimeout(() => {
    db = firebase.firestore();
    auth = firebase.auth();
    var url_string = window.location;
var url = new URL(url_string);
var categoria = url.searchParams.get("categoria");

db.collection(categoria).get().then((doc)=>{
    doc.forEach(element => {
       console.log(element.data()); 
       var data = element.data();
       if(data.compreso === true){
        //compreso
        document.getElementById("divProdotti1").innerHTML += `<div class="p">
                <img src="${data.img[0]}">
                <h1>${data.titolo}</h1>

            </div>`;
       }else{
        document.getElementById("divProdotti2").innerHTML += `<div class="p2">
        <img src="${data.img[0]}">
                
                <h1 class="price">${data.prezzoM}</h1>
                <h1 class="title">${data.titolo}</h1>

    </div>`;
       }
    });
})

}, 1000);