import Router from "../lib/middlewares/Router";

const router = new Router();

router.use("/", (req, res) => {
  res.end("alive\n");
});

export default router;
