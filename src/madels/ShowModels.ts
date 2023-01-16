export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: [name: string];
  status: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};

export type Cast = {
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
};
export type showCast = {
  show: Show[];
  cast: Cast[];
};
