import path from "path";
import {createServer} from 'http';
import express from 'express'
import { Server, Socket } from "socket.io";

const app = express();

export default function videoServer() {

  const __dirname = path.resolve();

  const httpServer = createServer();
  // const server = http.createServer(app);
  // const io = require("socket.io")(server,
  //   {cors: '*'}
  // );
  // import {Server} from 'socket.io'
  const io = new Server(httpServer, {cors: '*'})

  const port = process.env.PORT || 5002;

  app.use(express.static(path.join(__dirname, "")));

  httpServer.listen(port, () => {
    console.log("Listening to port", port);
  });

  let userConnections = [];

  io.on("connection", (socket) => {
    console.log("Socket id is ", socket.id);
    socket.on("userconnect", (data) => {
      console.log("userconnect ", data.displayName, data.meetingid);
      // console.log(userConnections);
      var other_users = userConnections.filter(
        (p) => p.meeting_id == data.meetingid
      );
      userConnections.push({
        connectionId: socket.id,
        user_id: data.displayName,
        meeting_id: data.meetingid,
      });

      other_users.forEach((v) => {
        socket.to(v.connectionId).emit("inform_others_about_me", {
          other_user_id: data.displayName,
          connId: socket.id,
        });
      });
      socket.emit("inform_me_about_other_user", other_users);
    });
    socket.on("SDPProcess", (data) => {
      socket.to(data.to_connid).emit("SDPProcess", {
        message: data.message,
        from_connid: socket.id,
      });
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
      var disUser = userConnections.find((p) => p.connectionId == socket.id);
      if (disUser) {
        var meetingid = disUser.meeting_id;
        userConnections = userConnections.filter(
          (p) => p.connectionId != socket.id
        );

        var list = userConnections.filter((p) => p.meeting_id == meetingid);

        list.forEach((v) => {
          socket.to(v.connectionId).emit("inform_other_about_disconnected_user", {
            connId: socket.id,
          });
        });
      }
    });
  });

}