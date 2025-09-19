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
