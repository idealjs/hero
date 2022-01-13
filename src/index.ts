import http2 from "http2";
import path from "path";
import fs from "fs";

import app from "./app";

const server = http2.createSecureServer(
  {
    key: fs.readFileSync(path.resolve(__dirname, "../localhost.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "../localhost.crt")),
  },
  app.onRequestHandler
);

server.listen(3001);
