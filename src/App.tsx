import { MainHeading } from './styles/theme';
import { colors } from './styles/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeading $textColor={colors.green}>Jessica Randall</MainHeading>
      </header>
    </div>
  );
}

export default App;
