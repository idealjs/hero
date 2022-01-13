import { Http2ServerRequest, Http2ServerResponse } from "http2";

export interface IHeroConfig {}

export type OnRequestHandler = (
  request: Http2ServerRequest,
  response: Http2ServerResponse
) => void;

export interface IHeroRequest extends Http2ServerRequest {}

export interface IHeroResponse extends Http2ServerResponse {}

export type HeroMiddleware =
  | ((req: IHeroRequest, res: IHeroResponse) => void)
  | ((req: IHeroRequest, res: IHeroResponse) => Promise<void>);

export type UseHeroMiddleware = (heroMiddleware: HeroMiddleware) => void;
