import { useEffect } from "react";
import { io} from "socket.io-client"

export const socket = io("https://scaling-garbanzo-p4vvw4g977536gg-3001.app.github.dev");

export const SocketManager = () => {
    useEffect(() => {
        function onConnect(){
            console.log("connected");
        }
        function onDisconnect(){
            console.log("disconnected");
        }

        function onHello(){
            console.log("hello");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("hello", onHello);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("hello", onHello);
        }

    }, [])
}