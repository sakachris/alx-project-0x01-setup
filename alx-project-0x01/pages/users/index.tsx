import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps, UsersPageProps, UserData } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: users.length + 1 } as UserProps;
    setUsers((prev) => [...prev, newUserWithId]);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-1 overflow-y-auto">
        {/* Top bar with title + button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Directory</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-700 px-4 py-2 rounded-full text-white hover:bg-green-800"
          >
            Add User
          </button>
        </div>

        {/* User grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
