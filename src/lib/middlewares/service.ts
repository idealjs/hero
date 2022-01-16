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
