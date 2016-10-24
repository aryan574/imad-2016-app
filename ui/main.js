//Counter code
var button = document.getElementById("counter");
var counter = 0;
button.onClick = function() {
    // Create a request object
    var request = new XMLHttpRequest();
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
       if(request.readystate === XMLHttpRequest.DONE) {
           //Take some action
           if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById("count");
               span.innerHTML = counter.toString();
           }
       }
    };
    //Make the request
    request.open('GET', 'http://aryan574.imad.hasura-app.io/counter');
    request.send(null);
};