import SocialCard from "./components/SocialCard";
import { User, users } from "./data/users";

function App() {
  return (
    <main className="App">
      {users.map((user: User, index: number) => (
        <SocialCard key={index} user={user} />
      ))}
    </main>
  );
}

export default App;
