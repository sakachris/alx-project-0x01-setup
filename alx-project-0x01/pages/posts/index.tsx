import Button from "@/components/common/Button";
import PostCard from "@/components/common/PostCard";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-3xl font-bold">Posts Page</h1>
      <p>This is where the posts will appear.</p>
      <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
      <PostCard title="Sample Post" description="This is a sample post description." />
      <Footer />
    </div>
  );
};

export default PostsPage;