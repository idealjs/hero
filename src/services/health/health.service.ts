import { IFind, NullableId, mergeMethods } from "../../lib/middlewares/service";

const find: IFind<string> = async (id: NullableId, param?: { query?: {} }) => {
  return "OK";
};

const health = mergeMethods({
  find,
});

export default health;
