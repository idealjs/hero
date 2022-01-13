import Router from "../lib/middlewares/Router";
import health from "./health";

const router = new Router();

router.use("/", (req, res) => {
  res.end("hello world\n");
});

router.use("/health", health.route);

export default router;
