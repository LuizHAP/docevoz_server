import express from 'express';
import cors from 'cors';

const app = express();

const data = [{
    "podcasts": [
        {
            "id": 1,
            "title": "Namoro",
            "cover": "https://docevoz.app/podcasts/img/2.jpg",
            "tracks": [
                {
                    "id": "0",
                    "title": "Aniversario de Amizade",
                    "artist": "Voz Masculina",
                    "url": "https://docevoz.app/podcasts/song/1.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "1",
                    "title": "Aniversario de Amizade",
                    "artist": "Voz Feminina",
                    "url": "https://docevoz.app/podcasts/song/2.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "2",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Masculina",
                    "url": "https://docevoz.app/podcasts/song/3.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "3",
                    "title": "Aniversario de Pai pra",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "4",
                    "title": "Aniversario de Pai pra",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                }
            ]
        },
        {
            "id": 2,
            "title": "Otimismo",
            "cover": "https://docevoz.app/podcasts/img/3.jpg",
            "tracks": [
                {
                    "id": "5",
                    "title": "Aniversario de Amizade",
                    "artist": "Voz Masculina",
                    "url": "https://docevoz.app/podcasts/song/1.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "6",
                    "title": "Aniversario de Amizade",
                    "artist": "Voz Feminina",
                    "url": "https://docevoz.app/podcasts/song/2.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "7",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Masculina",
                    "url": "https://docevoz.app/podcasts/song/3.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "8",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "9",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                }
            ]
        },
        {
            "id": 3,
            "title": "Erótica",
            "cover": "https://docevoz.app/podcasts/img/6.jpg",
            "tracks": [
                {
                    "id": "10",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "11",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "12",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "13",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "14",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                }
            ]
        },
        {
            "id": 4,
            "title": "Pedido de Desculpas",
            "cover": "https://docevoz.app/podcasts/img/4.jpg",
            "tracks": [
                {
                    "id": "15",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "16",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "17",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "18",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "19",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                }
            ]
        },
        {
            "id": 5,
            "title": "Saudades",
            "cover": "https://docevoz.app/podcasts/img/7.jpg",
            "tracks": [
                {
                    "id": "20",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "21",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "22",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "23",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                },
                {
                    "id": "24",
                    "title": "Aniversario de Pai",
                    "artist": "Voz Feminia",
                    "url": "https://docevoz.app/podcasts/song/4.mp3",
                    "artwork": "https://docevoz.app/podcasts/img/3.jpg"
                }
            ]
        }
    ]
}];

app.use(cors());
app.use(express.json());
app.get('/podcasts', (req, res) => {
    res.json(data);
})

app.listen(3333)