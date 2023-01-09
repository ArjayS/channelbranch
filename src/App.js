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
    <div>
      <Main name={data.name} image={data.image} bio={data.bio} />
      {data.socials.map((social) => (
        <Button
          id={social.id}
          site_name={social.site_name}
          site_description={social.site_description}
          site_link={social.link}
        />
      ))}
    </div>
  );
}

export default App;
