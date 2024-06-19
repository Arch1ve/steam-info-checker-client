import express from "express"
import path from "node:path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();

const PORT = 8080

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT);

console.log("listening on port " + PORT)