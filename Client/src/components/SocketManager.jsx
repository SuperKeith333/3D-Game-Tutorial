import { useEffect } from "react";
import { io} from "socket.io-client"
import { useAtom, atom} from "jotai"

export const socket = io("https://scaling-garbanzo-p4vvw4g977536gg-3001.app.github.dev");
export const charactersAtom = atom([]);


export const SocketManager = () => {
    const [_characters, setCharacters] = useAtom(charactersAtom);
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

        function onCharaters(value){
            setCharacters(value);
            console.log(value);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("hello", onHello);
        socket.on("characters", onCharaters);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("hello", onHello);
            socket.off("characters", onCharaters);
        }

    }, [])
}