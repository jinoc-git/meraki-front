export interface Person {
  firstname: null | string;
  lastname: null | string;
  middlename: null | string;
  organization: null | string;
  qualifier: null | string;
  rank: null | number;
  role: null | string;
  title: null | string;
}

export interface Byline {
  organization: null | string;
  original: string;
  person: Person[];
}

export interface Headline {
  content_kicker: null | string;
  kicker: null | string;
  main: string;
  name: null | string;
  print_headline: null | string;
  seo: null | string;
  sub: null | string;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Legacy {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
}

export interface Multimedia {
  caption: null | string;
  credit: null | string;
  crop_name: string;
  width: number;
  height: number;
  legacy: Legacy;
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
}

export interface ArticleType {
  abstract: string;
  byline: Byline;
  document_type: string;
  headline: Headline;
  keywords: Keyword[];
  lead_paragraph: string;
  multimedia: Multimedia;
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}
