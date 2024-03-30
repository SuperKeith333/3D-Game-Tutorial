import { Server} from "socket.io";

const io = new Server({
    cors:{
        origin: "https://scaling-garbanzo-p4vvw4g977536gg-5173.app.github.dev"
    }
});

io.listen(3001);

const characters = [];

const generateRandomPosition = () =>{
    return [Math.random() * 3, 0, Math.random() * 3];
};

const generateRandomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};


io.on("connection", (Socket) => {
    console.log("user connected");

    characters.push({
        id: Socket.id,
        position: generateRandomPosition(),
        hairColor: generateRandomHexColor(),
        topColor: generateRandomHexColor(),
        bottomColor: generateRandomHexColor()
    });

    Socket.emit("hello");

    io.emit("characters", characters);

    Socket.on("disconnect", () => {
        console.log("user disconnected");

        characters.splice(
            characters.findIndex((character) => character.id === Socket.id)
        );

        io.emit("characters", characters);
    })
});