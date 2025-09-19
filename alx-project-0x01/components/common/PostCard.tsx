import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;

// import React from "react";
// import { PostCardProps } from "@/interfaces/";

// const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
//   return (
//     <div className="border p-4 rounded shadow-sm">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// export default PostCard;
