import { HeroMiddleware } from "../type";

interface IRouterConfig {
  path: string;
  method?: string;
}

const createRouter = (
  config: IRouterConfig,
  handler: HeroMiddleware
): HeroMiddleware => {
  return handler;
};

export default createRouter;

const combineRouters = (): HeroMiddleware => {
  return () => {};
};
