import { MainHeading, colors } from "./styles/theme";
import { SocialLink, User, users } from "./data/users";
import Avatar from "./components/Avatar";
import Button from "./components/Button";

function App() {
  return (
    <main className="App">
      {users.map((user: User, index: number) => (
        <div key={index}>
          <Avatar profilePicture={user.profile} />
          <MainHeading $textColor={colors.green}>
            {user.firstName} {user.lastName}
          </MainHeading>
          {user.socialLinks.map((socialLink : SocialLink, linkIndex: number) => (
            <Button
              key={linkIndex}
              label={socialLink.network}
              link={socialLink.url}
            />
          ))}
        </div>
      ))}
    </main>
  );
}

export default App;
