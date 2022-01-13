import { HeroMiddleware } from "../type";

type Path = string;

class Router {
  constructor() {}

  private routerMiddlewares: {
    method: string;
    path: string;
    middleware: HeroMiddleware;
  }[] = [];

  // common
  public use = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "COMMON",
      path,
      middleware,
    });
  };

  // get
  public get = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "GET",
      path,
      middleware,
    });
  };

  // post
  public create = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "POST",
      path,
      middleware,
    });
  };

  // update
  public update = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "PATCH",
      path,
      middleware,
    });
  };

  // put
  public upsert = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "PUT",
      path,
      middleware,
    });
  };

  // delete
  public remove = (path: Path, middleware: HeroMiddleware) => {
    this.routerMiddlewares.push({
      method: "DELETE",
      path,
      middleware,
    });
  };

  public route: HeroMiddleware = (req, res) => {
    console.log("test test", this.routerMiddlewares);
    this.routerMiddlewares.forEach((routerMiddleware) => {
      if (
        (routerMiddleware.method === req.method &&
          routerMiddleware.path === req.url) ||
        (routerMiddleware.method === "COMMON" &&
          routerMiddleware.path === req.url)
      ) {
        routerMiddleware.middleware(req, res);
      }
    });
  };
}

export default Router;
