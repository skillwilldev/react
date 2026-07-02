import { UserContext } from './UserContext';
import Profile from './Profile';

function App() {
  return (
    <UserContext.Provider value="Melik">
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;