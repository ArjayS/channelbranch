import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  const data = {
    name: "@Robert Servado",
    image: "https://github.com/ArjayS.png",
    bio: "Welcome to my small app that displays my professional social links!",
    socials: [
      {
        id: 1,
        site_name: "LinkedIN",
        site_logo: "",
        site_description: "Let's connect on LinkedIN!",
        link: "https://www.linkedin.com/in/robertservado/",
      },
      {
        id: 2,
        site_name: "Github",
        site_logo: "",
        site_description: "Checkout my github profile!",
        link: "https://github.com/ArjayS",
      },
      {
        id: 3,
        site_name: "Discord",
        site_logo: "",
        site_description: "Let's chat on Discord!",
        link: "https://discord.com/users/Robert Servado#9549",
      },
      {
        id: 4,
        site_name: "Gmail",
        site_logo: "",
        site_description: "If you want to contact me via gmail",
        link: "servadorobert@gmail.com",
      },
      {
        id: 5,
        site_name: "Creddle",
        site_logo: "",
        site_description: "Please check out my resume!",
        link: "https://resume.creddle.io/resume/6nua8y8tbin",
      },
    ],
  };

  return (
    <>
      <Main name={data.name} image={data.image} bio={data.bio} />
      <section className="flex flex-col text-center items-center mt-5">
        {data.socials.map((social) => (
          <Button
            id={social.id}
            site_name={social.site_name}
            site_description={social.site_description}
            site_link={social.link}
            site_logo={social.site_logo}
          />
        ))}
      </section>
    </>
  );
}

export default App;
