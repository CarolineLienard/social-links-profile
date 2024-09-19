import { MainHeading } from './styles/theme';
import { colors } from './styles/theme';
import { User, users } from './data/users';
import Avatar from './components/Avatar';

function App() {
  return (
    <main className="App">
        {users.map((user: User, index: number) => (
          <div key={index}>
            <Avatar profilePicture={user.profile} />
            <MainHeading $textColor={colors.green}>
              {user.firstName} {user.lastName} {user.city}
            </MainHeading>
          </div>
        ))}
    </main>
  );
}

export default App;
