import http from "http";

const server = http.createServer((req, res) => {
     res.end("<h2>SIH Internal</h2>");
});

server.listen(5111,() => {
    console.log("SIH server is running");
})
