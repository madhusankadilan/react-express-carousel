const express = require("express");
const cors = require("cors");
const app = express();
const port = 3600;

app.use(cors());

const carouselData = [

    {
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHwyfHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "London",
        subTitle: "photo of Elizabeth Tower, London",
    },
    {
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHwzfHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Big Ben tower",
        subTitle: "Big Ben tower",
    }, {
        image: "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw4fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Rain man",
        subTitle: "time lapse photography of woman walking on street while holding umbrella near London telephone booth beside wall",
    },
    {
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw0fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "London Bridge, London",
        subTitle: "London Bridge, London",
    },
    {
        image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw1fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Zoomzoom",
        subTitle: "timelapse photography of double decker bus on road between buildings",
    }, {
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Winding through London",
        subTitle: "aerial photography of London skyline during daytime",
    },
    {
        image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw2fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Big Ben",
        subTitle: "Big Ben, London",
    },
    {
        image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw3fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "London East Side from The Shard",
        subTitle: "aerial view of city during dawn",
    },

    {
        image: "https://images.unsplash.com/photo-1502700559166-5792585222ef?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHw5fHxsb25kb258ZW58MHx8fHwxNjM3OTM1OTg4&ixlib=rb-1.2.1&q=85",
        title: "Beautiful view from the top to London central street",
        subTitle: "aerial photography of buses on road between European styled building",
    },
    {
        image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzgzODZ8MHwxfHNlYXJjaHwxMHx8bG9uZG9ufGVufDB8fHx8MTYzNzkzNTk4OA&ixlib=rb-1.2.1&q=85",
        title: "Touring London",
        subTitle: "red double-decker bus passing Palace of Westminster, London during daytime",
    },
];

app.get("/api/carousel", (req, res) => {
    const {
        slides
    } = req.query;

    if (slides) {
        if (0 < slides && slides < 10) {
            const requestedData = carouselData.slice(0, slides);

            res.send({
                status: "success",
                carouselData: requestedData,
            });
        } else {
            res.send({
                status: "success",
                carouselData: carouselData,
            });
        }
    } else {
        res.send({
            status: "error",
            msg: "Invalid URL",
        });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});