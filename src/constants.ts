export const ERROR_MESSAGES = {
  INVALID_JSON_FILE_ERROR: "Your json file is invalid, please check it!",
  INVALID_FILE_FORMAT: "Your input file is invalid, please check if it json or yaml!",
  FETCH_CLIENT_FAILED_ERROR: "Fetch client failed! Please check your network or ts-codegen.config.ts file.",
};
export const LOG_MESSAGE = {
  GENERATING: "generating...",
  SUCCESSFUL: "successful!!!",
  READING: "reading swagger schema from local file...\n",
  GETTING_FROM_REMOTE: (index: number) => `getting swagger schema from client ${index + 1}...\n`,
};
export const HTTP_METHODS = ["get", "post", "put", "delete", "patch", "options", "head"];
export const SLASH = "/";
export const FILE_TIP = `\n/* 
    *  this file is generated by @openapi-integration/swr-request-generator.
    *  please do not modify it manually.
    */\n
  `;
export const ENUM_SUFFIX = `#EnumTypeSuffix`;
