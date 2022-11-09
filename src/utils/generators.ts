import { camelCase, compact, Dictionary, get, isEmpty, reduce, replace, some } from "lodash";
import { isNumber } from "./specifications";
import { IResolvedPath } from "../types";
import { ENUM_SUFFIX } from "../constants";
import { addPrefixForInterface, arrayToObject, toCapitalCase, toTypes } from "./formatters";

export const generateEnums = (definitions: Dictionary<any>, key: string) => {
  if (isEmpty(definitions)) {
    return "";
  }

  const enums = definitions[key];
  const hasNumber = some(enums, (enumValue) => isNumber(enumValue));
  const enumName = replace(key, ENUM_SUFFIX, "");

  return hasNumber
    ? `export type ${enumName} = ${enums.map((item: string | number) => JSON.stringify(item)).join("|")}`
    : `export enum ${enumName} ${JSON.stringify(arrayToObject(enums)).replace(/:/gi, "=")}`;
};

export const generateFunctionName = (operationId?: string) => `use${toCapitalCase(camelCase(operationId))}Request`;

export const generateClientName = (method: string, responseType: any, requestBodyTypes?: string) =>
  method === "get"
    ? `useGetRequest<${responseType || undefined}, IResponseError>`
    : `useMutationRequest<${requestBodyTypes}, AxiosResponse<${responseType || undefined}>, IResponseError>`;

export const generateRequestBodyAndParams = (
  requestBodyType: any,
  requestQueryType: any,
  operationId: string = "",
): [string, { body: any; query: any }] | [undefined, undefined] => {
  if (isEmpty(requestBodyType) && isEmpty(requestQueryType)) {
    return [undefined, undefined];
  }

  return [
    `${addPrefixForInterface(toCapitalCase(operationId))}Request`,
    { query: requestQueryType, body: requestBodyType },
  ];
};

// TODO: 1.refactor THeader logic to align with resolvedPath.xxxParams
// TODO: 2.add response type for download file
export const generateRequestArguments = (resolvedPath: IResolvedPath) => {
  const queryType = resolvedPath.method === "get" ? resolvedPath.TReqQuery : {};
  const requestType = {
    ...queryType,
    ...resolvedPath.TReqPath,
    ...resolvedPath.THeader,
  };
  const argumentTypes = !isEmpty(requestType) ? toTypes(requestType) : undefined;
  const queryParams = resolvedPath.method === "get" ? resolvedPath.queryParams : [];
  const requestParamList = compact([
    ...resolvedPath.pathParams,
    ...queryParams,
    ...Object.keys(resolvedPath.THeader),
  ]).map((param) => camelCase(param));

  const requestParams = requestParamList.length === 0 ? "" : `{${requestParamList.join(",")}}:${argumentTypes}`;

  return resolvedPath.method === "get"
    ? `${requestParams ? requestParams + ", " : ""}SWRConfig?: ISWRConfig<${
        resolvedPath.TResp || undefined
      }, IResponseError>, axiosConfig?: AxiosRequestConfig`
    : `${requestParams ? requestParams + ", " : ""}axiosConfig?: AxiosRequestConfig`;
};

export const generateHeader = (
  hasBody: boolean,
  contentTypes: { [operationId: string]: string },
  operationId?: string,
  header?: Record<string, string>,
) => {
  const result = reduce(header, (result, _, key) => result + `"${key}": ` + camelCase(key) + ", ", "");
  const contentType = hasBody ? `"Content-Type": "${get(contentTypes, operationId ?? "", "application/json")}"` : "";

  return `headers: { ${result}${contentType}},`;
};

export const generateResponseType = (axiosHeaderConfig: string) =>
  axiosHeaderConfig.includes('"Accept":') ? 'responseType: "blob",' : "";
