"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var import_axios = __toESM(require("axios"));
var import_express = __toESM(require("express"));
var import_dotenv = __toESM(require("dotenv"));
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.use(import_express.default.text());
import_dotenv.default.config();
var BOT_ID = process.env.BOT_ID;
var ROOM_ID = process.env.ROOM_ID;
var PORT = process.env.PORT || 8e3;
app.post("/send-scalping-alert", (req, res) => __async(exports, null, function* () {
  const request = {
    chat_id: -1002136418188,
    text: req.body
  };
  import_axios.default.post(
    `https://api.telegram.org/${BOT_ID}:${ROOM_ID}/sendMessage`,
    request,
    {
      headers: { "Content-Type": "application/json" }
    }
  ).then((data) => console.log(data)).catch((err) => console.log(err));
}));
app.get("/hello", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
