import {
  HeroMiddleware,
  IHeroConfig,
  OnRequestHandler,
  UseHeroMiddleware,
} from "./type";

interface Hero {
  onRequestHandler: OnRequestHandler;
  use: UseHeroMiddleware;
}

class Hero {
  middlewares: HeroMiddleware[] = [];
  constructor(config?: IHeroConfig) {}

  public onRequestHandler: OnRequestHandler = async (request, response) => {
    for await (const middleware of this.middlewares) {
      await middleware(request, response);
    }
  };

  public use: UseHeroMiddleware = (middleware) => {
    this.middlewares.push(middleware);
  };
}

export default Hero;
