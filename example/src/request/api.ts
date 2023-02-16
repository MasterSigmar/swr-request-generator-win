/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISWRConfig, useGetRequest } from "./useGetRequest";
import { IResponseError } from "../types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { SWRMutationConfig, useMutationRequest } from "src/request/useMutationRequest";

/*
 *  this file is generated by @openapi-integration/swr-request-generator.
 *  please do not modify it manually.
 */

export const useUpdateBookJourneyUsingPostRequest = (
  {
    journeyId,
    journeyType,
  }: {
    journeyId: string;
    journeyType: string;
  },
  mutationConfig?: SWRMutationConfig<
    UpdateBookJourneyUsingPostRequest,
    AxiosResponse<{ [key: string]: any }>,
    IResponseError
  >,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<UpdateBookJourneyUsingPostRequest, AxiosResponse<{ [key: string]: any }>, IResponseError>({
    url: `/book-journey/${journeyId}/${journeyType}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useDeleteAttachmentUsingDeleteRequest = (
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
  mutationConfig?: SWRMutationConfig<undefined, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<undefined, AxiosResponse<undefined>, IResponseError>({
    url: `/${id}`,
    method: "delete",
    headers: { Authorities: authorities, "User-Id": userId, "User-Name": userName },
    mutationConfig,
    axiosConfig,
  });

export const useDownloadUsingGetRequest = (
  {
    id,
    accept,
  }: {
    accept: string;
    id: string;
  },
  SWRConfig?: ISWRConfig<Resource, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<Resource, IResponseError>(
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
  SWRConfig?: ISWRConfig<BookDetailVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<BookDetailVo, IResponseError>(
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
    from?: FromFrom;
  },
  SWRConfig?: ISWRConfig<DocumentVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<DocumentVo, IResponseError>(
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
    fruit,
  }: {
    fruit: Fruit;
    roleId?: string;
    scheduleDate: number;
  },
  SWRConfig?: ISWRConfig<ScheduleVo[], IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<ScheduleVo[], IResponseError>(
    {
      url: `/schedules`,
      method: "get",
      headers: {},
      params: {
        scheduleDate,
        roleId,
        fruit,
      },
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useUpdateBookByIdUsingPutRequest = (
  {
    id,
  }: {
    id: string;
  },
  mutationConfig?: SWRMutationConfig<UpdateBookByIdUsingPutRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<UpdateBookByIdUsingPutRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/book/${id}`,
    method: "put",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useUpdatePetsRequest = (
  mutationConfig?: SWRMutationConfig<UpdatePetsRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<UpdatePetsRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/pets`,
    method: "patch",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useUploadDocumentUsingPostRequest = (
  mutationConfig?: SWRMutationConfig<UploadDocumentUsingPostRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<UploadDocumentUsingPostRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/documents`,
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    mutationConfig,
    axiosConfig,
  });

export const useRequest = (
  {
    authorities,
    userId,
    userName,
  }: {
    authorities: string;
    userId: string;
    userName: string;
  },
  mutationConfig?: SWRMutationConfig<Request, AxiosResponse<AttachmentBo>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<Request, AxiosResponse<AttachmentBo>, IResponseError>({
    url: `/`,
    method: "post",
    headers: { Authorities: authorities, "User-Id": userId, "User-Name": userName, "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export interface UpdateBookJourneyUsingPostRequest {
  body: StatusFormData;
}

export interface GetDocumentByIdUsingGetRequest {
  query: {
    from?: FromFrom;
  };
}

export interface GetScheduleDetailsByDateUsingGetRequest {
  query: {
    fruit: Fruit;
    roleId?: string;
    scheduleDate: number;
  };
}

export interface UpdateBookByIdUsingPutRequest {
  body: UpdateBookRequest;
}

export interface UpdatePetsRequest {
  body: Cat | Dog | null;
}

export interface UploadDocumentUsingPostRequest {
  body: FileUploadReq;
}

export interface Request {
  body: FormData;
}

export enum FromFrom {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export interface AttachmentBo {
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
}

export interface BookDetailVo {
  CreatedDate?: number;
  attachment?: ScheduleVo;
  author_name?: string;
  filename?: string;
  id?: string;
  mimeType?: string;
  path?: string;
  type?: BookDetailVoType;
}

export enum BookDetailVoType {
  "INTERVENTION_RUN" = "INTERVENTION_RUN",
  "CASE_CREATION_DATE" = "CASE_CREATION_DATE",
}

export interface BookVo {
  address?: string | null;
  price?: string;
}

export interface BookingResponse {
  data: DocumentVo;
  errors?: ErrorInfo[];
}

export interface Cat {
  age?: number;
  hunts?: boolean;
}

export interface DocumentVo {
  attachment?: BookDetailVo;
  authorName?: string;
  createdDate?: number;
  id?: string;
  note?: string;
  title?: string;
}

export interface Dog {
  bark?: boolean;
  breed?: DogBreed;
}

export enum DogBreed {
  "Dingo" = "Dingo",
  "Husky" = "Husky",
  "Retriever" = "Retriever",
  "Shepherd" = "Shepherd",
}

export interface ErrorInfo {
  errorMessage?: string;
}

export interface File {
  absolute?: boolean;
  absoluteFile?: File;
  absolutePath?: string;
  canonicalFile?: File;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: File;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
}

export interface FileUploadReq {
  file: FormData;
}

export enum Fruit {
  "Apple" = "Apple",
  "Orange" = "Orange",
  "Pear" = "Pear",
}

export interface InputStream {
  [key: string]: any;
}

export interface Resource {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: Uri;
  url?: Url;
}

export interface ScheduleVo {
  schedules?: BookVo[][] | null;
  shiftId?: string;
  team?: string;
}

export interface StatusFormData {
  [key: string]: any;
}

export interface Uri {
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

export interface Url {
  authority?: string;
  content?: { [key: string]: any };
  defaultPort?: number;
  deserializedFields?: UrlStreamHandler;
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

export interface UrlStreamHandler {
  [key: string]: any;
}

export interface UpdateBookRequest {
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
