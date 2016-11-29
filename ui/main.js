var submit = document.getElementById('submit');
submit.onclick = function(){
    //Make a request to the server and send the name
    var request = new XMLHttpRequest();
    //Capture the list of names and render it as a list
    request.onreadystatechange = function(){   
        if(request.readyState === XMLHttpRequest.DONE) {
           //Take some action
           if(request.status === 200){
               alert("Message sent successfully");
               }
           else if(request.status === 403){
               alert("Somethong went wrong. You may try again.");
           }else if(request.status === 500){
               alert("Somethong went wrong. You may try again.");
           }
       }
    };
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    request.open('POST', 'http://aryan574.imad.hasura-app.io/contact', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send({name: name,emai: email,subject: subject,message: message});
};