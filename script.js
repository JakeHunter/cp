var myurl2 =  "https://api.kanye.rest";
console.log(myurl2);
 fetch(myurl2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let text = '<p>';
      text += json["quote"];
      text += '</p>';
      document.getElementById("kanye").innerHTML = text;
    });