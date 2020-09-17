// import { App } from '@tinyhttp/app'
// import formidable from 'formidable'
const { App } = require("@tinyhttp/app");
const { logger } = require("@tinyhttp/logger");
const { cors } = require("@tinyhttp/cors");
const formidable = require("formidable");
const app = new App();

app
  .use(logger())
  .use(
    cors({
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    })
  )
  .post("/api/upload", (req, res, next) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      res.json({ fields, files });
    });
  })
  .get("/", (_, res) => void res.send("<h1>Hello World</h1>"));
app.listen(4000, () =>
  console.log("Server listening on http://localhost:4000")
);
