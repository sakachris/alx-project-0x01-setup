export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface PostCardProps {
  title: string;
  description: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UsersPageProps {
  posts: UserProps[];
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
  };
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}
