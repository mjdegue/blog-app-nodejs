import bodyParser from "body-parser";
import { dirname, resolve } from "path";

export const Config = {
  PORT: 3000,
  BODY_PARSER: bodyParser.urlencoded({ extended: true }),
  ROOT_DIR: process.argv[1] ? dirname(process.argv[1]) : resolve("."),
};
