import { MainHeading } from './styles/theme';
import { colors } from './styles/theme';
import { User, users } from './data/users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {users.map((user: User, index: number) => (
          <MainHeading key={index} $textColor={colors.green}>
            {user.firstName} {user.lastName} {user.city}
          </MainHeading>
        ))}
      </header>
    </div>
  );
}

export default App;
