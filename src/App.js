import Main from "./components/Main";
import Button from "./components/Button";
import Posts from "./components/Posts";

function App() {
  const data = {
    name: "@Robert Servado",
    image: "https://github.com/ArjayS.png",
    bio: "Welcome to my small app that displays my professional social links!",
    socials: [
      {
        id: 1,
        site_name: "LinkedIN",
        site_logo: require("./imgs/LinkedIn_white.svg").default,
        link: "https://www.linkedin.com/in/robertservado/",
      },
      {
        id: 2,
        site_name: "Github",
        site_logo: require("./imgs/Github_white.svg").default,
        link: "https://github.com/ArjayS",
      },
      {
        id: 3,
        site_name: "Discord",
        site_logo: require("./imgs/Discord_white.svg").default,
        link: "https://discord.com/users/Robert Servado#9549",
      },
      // {
      //   id: 4,
      //   site_name: "Gmail",
      //   site_logo: "",
      //   site_description: "If you want to contact me via gmail",
      //   link: "servadorobert@gmail.com",
      // },
      {
        id: 4,
        site_name: "Creddle",
        site_logo: require("./imgs/Resume_white.svg").default,
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
            site_link={social.link}
            site_logo={social.site_logo}
          />
        ))}
      </section>
      <section className="flex flex-col text-center items-center mt-5">
        <h1>My Recent Posts!</h1>
        <Posts />
      </section>
      <footer className="flex flex-col text-center text-lg font-medium">
        <p>Designed & Developed by Robert Servado</p>
        <p>
          <span>&copy;</span> 2023
        </p>
      </footer>
    </>
  );
}

export default App;
