
export interface ResponseCommon {
  error: boolean;
  message: string;
  body: {};
}

export interface CategoryData{
  name: string;
  cn: string;
  icon: string;
}
export type ResponseCategoryAll = ResponseCommon&{
  body: {
    categoryList: string[];
  };
}

export interface SoftwareData{
  name: string;
  category: string;
  icon: string;
  link: string;
  content: string;
}

export type ResponseSoftwareList = ResponseCommon&{
  body: {
    softwareList: SoftwareData[];
  };
}

export type ResponseSoftware = ResponseCommon&{
  body: SoftwareData;
}
