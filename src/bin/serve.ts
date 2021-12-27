import { Server } from "../objects";
import router from "../router/api";

const server = new Server({
    port: 4444,
    message: "Executando servidor"
});

server.use("/api", router);

server.execute();
