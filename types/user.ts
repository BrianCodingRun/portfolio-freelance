export type UserType = {
  _id: string;
  avatar: {
    url: string;
  };
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  date_of_birth: Date | string;
  bio: string;
};
