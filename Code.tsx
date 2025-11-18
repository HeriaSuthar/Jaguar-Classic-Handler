import React from 'react';

interface UserProfileProps {
  username: string;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, bio }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">{username}</h2>
      <div 
        className="prose"
        dangerouslySetInnerHTML={{ __html: bio }} 
      />
    </div>
  );
};

export default UserProfile;