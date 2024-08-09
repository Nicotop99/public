
var auth;
var db;
setTimeout(() => {
    auth = firebase.auth();
    db = firebase.firestore();
}, 1000);

function login(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email === "oliverio.enicola@gmail.com" || email === "maicol.oliverio@gmail.com" || email === "info@ceramichemontecatini.it"){
        //effuetta login e vai alla page
        
        auth.signInWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          document.getElementById("divLogin").style.display = "none";
          document.getElementById("creaP").style.display = "block";
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
        

    }else{

        if (confirm("Non hai l'autorizzazione necessaria per proseguire")) {
            // Save it!
            window.location = "index.html";
          } else {
            // Do nothing!
            window.location = "index.html";

          }
    }
}
var urlArray = [];

function creaProdotto(){
    var titolo = document.getElementById("titolo").value;
    var desc = document.getElementById("desc").value;
    var img = document.getElementById("img").files;
    var compreso = document.getElementById("compreso").checked;
    var categoria = document.getElementById("categoria").value;
    var prezzoM = document.getElementById("prezzoM").value;
    console.log(compreso)

    var db = firebase.firestore();
    console.log(img.length);
    for(let i = 0;i < img.length; i++){
        console.log(i);
    var storage = firebase.storage().ref(titolo + "/" + img[i].name);
    storage.put(img[i]).then((snap)=>{
        snap.ref.getDownloadURL().then((url) => {
            // do something with url here
            urlArray.push(url);
            if(i + 1 == img.length){
                console.log("ok");
                
   
       db.collection(categoria).add({
           titolo : titolo,
           desc : desc,
           img : urlArray,
           compreso : compreso,
           prezzoM : prezzoM,
           categoria : categoria
   
   
           
           }).then((docRef)=>{
               console.log(docRef);
               db.collection(categoria).doc(docRef.id).update("id",docRef.id).then(()=>{
                //caricato 
                urlArray.splice(0,urlArray.length);
               })

           }).catch((error)=>{
               console.log(error);
           })
   
           }
        });
       
      
    }).catch((error)=>{
        console.log(error);
    })
    }
   






}