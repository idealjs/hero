import http2 from "http2";

const client = http2.connect("http://localhost:3001");

const req = client.request({ ":method": "GET", ":path": "/" });

req.on("response", (responseHeaders) => {
  console.log("test test", responseHeaders);
  // do something with the headers
});
req.on("data", (chunk) => {
  // do something with the data
});
req.on("end", () => client.destroy());
