import { IFind, NullableId } from "../../lib/middlewares/service";

const find: IFind<string> = async (id: NullableId, param?: { query?: {} }) => {
  return "{}";
};
