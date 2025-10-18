export interface ISection {
  id: number;
  location: ILocation;
  question: ITextQs;
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
