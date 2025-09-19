import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

const UsersPage: React.FC = () => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-3xl font-bold">Users Page</h1>
      <p>This is where the users will appear.</p>
      <Footer />
    </div>
  );
};

export default UsersPage;
