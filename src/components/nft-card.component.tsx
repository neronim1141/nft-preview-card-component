export interface NftCardProps {
  image: string;
  name: string;
  tag: string;
  description: string;
  eth: number;
  timeLeft: string;
  author: {
    avatar: string;
    name: string;
  };
}
export const NftCard = ({
  image,
  name,
  tag,
  description,
  eth,
  timeLeft,
  author,
}: NftCardProps) => (
  <article className="flex flex-col  p-6 bg-neutral-card_bg rounded-xl gap-4">
    <a href="#" className="relative rounded-xl overflow-hidden group">
      <img src={image} />
      <div className="absolute inset-0 bg-primary-cyan/50 group-hover:grid place-content-center hidden">
        <img src="/images/icon-view.svg" />
      </div>
    </a>
    <header>
      <a href="#" className="text-2xl font-semibold hover:text-primary-cyan">
        {name} {tag}
      </a>
    </header>
    <p className="font-light text-primary-soft_blue">{description}</p>
    <div className="text-sm flex justify-between">
      <div className="flex gap-1">
        <img src="/images/icon-ethereum.svg" />
        <span className="text-primary-cyan font-semibold">{eth} ETH</span>
      </div>
      <div className="flex gap-1">
        <img src="/images/icon-clock.svg" />
        <span className="text-primary-soft_blue">{timeLeft}</span>
      </div>
    </div>
    <hr className="bg-neutral-line  h-px border-0" />
    <footer className="flex items-center gap-4">
      <img src={author.avatar} className="w-9 h-9 border-2 rounded-full" />
      <span className="text-primary-soft_blue">
        Creation of{" "}
        <a href="#" className="text-white hover:text-primary-cyan">
          {author.name}
        </a>
      </span>
    </footer>
  </article>
);
