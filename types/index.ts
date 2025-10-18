export interface ISection {
  id: number;
  location: ILocation;
  question: ITextQs;
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
  qs: string;
  answer: string;
  hints: string[];
}

// info
export interface IInfo {
  object?: number;
  desc: string;
  content: string;

  collected: { objects: number[]; seals: number[] };
}
