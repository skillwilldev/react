import { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';
import './App.css'; // სტილების ფაილი

function App() {
  const [name, setName] = useState('გიორგი ბერიძე');
  const [role, setRole] = useState('Front-End დეველოპერი');
  const [avatar, setAvatar] = useState('./avatars/avatar-1.avif');
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app-container">
      <h1>Profile Card Generator</h1>
      <div className="main-content">
        {/* ფორმას გადავცემთ State-ის შესაცვლელ ფუნქციებს */}
        <ProfileForm
          setName={setName}
          setRole={setRole}
          setAvatar={setAvatar}
          setIsDark={setIsDark}
          isDark={isDark}
        />

        {/* ბარათს გადავცემთ მხოლოდ მიმდინარე მნიშვნელობებს */}
        <ProfileCard
          name={name}
          role={role}
          avatar={avatar}
          isDark={isDark}
        />
      </div>
    </div>
  );
}

export default App;