var myurl = "https://cors-anywhere.herokuapp.com";
myurl += "/xkcd.com/info.0.json";
console.log(myurl);
fetch(myurl, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let text = "<p>Title: ";
        text += json["title"] + ' ('+json.month+ '/'+json.day+'/'+json.year+ ')</p>';
        let text1 = '<p>' + json["alt"];
        text1 += "</p>";
        let image = '<img src="'+json["img"]+'" width = 75% ></img>"';
        document.getElementById("comic").innerHTML = text;
        document.getElementById("comic1").innerHTML = text1;
        document.getElementById("comic2").innerHTML = image;
    
    });
    
