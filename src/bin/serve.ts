import { Server } from "../objects";

const server = new Server({
    port: 4444,
    message: "Executando servidor"
});

server.execute();
