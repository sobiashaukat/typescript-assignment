type Album = {
    artist:string;
    title:string;
    tracks?:number;
};
function make_album(artist:string,title:string,tracks?:number){
    return{artist,title,tracks};
}
const album1 = make_album('Ali Zafar', 'Hamad o Naat');
const album2 = make_album('Amjad sabri', 'Mere Maula Karam', 16);
const album3 = make_album('Junaid Jamshad', 'yaad e Haram', 12);

console.log(album1);
console.log(album2);
console.log(album3);
