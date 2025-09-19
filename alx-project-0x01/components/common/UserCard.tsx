import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* User Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      {/* Contact Info */}
      <div className="text-gray-700 space-y-1">
        <p>
          <span className="font-medium">📧 Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">📞 Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">🌐 Website:</span>{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Company Info */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">🏢 {company.name}</h3>
        <p className="text-sm italic text-gray-600">"{company.catchPhrase}"</p>
        <p className="text-xs text-gray-500">{company.bs}</p>
      </div>

      {/* Address Info */}
      <div className="mt-4 text-sm text-gray-600">
        <h4 className="font-semibold text-gray-800">📍 Address</h4>
        <p>
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

