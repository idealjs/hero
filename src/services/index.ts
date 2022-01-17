import { mergeServices } from "../lib/middlewares/service";
import health from "./health/health.service";

const services = mergeServices({
  health,
});

export default services;
