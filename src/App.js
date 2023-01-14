import HeaderProfile from "./components/HeaderProfile";
import Socials from "./components/Socials";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

function App() {
  const data = {
    name: "@Robert Servado",
    image: "https://github.com/ArjayS.png",
    bio: "Welcome to my small app that displays my professional social links!",
    socials: [
      {
        id: 1,
        site_name: "LinkedIN",
        site_logo: require("./imgs/LinkedIn_colored.svg").default,
        link: "https://www.linkedin.com/in/robertservado/",
      },
      {
        id: 2,
        site_name: "Github",
        site_logo: require("./imgs/Github_colored.svg").default,
        link: "https://github.com/ArjayS",
      },
      {
        id: 3,
        site_name: "Discord",
        site_logo: require("./imgs/Discord_colored.svg").default,
        link: "https://discord.com/users/Robert Servado#9549",
      },
      {
        id: 4,
        site_name: "Creddle",
        site_logo: require("./imgs/Resume_colored.svg").default,
        link: "https://resume.creddle.io/resume/6nua8y8tbin",
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <HeaderProfile name={data.name} image={data.image} bio={data.bio} />
      <main className="mb-auto">
        <section className="flex flex-row text-center justify-center mt-5">
          {data.socials.map((social) => (
            <Socials
              id={social.id}
              site_name={social.site_name}
              site_link={social.link}
              site_logo={social.site_logo}
            />
          ))}
        </section>
        <section className="flex flex-col text-center items-center mt-5">
          <h1 className="text-xl font-semibold">My Recent Posts!</h1>
          <Posts />
        </section>
        <section className="flex flex-col text-center items-center mt-5">
          <h1 className="text-xl font-semibold">Get in touch with me!</h1>
          <Contact />
        </section>
      </main>
      <footer className="flex flex-col text-center text-lg font-medium sticky top-full h-24">
        <p>
          <span>&copy;</span> 2023
        </p>
        <p>Designed & Developed by Robert Servado</p>
      </footer>
    </div>
  );
}

export default App;
