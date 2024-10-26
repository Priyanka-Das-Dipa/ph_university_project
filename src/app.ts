import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello World! Server is running, we are using Nodemon this is from watch!!!"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
