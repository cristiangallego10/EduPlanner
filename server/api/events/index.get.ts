export default defineEventHandler(async (event) => {
    const events = [
        {
            id: 1,
            title: 'Conferencia de Tecnología',
            date: '2023-11-25',
            description: 'Una conferencia sobre las últimas innovaciones en tecnología y desarrollo de software.',
        },
        {
            id: 2,
            title: 'Taller de Fotografía',
            date: '2023-12-02',
            description: 'Un taller práctico para aprender las bases de la fotografía digital y técnicas avanzadas.',
        },
        {
            id: 3,
            title: 'Concierto de Jazz en Vivo',
            date: '2023-12-10',
            description: 'Disfruta de una noche de jazz en vivo con artistas locales e internacionales.',
        },
        {
            id: 4,
            title: 'Exposición de Arte Moderno',
            date: '2023-12-15',
            description: 'Una muestra de obras de artistas contemporáneos de todo el mundo.',
        },
        {
            id: 5,
            title: 'Clase de Cocina Italiana',
            date: '2023-12-20',
            description: 'Aprende a cocinar auténticos platos italianos de la mano de un chef experimentado.',
        },
        {
            id: 6,
            title: 'Seminario de Marketing Digital',
            date: '2023-12-22',
            description: 'Un seminario intensivo sobre estrategias de marketing en redes sociales y publicidad digital.',
        },
        {
            id: 7,
            title: 'Festival de Cine Independiente',
            date: '2023-12-30',
            description: 'Una selección de películas independientes de distintos géneros y países.',
        },
        {
            id: 8,
            title: 'Clase de Yoga al Aire Libre',
            date: '2023-12-05',
            description: 'Relájate y conéctate con la naturaleza en una sesión de yoga en el parque.',
        },
        {
            id: 9,
            title: 'Taller de Escritura Creativa',
            date: '2023-12-12',
            description: 'Desarrolla tus habilidades de escritura en un entorno creativo y colaborativo.',
        },
        {
            id: 10,
            title: 'Charla sobre Inteligencia Artificial',
            date: '2024-01-05',
            description: 'Una charla sobre el impacto de la inteligencia artificial en el mundo actual.',
        },
    ];

    return events;
});
