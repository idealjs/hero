import { URL } from "url";
import { HeroMiddleware } from "../type";

export type Id = number | string;
export type NullableId = Id | null;

export interface Paginated<T> {
  total: number;
  limit: number;
  skip: number;
  data: T[];
}

export interface IFind<R extends unknown = any> {
  <P extends IParams = {}>(id: NullableId, params?: P): Promise<
    R | R[] | Paginated<R>
  >;
}

export interface ICreate<R extends unknown = any> {
  <P extends IParams = {}>(data: R, params?: P): Promise<R>;
}

export interface IUpdate<R extends unknown = any> {
  <P extends IParams = {}>(id: NullableId, data: R, params?: P): Promise<R>;
}

export interface IPatch<R extends unknown = any> {
  <P extends IParams = {}>(
    id: NullableId,
    data: Partial<R>,
    params?: P
  ): Promise<R>;
}

export interface IRemove<R extends unknown = any> {
  <P extends IParams = {}>(id: NullableId, params?: P): Promise<R>;
}

interface IQuery {
  [key: string]: any;
}

export interface IParams {
  query?: IQuery;
}

export const mergeMethods = (methods: {
  find?: IFind;
  create?: ICreate;
  update?: IUpdate;
  patch?: IPatch;
  remove?: IRemove;
}): HeroMiddleware => {
  console.debug("[debug] mergeMethods");
  const { find, create, update, patch, remove } = methods;

  return (req, res) => {
    console.log("test test");
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    req.stream;
    // req.
    switch (req.method) {
      case "GET":
        find && find;
        break;
      case "POST":
        break;
      case "PUT":
        break;
      case "PATCH":
        break;
      case "DELETE":
        break;
      default:
        break;
    }
  };
};

export const mergeServices = (services: {
  [path: string]: HeroMiddleware;
}): HeroMiddleware => {
  console.debug("[debug] mergeServices");
  return (req, res) => {
    console.log("test test");
    return services[new URL(req.url).pathname](req, res);
  };
};
