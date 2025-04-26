import React, { useState } from 'react';

export default function GitHubProfileTailwind() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<any>(null);

  const fetchProfile = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setProfile(data);
  };

  return (
    <div className="max-w-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Tailwind CSS View</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="p-2 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile} className="bg-black text-white p-2 rounded">
        Search
      </button>
      {profile && profile.login && (
        <div className="p-4 border rounded bg-gray-100">
          <img src={profile.avatar_url} alt="Avatar" width={100} />
          <h3 className="text-lg font-bold">{profile.name || profile.login}</h3>
          <p>{profile.bio}</p>
        </div>
      )}
    </div>
  );
}
