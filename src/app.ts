import Hero from "./lib/Hero";
import services from "./services";
const app = new Hero();

app.use(services);

export default app;
