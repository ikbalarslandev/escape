export interface ISection {
  id: number;
  location: ILocation;
  question: ITextQs | IImageQs;
  info?: IInfo;
}
export interface ILocation {
  name: string;
  description: string;
  imgUrls: string[];
  mapsUrl: string;
}
// question types
export interface ITextQs {
  type: "text";
  qs: string;
  answer: string;
  hints: string[];
}
export interface IImageQs {
  type: "image";
  qs: string;
  answer: string;
  options: string[];
  hints: string[];
}

// info
export interface IInfo {
  object?: number;
  desc: string;
  content: string;

  collected: { objects: number[]; seals: number[] };
}
