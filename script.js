const malla = document.getElementById('malla');

// Definir los ramos con requisitos
const ramos = [
    // Primer Semestre
    { id: "algebra", nombre: "Álgebra", creditos: 8, semestre: 1, requisitos: [] },
    { id: "calculo_diff", nombre: "Cálculo Diferencial e Integral", creditos: 8, semestre: 1, requisitos: [] },
    { id: "computacion", nombre: "Computación para Ingeniería", creditos: 8, semestre: 1, requisitos: [] },
    { id: "comunicacion", nombre: "Comunicación Oral y Escrita", creditos: 6, semestre: 1, requisitos: [] },
    { id: "geometria", nombre: "Geometría Analítica", creditos: 8, semestre: 1, requisitos: [] },
    { id: "quimica", nombre: "Química", creditos: 8, semestre: 1, requisitos: [] },

    // Segundo semestre
    { id: "algebra_lineal", nombre: "Álgebra Lineal", creditos: 6, semestre: 2, requisitos: ["algebra"] },
    { id: "calculo_vectorial", nombre: "Cálculo Vectorial", creditos: 8, semestre: 2, requisitos: ["calculo_diff"] },
    { id: "dibujo", nombre: "Dibujo", creditos: 4, semestre: 2, requisitos: [] },
    { id: "estatica", nombre: "Estática", creditos: 8, semestre: 2, requisitos: [] },
    { id: "tecnologia_materiales", nombre: "Tecnología de Materiales", creditos: 10, semestre: 2, requisitos: ["quimica"] },
    { id: "termodinamica", nombre: "Termodinámica", creditos: 10, semestre: 2, requisitos: [] },

    // Tercer semestre
    { id: "cinematica_dinamica", nombre: "Cinemática y Dinámica", creditos: 10, semestre: 3, requisitos: ["estatica"] },
    { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", creditos: 6, semestre: 3, requisitos: ["calculo_vectorial"] },
    { id: "electricidad_magnetismo", nombre: "Electricidad y Magnetismo", creditos: 10, semestre: 3, requisitos: [] },
    { id: "etica", nombre: "Ética y Liderazgo", creditos: 6, semestre: 3, requisitos: [] },
    { id: "termodinamica_aplicada", nombre: "Termodinámica Aplicada", creditos: 8, semestre: 3, requisitos: ["termodinamica"] },
    { id: "programacion_aplicada", nombre: "Programación Aplicada a Ing.", creditos: 8, semestre: 3, requisitos: ["computacion"] },

    // Cuarto semestre
    { id: "metodos_numericos", nombre: "Métodos Numéricos", creditos: 8, semestre: 4, requisitos: ["ecuaciones"] },
    { id: "probabilidad", nombre: "Probabilidad y Estadística", creditos: 8, semestre: 4, requisitos: [] },
    { id: "analisis_circuitos", nombre: "Análisis de Circuitos Eléctricos", creditos: 10, semestre: 4, requisitos: ["electricidad_magnetismo"] },
    { id: "dinamica_sistemas", nombre: "Dinámica de Sistemas Físicos", creditos: 6, semestre: 4, requisitos: ["cinematica_dinamica"] },
    { id: "mecanica_solidos", nombre: "Mecánica de Sólidos", creditos: 8, semestre: 4, requisitos: ["cinematica_dinamica"] },
    { id: "mecanica_fluidos", nombre: "Mecánica de Fluidos", creditos: 8, semestre: 4, requisitos: [] },

    // Quinto semestre
    { id: "metodologia_inv", nombre: "Metodología de la Investigación", creditos: 6, semestre: 5, requisitos: [] },
    { id: "costos", nombre: "Costos y Evaluación Económica", creditos: 8, semestre: 5, requisitos: [] },
    { id: "diseno_maquina", nombre: "Diseño de Elementos de Máquina", creditos: 8, semestre: 5, requisitos: ["mecanica_solidos"] },
    { id: "ingenieria_materiales", nombre: "Ingeniería de Materiales", creditos: 10, semestre: 5, requisitos: ["tecnologia_materiales"] },
    { id: "electronica_basica", nombre: "Electrónica Básica", creditos: 10, semestre: 5, requisitos: ["analisis_circuitos"] },
    { id: "medicion_instrumentacion", nombre: "Medición e Instrumentación Eléctrica", creditos: 6, semestre: 5, requisitos: [] },

    // Sexto semestre
    { id: "control_electromecanico", nombre: "Control Electromecánico", creditos: 8, semestre: 6, requisitos: ["electronica_basica"] },
    { id: "mecanismos", nombre: "Mecanismos", creditos: 8, semestre: 6, requisitos: ["mecanica_solidos"] },
    { id: "turbomaquinaria", nombre: "Turbomaquinaria", creditos: 8, semestre: 6, requisitos: ["termodinamica_aplicada"] },
    { id: "procesos_conformado", nombre: "Procesos de Conformado de Materiales", creditos: 10, semestre: 6, requisitos: ["ingenieria_materiales"] },
    { id: "transformadores_motores", nombre: "Transformadores y Motores de Inducción", creditos: 10, semestre: 6, requisitos: ["analisis_circuitos"] },

    // Séptimo semestre
    { id: "dinamica_maquinaria", nombre: "Dinámica de Maquinaria", creditos: 8, semestre: 7, requisitos: ["mecanismos"] },
    { id: "maquinas_positivo", nombre: "Máquinas de Desplazamiento Positivo", creditos: 8, semestre: 7, requisitos: ["mecanica_fluidos"] },
    { id: "lab_maquinas_termicas", nombre: "Lab. Máquinas Térmicas", creditos: 4, semestre: 7, requisitos: ["turbomaquinaria"] },
    { id: "lab_mecanica_fluidos", nombre: "Lab. Mecánica de Fluidos", creditos: 4, semestre: 7, requisitos: ["mecanica_fluidos"] },
    { id: "maquinas_corriente", nombre: "Máquinas Corriente Directa y Síncronas", creditos: 10, semestre: 7, requisitos: ["transformadores_motores"] },
    { id: "procesos_corte", nombre: "Procesos de Corte de Materiales", creditos: 20, semestre: 7, requisitos: ["procesos_conformado"] },

    // Octavo semestre
    { id: "diseno_computadora", nombre: "Diseño por Computadora", creditos: 4, semestre: 8, requisitos: ["diseno_maquina"] },
    { id: "ingenieria_ecologica", nombre: "Ingeniería Ecológica", creditos: 8, semestre: 8, requisitos: [] },
    { id: "instalaciones_electricas", nombre: "Instalaciones Eléctricas", creditos: 8, semestre: 8, requisitos: ["medicion_instrumentacion"] },
    { id: "sistemas_potencia", nombre: "Sistemas Eléctricos de Potencia I", creditos: 8, semestre: 8, requisitos: ["transformadores_motores"] },
    { id: "transferencia_calor", nombre: "Transferencia de Calor", creditos: 8, semestre: 8, requisitos: ["mecanica_fluidos"] },
    { id: "teoria_control_robotica", nombre: "Teoría del Control y Robótica", creditos: 10, semestre: 8, requisitos: ["control_electromecanico"] },

    // Noveno semestre
    { id: "gestion_gerencial", nombre: "Gestión Gerencial", creditos: 6, semestre: 9, requisitos: [] },
    { id: "modulo1", nombre: "Módulo de Elección 1", creditos: 8, semestre: 9, requisitos: [] },
    { id: "modulo2", nombre: "Módulo de Elección 2", creditos: 8, semestre: 9, requisitos: [] },
    { id: "modulo3", nombre: "Módulo de Elección 3", creditos: 8, semestre: 9, requisitos: [] },
    { id: "optativa1", nombre: "Optativa 1", creditos: 8, semestre: 9, requisitos: [] },
    { id: "optativa2", nombre: "Optativa 2", creditos: 8, semestre: 9, requisitos: [] },
];

// Estado inicial
const estadoRamos = {};

for (let s = 1; s <= 9; s++) {
    const semestreDiv = document.createElement('div');
    semestreDiv.classList.add('semestre');
    semestreDiv.innerHTML = `<h2>Semestre ${s}</h2>`;

    ramos.filter(r => r.semestre === s).forEach(r => {
        const ramoDiv = document.createElement('div');
        ramoDiv.classList.add('ramo', 'locked');
        ramoDiv.id = r.id;
        ramoDiv.innerText = `${r.nombre} (${r.creditos} créditos)`;

        ramoDiv.addEventListener('click', () => aprobarRamo(r.id));

        estadoRamos[r.id] = { aprobado: false, requisitos: r.requisitos };
        semestreDiv.appendChild(ramoDiv);
    });

    malla.appendChild(semestreDiv);
}

function verificarDesbloqueo() {
    ramos.forEach(r => {
        if (!estadoRamos[r.id].aprobado) {
            const requisitosCumplidos = r.requisitos.every(req => estadoRamos[req]?.aprobado);
            const div = document.getElementById(r.id);
            if (requisitosCumplidos) {
                div.classList.remove('locked');
            } else {
                div.classList.add('locked');
            }
        }
    });
}

function aprobarRamo(id) {
    const ramo = document.getElementById(id);
    if (ramo.classList.contains('locked') || estadoRamos[id].aprobado) return;

    estadoRamos[id].aprobado = true;
    ramo.classList.add('approved');
    verificarDesbloqueo();
}

// Inicializa el desbloqueo inicial
verificarDesbloqueo();
