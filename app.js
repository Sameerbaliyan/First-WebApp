var btnTranslate = document.querySelector("#btn-clickme");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
 console.log(textInput);

 var serverURL = "https://api.funtranslations.com/translate/minion.json"
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
     return serverURL +"?" + "text=" +text
}

function errorHandler(error){
   console.log("error occured", error)
   alert("somthing wrong with server! try agai after somtime")
}
function clickHandler(){

    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
    .catch(errorHandler);
};
btnTranslate = addEventListener("click", clickHandler)