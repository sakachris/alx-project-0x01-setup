import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id}
              key={key}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;

// import Button from "@/components/common/Button";
// import PostCard from "@/components/common/PostCard";
// import Footer from "@/components/layout/Footer";
// import Header from "@/components/layout/Header";
// import React from "react";

// const PostsPage: React.FC = () => {
//   return (
//     <div className="p-8">
//       <Header />
//       <h1 className="text-3xl font-bold">Posts Page</h1>
//       <p>This is where the posts will appear.</p>
//       <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
//       <PostCard title="Sample Post" description="This is a sample post description." />
//       <Footer />
//     </div>
//   );
// };

// export default PostsPage;
