import io from "socket.io-client";

let socet;

export const init = () =>{
    socet = io('http://localhost:3001',{
        transports : ["websocket"],
    });
    socet.on("connect",() =>{
        console.log("Sunucuya bağlantı başarıyla gerçekleşti.");
    });
}

export const send = (color) =>{
  socet.emit("newColor",color);
};

export const  subscribe = (cb) => {
    socet.on("receive",(color) =>{
        console.log(color);
        cb(color);
    })
}