import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createProxyMiddleware } from "http-proxy-middleware";
import expressSanitizer from "express-sanitizer";

import https from "https";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  key: fs.readFileSync("./create-cert-key.pem"),
  cert: fs.readFileSync("./create-cert.pem"),
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://gateway-server-new.dev-twin.world",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS server started on port ${PORT}`);
});
