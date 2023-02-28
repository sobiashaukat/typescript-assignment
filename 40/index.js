"use strict";
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
const album1 = make_album('Ali Zafar', 'Hamad o Naat');
const album2 = make_album('Amjad sabri', 'Mere Maula Karam', 16);
const album3 = make_album('Junaid Jamshad', 'yaad e Haram', 12);
console.log(album1);
console.log(album2);
console.log(album3);
