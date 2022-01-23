import {
  IFind,
  NullableId,
  mergeMethods,
  ICreate,
  IPatch,
  IRemove,
} from "../../lib/middlewares/service";

const find: IFind<string> = async (id: NullableId, param?: { query?: {} }) => {
  return "find OK";
};

const create: ICreate<string> = async (data, param?: { query?: {} }) => {
  return "create OK";
};

const patch: IPatch<string> = async (id, data, param?: { query?: {} }) => {
  return "patch OK";
};

const remove: IRemove<string> = async (id, param?: { query?: {} }) => {
  return "remove OK";
};

const health = mergeMethods({
  find,
  create,
  patch,
  remove,
});

export default health;
