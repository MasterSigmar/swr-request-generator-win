/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISWRConfig, useRequest } from "./useRequest";
import { IResponseError } from "../types";
import { client } from "./client";
import { AxiosRequestConfig, AxiosResponse } from "axios";

/*
 *  this file is generated by @openapi-integration/swr-request-generator.
 *  please do not modify it manually.
 */

export const updateBookJourneyUsingPostRequest = (
  {
    journeyId,
    journeyType,
    updateBookJourneyUsingPostRequest,
  }: {
    journeyId: string;
    journeyType: string;
    updateBookJourneyUsingPostRequest: IStatusFormData;
  },
  axiosConfig?: AxiosRequestConfig,
) =>
  client.request<{ [key: string]: any }, AxiosResponse<{ [key: string]: any }>>({
    url: `/book-journey/${journeyId}/${journeyType}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: updateBookJourneyUsingPostRequest,
    ...axiosConfig,
  });

export const deleteAttachmentUsingDeleteRequest = (
  {
    id,
    authorities,
    userId,
    userName,
  }: {
    authorities: string;
    id: string;
    userId: string;
    userName: string;
  },
  axiosConfig?: AxiosRequestConfig,
) =>
  client.request<undefined, AxiosResponse<undefined>>({
    url: `/${id}`,
    method: "delete",
    headers: { Authorities: authorities, "User-Id": userId, "User-Name": userName },
    ...axiosConfig,
  });

export const useDownloadUsingGetRequest = (
  {
    id,
    accept,
  }: {
    accept: string;
    id: string;
  },
  SWRConfig?: ISWRConfig<IResource, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useRequest<IResource, IResponseError>(
    {
      url: `/${id}`,
      method: "get",
      headers: { Accept: accept },
      responseType: "blob",
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useFindBookByIdUsingGetRequest = (
  {
    id,
  }: {
    id: string;
  },
  SWRConfig?: ISWRConfig<IBookDetailVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useRequest<IBookDetailVo, IResponseError>(
    {
      url: `/book/${id}`,
      method: "get",
      headers: {},
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useGetDocumentByIdUsingGetRequest = (
  {
    documentId,
    from,
  }: {
    documentId: string;
    from?: keyof typeof FromFrom;
  },
  SWRConfig?: ISWRConfig<IDocumentVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useRequest<IDocumentVo, IResponseError>(
    {
      url: `/documents/${documentId}/doc`,
      method: "get",
      headers: {},
      params: {
        from,
      },
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useGetScheduleDetailsByDateUsingGetRequest = (
  {
    scheduleDate,
    roleId,
  }: {
    roleId?: string;
    scheduleDate: number;
  },
  SWRConfig?: ISWRConfig<IScheduleVo[], IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useRequest<IScheduleVo[], IResponseError>(
    {
      url: `/schedules`,
      method: "get",
      headers: {},
      params: {
        scheduleDate,
        roleId,
      },
      ...axiosConfig,
    },
    SWRConfig,
  );

export const updateBookByIdUsingPutRequest = (
  {
    id,
    updateBookByIdUsingPutRequest,
  }: {
    id: string;
    updateBookByIdUsingPutRequest: IUpdateBookRequest;
  },
  axiosConfig?: AxiosRequestConfig,
) =>
  client.request<undefined, AxiosResponse<undefined>>({
    url: `/book/${id}`,
    method: "put",
    headers: { "Content-Type": "application/json" },
    data: updateBookByIdUsingPutRequest,
    ...axiosConfig,
  });

export const uploadAttachmentUsingPostRequest = (
  {
    authorities,
    userId,
    userName,
    uploadAttachmentUsingPostRequest,
  }: {
    authorities: string;
    uploadAttachmentUsingPostRequest: FormData;
    userId: string;
    userName: string;
  },
  axiosConfig?: AxiosRequestConfig,
) =>
  client.request<IAttachmentBo, AxiosResponse<IAttachmentBo>>({
    url: `/`,
    method: "post",
    headers: {
      Authorities: authorities,
      "User-Id": userId,
      "User-Name": userName,
      "Content-Type": "multipart/form-data",
    },
    data: uploadAttachmentUsingPostRequest,
    ...axiosConfig,
  });

export const uploadDocumentUsingPostRequest = (
  {
    uploadDocumentUsingPostRequest,
  }: {
    uploadDocumentUsingPostRequest: IFileUploadReq;
  },
  axiosConfig?: AxiosRequestConfig,
) =>
  client.request<undefined, AxiosResponse<undefined>>({
    url: `/documents`,
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    data: uploadDocumentUsingPostRequest,
    ...axiosConfig,
  });

export enum FromFrom {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export interface IAttachmentBo {
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
}

export interface IBookDetailVo {
  attachment?: IScheduleVo;
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
  type?: keyof typeof BookDetailVoType;
}

export enum BookDetailVoType {
  "INTERVENTION_RUN" = "INTERVENTION_RUN",
  "CASE_CREATION_DATE" = "CASE_CREATION_DATE",
}

export interface IBookVo {
  address?: string;
  price?: string;
}

export interface IBookingResponse {
  data: IDocumentVo;
  errors?: IErrorInfo[];
}

export interface IDocumentVo {
  attachment?: IBookDetailVo;
  authorName?: string;
  createdDate?: number;
  id?: string;
  note?: string;
  title?: string;
}

export interface IErrorInfo {
  errorMessage?: string;
}

export interface IFile {
  absolute?: boolean;
  absoluteFile?: IFile;
  absolutePath?: string;
  canonicalFile?: IFile;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: IFile;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
}

export interface IFileUploadReq {
  file: FormData;
}

export interface IInputStream {
  [key: string]: any;
}

export interface IResource {
  description?: string;
  file?: IFile;
  filename?: string;
  inputStream?: IInputStream;
  open?: boolean;
  readable?: boolean;
  uri?: IUri;
  url?: IUrl;
}

export interface IScheduleVo {
  schedules?: IBookVo[][];
  shiftId?: string;
  team?: string;
}

export interface IStatusFormData {
  [key: string]: any;
}

export interface IUri {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface IUrl {
  authority?: string;
  content?: { [key: string]: any };
  defaultPort?: number;
  deserializedFields?: IUrlStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  serializedHashCode?: number;
  userInfo?: string;
}

export interface IUrlStreamHandler {
  [key: string]: any;
}

export interface IUpdateBookRequest {
  birthCountry?: string;
  citizenship?: string;
  dateOfBirth?: number;
  employmentStatus?: string;
  ethnicity?: string;
  gender?: string;
  idNumber?: string;
  idType?: string;
  roleId?: string;
  spokenLanguage?: string[];
}
