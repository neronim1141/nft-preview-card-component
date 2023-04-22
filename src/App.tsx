import "./App.css";
import { NftCard, NftCardProps } from "./components/nft-card.component";

const data: NftCardProps = {
  image: "/images/image-equilibrium.jpg",
  name: "Equilibrium",
  tag: "#3429",
  description: "Our Equilibrium collection promotes balance and calm.",
  eth: 0.041,
  timeLeft: "3 days left",
  author: {
    avatar: "/images/image-avatar.png",
    name: "Jules Wyvern",
  },
};

function App() {
  return (
    <div className="h-screen w-screen text-white flex flex-col ">
      <main className="flex-grow grid place-content-center p-6 font-outfit">
        <div className="max-w-[350px]">
          <NftCard {...data} />
        </div>
      </main>
      <footer className="self-center p-1 text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .
        <br />
        Coded by{" "}
        <a
          href="https://neronim1141.github.com"
          className="underline hover:text-primary-cyan"
        >
          Kacper Kruczek
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
