import { Application, Router } from "../deps.ts";

const app = new Application();

const URL = "http://localhost";
const PORT = 3001;

const router = new Router();

router.get("/", (c) => {
  c.response.body = "Hello Deno";
});

app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Server runninf at: ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
