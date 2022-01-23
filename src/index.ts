import http2 from "http2";
import path from "path";
import fs from "fs";

import app from "./app";

const server = http2.createSecureServer({
  key: fs.readFileSync(path.resolve(__dirname, "../localhost.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "../localhost.crt")),
});

// server.on("stream", app.streamListener);
server.on("stream", (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    "Access-Control-Allow-Origin": "*",
    "content-type": "text/html; charset=utf-8",
    ":status": 200,
  });
  stream.end("<h1>Hello World</h1>");
});

server.listen(3001);
