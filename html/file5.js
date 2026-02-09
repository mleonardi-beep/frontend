var prezzi = [10, 7, 5, 7];
var somma=0;
var media=0
for (var i = 0; i < prezzi.length; i++) {
    console.log(prezzi[i]);
}
for (var i = 0; i < prezzi.length; i++) {
    somma=somma+prezzi[i];
}
media=somma/4
console.log(somma);
console.log(media);
document.getElementById("prezzi").textContent = prezzi;
document.getElementById("somma").textContent = somma;
document.getElementById("media").textContent = media;
