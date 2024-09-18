import { MainHeading } from './styles/theme';
import { colors } from './styles/theme';
import { users } from './data/users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {users.map((user, index) => (
          <MainHeading key={index} $textColor={colors.green}>
            {user.firstName} {user.lastName} {user.city}
          </MainHeading>
        ))}
      </header>
    </div>
  );
}

export default App;
