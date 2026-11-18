const personagens = [
  {
    frase: '"ve been solving all the project ideas on roadmap.sh and I am surprised how far i have come from when I started."',
    foto: './img/img1.png',
    nome: 'Artem Jones'
  },
  {
    frase: '" Since starting my career 2021.1 have only followed one resource  roadmap.sh.It trully helped me go /from 0 to having a joband changing the financial trajectory of my family"',
    foto: './img/img2.png',
    nome: 'Artem Jones'
  },
  {
    frase: '"I find myself recommending roadmap.sh to all the internees or junior devs. Its great way to skill up and grown in your career"',
    foto: './img/img3.png',
    nome: 'Jackie Mackle'
  }
];

let indiceAtual = 0;

const elFrase = document.getElementById('frase');
const elFoto = document.getElementById('foto');
const elNome = document.getElementById('nome');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

function atualizarSlide() {
  const atual = personagens[indiceAtual];
  elFrase.textContent = atual.frase;
  elFoto.src = atual.foto;
  elFoto.alt = atual.nome;
  elNome.textContent = atual.nome;
}

btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % personagens.length;
  atualizarSlide();
});

btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + personagens.length) % personagens.length;
  atualizarSlide();
});

setInterval(() => {
  indiceAtual = (indiceAtual + 1) % personagens.length;
  atualizarSlide();
}, 5000);

atualizarSlide();