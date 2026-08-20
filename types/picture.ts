export type Picture = {
  _id: string;
  name: string;
  url: string;
  createdAt: string;
  project?: {
    _id: string;
    title: string;
  };
};
