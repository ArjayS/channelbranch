import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  const data = {
    name: "Robert Servado",
    image: "https://github.com/ArjayS.png",
    bio: "Welcome to my small app that displays my professional social links!",
    socials: [
      {
        id: 1,
        site_name: "LinkedIN",
        site_description: "Let's connect on LinkedIN!",
        link: "https://www.linkedin.com/in/robertservado/",
      },
      {
        id: 2,
        site_name: "Github",
        site_description: "Checkout my github profile!",
        link: "https://github.com/ArjayS",
      },
      {
        id: 3,
        site_name: "Creddle",
        site_description: "Please check out my resume!",
        link: "https://resume.creddle.io/resume/6nua8y8tbin",
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.name}</p>
      </header>
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
