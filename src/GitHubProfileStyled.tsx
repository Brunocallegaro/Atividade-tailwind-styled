import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #24292e;
  color: white;
  border: none;
  border-radius: 0.5rem;
`;

const Profile = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f6f8fa;
`;

export default function GitHubProfileStyled() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<any>(null);

  const fetchProfile = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setProfile(data);
  };

  return (
    <Container>
      <h2>Styled-Components View</h2>
      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchProfile}>Search</Button>
      {profile && profile.login && (
        <Profile>
          <img src={profile.avatar_url} alt="Avatar" width={100} />
          <h3>{profile.name || profile.login}</h3>
          <p>{profile.bio}</p>
        </Profile>
      )}
    </Container>
  );
}
