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
        site_name: "Resume",
        site_logo: require("./imgs/Resume_colored.svg").default,
        link: "https://resume.creddle.io/resume/6nua8y8tbin",
      },
    ],
  };

  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
  }, 1000);

  return (
    <main className="flex flex-col h-screen justify-between max-w-screen-md">
      <HeaderProfile name={data.name} image={data.image} bio={data.bio} />
      <section className="mb-auto">
        <nav className="flex flex-row text-center justify-center mt-5">
          {data.socials.map((social) => (
            <Socials
              id={social.id}
              site_name={social.site_name}
              site_link={social.link}
              site_logo={social.site_logo}
            />
          ))}
        </nav>
        <article className="flex flex-col text-center items-center mt-10">
          <h1 className="text-xl font-semibold">My Recent Posts!</h1>
          <Posts />
        </article>
        <article className="flex flex-col text-center items-center mt-10">
          <h1 className="text-xl font-semibold">Get in touch with me!</h1>
          <Contact />
        </article>
      </section>
      <footer className="flex flex-col text-center text-lg font-medium sticky top-full h-24">
        <p>
          <span>&copy;</span> 2023
        </p>
        <p>Designed & Developed by Robert Servado</p>
      </footer>
    </main>
  );
}

export default App;
