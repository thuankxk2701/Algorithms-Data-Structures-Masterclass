import root from "./.internal/root";

const freeExports = typeof exports === "object" && exports !== null && !exports.nodeType && exports;
const freeModule =
  freeExports && typeof module === "object" && module !== null && !module.nodeType && module;
const moduleExports = freeModule && freeModule.exports === freeExports;
const Buffer = moduleExports ? root.Buffer : undefined;
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

// * isBuffer(new Buffer(2))
//  => true
//  isBuffer(new Uint8Array(2))
//  => false

const isBuffer = nativeIsBuffer || (() => false);

export default isBuffer;
