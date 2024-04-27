const cover = document.querySelector('.card-image');
const title = document.querySelector('.card-content h5');
const artist = document.querySelector('.card-content p');
const audio = document.querySelector('audio');

const data ={
    title:"Audio 1",
    artist:"Artista 1",
    cover:"img/imagem1.jpg",
    audios:"audios/audio1.mp3",
  }
  
cover.style.background = `url(${data.cover}) no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.audios;