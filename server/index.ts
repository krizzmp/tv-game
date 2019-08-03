import * as express from 'express'
import { createServer } from 'http'
import * as io_ from 'socket.io'
import { action, actionReducers, initialState, State } from '../common/state'

const app = express();
const http = createServer(app);
const io = io_(http);
let state: State = initialState;
io.on("connection", function(socket) {
  io.to(socket.id).emit("res", state);
  socket.on("t", (args: action) => {
    state = actionReducers.reducers[args.type](state, args.payload);
    io.emit("res", state);
  });
});
http.listen(3000, function() {
  console.log("listening on *:3000");
});
