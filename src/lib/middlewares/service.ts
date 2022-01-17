import { HeroMiddleware } from "../type";

export type Id = number | string;
export type NullableId = Id | null;

export interface Paginated<T> {
  total: number;
  limit: number;
  skip: number;
  data: T[];
}

export interface IFind<R extends unknown = unknown> {
  <P extends IParams = {}>(id: NullableId, params?: P): Promise<
    R | R[] | Paginated<R>
  >;
}

export interface ICreate<R extends unknown = unknown> {
  <P extends IParams = {}>(data: R, params?: P): Promise<R>;
}

export interface IUpdate<R extends unknown = unknown> {
  <P extends IParams = {}>(id: NullableId, data: R, params?: P): Promise<R>;
}

export interface IPatch<R extends unknown = unknown> {
  <P extends IParams = {}>(
    id: NullableId,
    data: Partial<R>,
    params?: P
  ): Promise<R>;
}

export interface IRemove<R extends unknown = unknown> {
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
  return (req, res) => {
    console.log("test test");
    switch (req.method) {
      case "GET":
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
  return () => {
    console.log("test test");
  };
};
