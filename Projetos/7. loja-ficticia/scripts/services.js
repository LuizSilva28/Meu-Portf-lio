// || BOTÃO AVALIAR || BOTÃO AVALIAR || BOTÃO AVALIAR || BOTÃO AVALIAR

var button = document.querySelector(".button_Avaliar");
var icon_close = document.querySelector(".icon-CloseAvaliable");
var oculto = document.querySelector(".oculto");

button.onclick = (e) => {
  if (!oculto.classList.contains("container-Ratingfloot")) {
    oculto.classList.add("container-Ratingfloot");
  }
};
icon_close.onclick = (e) => {
  if (!oculto.classList.contains("container-Ratingfloot")) {
    oculto.classList.add("container-Ratingfloot");
  } else {
    oculto.classList.remove("container-Ratingfloot");
  }
};

// || ALERT DO BOTÃO ENVIAR DA AVALIAÇÕES
/*
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} p-0 alert-dismissible" role="alert">`,
    `   <div class="m-1 me-5">${message}</div>`,
    '   <button type="button" class="btn-close p-2" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('avaliação enviada!!', 'success')
  })
}*/

// || AVALIAÇÃO POR ESTRELAS || AVALIAÇÃO POR ESTRELAS || AVALIAÇÃO POR ESTRELAS

const allstars = document.querySelectorAll('.star');

allstars.forEach((star, i) => {
  star.onclick = function () {
    let current_star_level = i + 1;
    console.log(current_star_level);
    allstars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        star.innerHTML = '&#9733';
      } else {
        star.innerHTML = '&#9734'
      }


    })
  }
})

// || BOTÃO1 VER MAIS || BOTÃO1 VER MAIS || BOTÃO1 VER MAIS || BOTÃO1 VER MAIS

var bnt_comentario1 = document.querySelector(".comentario-Bnt1");
var conteudo_visivel1 = document.querySelector(".myContainer-ComentariosOculto1");

bnt_comentario1.onclick = (e) => {
  if (!conteudo_visivel1.classList.contains("myContainer-Comentarios1")) {
    conteudo_visivel1.classList.add("myContainer-Comentarios1");
  } else {
    conteudo_visivel1.classList.remove("myContainer-Comentarios1");
  }
};

// || BOTÃO2 VER MAIS || BOTÃO2 VER MAIS || BOTÃO2 VER MAIS || BOTÃO2 VER MAIS
var bnt_comentario2 = document.querySelector(".comentario-Bnt2");
var conteudo_visivel2 = document.querySelector(".myContainer-ComentariosOculto2");

bnt_comentario2.onclick = (e) => {
  if (!conteudo_visivel2.classList.contains("myContainer-Comentarios2")) {
    conteudo_visivel2.classList.add("myContainer-Comentarios2");
  } else {
    conteudo_visivel2.classList.remove("myContainer-Comentarios2");
  }
};