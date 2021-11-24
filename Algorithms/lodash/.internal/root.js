import freeGlobal from "./freeGlobal";

const freeGlobalThis =
  typeof globalThis === "object" &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis;

const freeSelf = typeof self === "object" && self !== null && self.Object === Object && self;

export default root;
