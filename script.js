const ramos = [
  // PRIMER SEMESTRE
  { id: 'algebra', nombre: 'Álgebra', creditos: 8 },
  { id: 'calculo', nombre: 'Cálculo Dif. e Integral', creditos: 8 },
  { id: 'computacion', nombre: 'Computación p/Ing.', creditos: 8 },
  { id: 'comunicacion', nombre: 'Comunicación Oral y Escrita', creditos: 6 },
  { id: 'geometria', nombre: 'Geometría Analítica', creditos: 8 },
  { id: 'quimica', nombre: 'Química', creditos: 8 },

  // SEGUNDO SEMESTRE
  { id: 'algebralineal', nombre: 'Álgebra Lineal', creditos: 6, requisitos: ['algebra'] },
  { id: 'calculoVectorial', nombre: 'Cálculo Vectorial', creditos: 8, requisitos: ['calculo'] },
  { id: 'dibujo', nombre: 'Dibujo', creditos: 4 },
  { id: 'estatica', nombre: 'Estática', creditos: 8 },
  { id: 'materiales', nombre: 'Tecnología de Materiales', creditos: 10 },
  { id: 'termodinamica', nombre: 'Termodinámica', creditos: 10 },

  // TERCER SEMESTRE
  { id: 'cinematica', nombre: 'Cinemática y Dinámica', creditos: 10, requisitos: ['estatica'] },
  { id: 'ecuaciones', nombre: 'Ecuaciones Diferenciales', creditos: 6, requisitos: ['calculoVectorial'] },
  { id: 'electricidad', nombre: 'Electricidad y Magnetismo', creditos: 10 },
  { id: 'etica', nombre: 'Ética y Liderazgo', creditos: 6 },
  { id: 'term_aplicada', nombre: 'Termodinámica Aplicada', creditos: 8, requisitos: ['termodinamica'] },
  { id: 'programacion', nombre: 'Programación Aplicada', creditos: 8 },

  // Aquí seguirías con los del cuarto al noveno semestre...
  // Agrega más ramos manteniendo el formato anterior
];

const malla = document.getElementById('malla');

function renderRamos() {
  malla.innerHTML = '';
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');

    const aprobado = localStorage.getItem(ramo.id) === 'aprobado';
    const desbloqueado = !ramo.requisitos || ramo.requisitos.every(req => localStorage.getItem(req) === 'aprobado');

    if (!desbloqueado && !aprobado) {
      div.classList.add('locked');
    }

    if (aprobado) {
      div.classList.add('aprobado');
    }

    div.innerHTML = `<h3>${ramo.nombre}</h3><div class=\"creditos\">Créditos: ${ramo.creditos}</div>`;
    div.addEventListener('click', () => toggleAprobado(ramo.id));
    malla.appendChild(div);
  });
}

function toggleAprobado(id) {
  const actual = localStorage.getItem(id);
  if (actual === 'aprobado') {
    localStorage.removeItem(id);
  } else {
    localStorage.setItem(id, 'aprobado');
  }
  renderRamos();
}

window.addEventListener('load', renderRamos);
