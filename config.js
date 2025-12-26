var config = {
    style: 'mapbox://styles/mlahuerta/cmjhi9xzz007501qv9bu6f58u',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWxhaHVlcnRhIiwiYSI6ImNtamZ1dTU0eDBuaTEzYnM2YmtldTMwZ2IifQ.n7if3nSL3UHzKZR4BLFdYA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas de Euskadi',
    subtitle: 'Storymaps de las playas de Euskadi',
    byline: 'Marta Lahuerta',
    footer: 'Fuentee: datos.org.es - Wikipedia. <br> Creada con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Bakio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Playa_de_Baquio%2C_Pa%C3%ADs_Vasco%2C_Espa%C3%B1a%2C_2019-08-13%2C_DD_25-34_PAN.jpg',
            description: 'Situada en el municipio de Bakio es la playa más larga de Bizkaia y la única con bandera azul.',
            location: {
                center: [-2.807391991953191, 43.43095105152781],
                zoom: 12.5,
                pitch: 62.77,
                bearing: 70.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Playa Muriola',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/2016_08_25_Muriola_Barrika.jpg',
            description: 'Situada en el municipio de Barrika es una playa de arena.',
            location: {
                center: [-2.959609782122028, 43.413088269072986],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Aritzatxu',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Aritzatxu_Beach1.jpg',
            description: 'Situada en Bermeo, es una playa de arena, rocas y vegetación.',
            location: {
                center: [-2.729575559801993, 43.42591312202736],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Playa San Antonio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Urdaibai_Sukarrieta_Pedernales_Abina_Sandindere_Erenozar.jpg',
            description: 'Situada en Pedernales, es una playa de arena oscura separada de playa Toña por la isla de Txatxarramendi.',
            location: {
                center: [-2.6872421951421352, 43.38653681127599],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Ea',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Ea_-_Playa_y_r%C3%ADa_09.jpg',
            description: 'Situada en el municipio de Ea es una playa urbana de arena.',
            location: {
                center: [-2.582648936698504, 43.38581575601511],
                zoom: 12.5,
                pitch: 62.77,
                bearing: 70.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Playa de Arrigunaga',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Arrigunaga_eta_Galea.jpg',
            description: 'Situada en Algorta, es una playa con arena en el Abra.',
            location: {
                center: [-3.019731896802744, 43.355924236098886],
                zoom: 4,
                pitch: 57.76,
                bearing: 76.65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Azcorri',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Gorrondatxe.jpg',
            description: 'Situada en el municipio de Guetxo es una playa de arena, rocas y vegetación en la que se está llevando a cabo un experimento de regeneración dunar.',
            location: {
                center: [-3.016369713673461, 43.38075920164485],
                zoom: 16.5,
                pitch: 62.77,
                bearing: 70.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
