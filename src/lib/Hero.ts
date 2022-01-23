import {
  HeroMiddleware,
  IHeroConfig,
  OnRequestHandler,
  StreamListener,
  UseHeroMiddleware,
} from "./type";

interface Hero {
  // onRequestHandler: OnRequestHandler;
  streamListener: StreamListener;
  use: UseHeroMiddleware;
}

class Hero {
  private middlewares: HeroMiddleware[] = [];
  constructor(config?: IHeroConfig) {}

  public streamListener: StreamListener = async (stream, headers, flags) => {
    
    for await (const middleware of this.middlewares) {
      // await middleware(request, response);
    }
  };
  // public onRequestHandler: OnRequestHandler = async (request, response) => {
  //   for await (const middleware of this.middlewares) {
  //     await middleware(request, response);
  //   }
  // };

  public use: UseHeroMiddleware = (middleware) => {
    this.middlewares.push(middleware);
  };
}

export default Hero;
