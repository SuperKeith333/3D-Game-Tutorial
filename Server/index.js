import { Server} from "socket.io";

const io = new Server({
    cors:{
        origin: "https://scaling-garbanzo-p4vvw4g977536gg-5173.app.github.dev"
    }
});

io.listen(3001);

io.on("connection", (Socket) => {
    console.log("user connected");

    Socket.emit("hello");

    Socket.on("disconnect", () => {

        console.log("user disconnected");
    })
});