import Hero from "./lib/Hero";
import rootRouter from "./routers";

const app = new Hero();

export default app;

app.use(rootRouter.route);
