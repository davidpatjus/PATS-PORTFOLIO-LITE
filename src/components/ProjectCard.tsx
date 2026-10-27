import { FaGithub } from "react-icons/fa";

interface Item {
  image: string;
  title: string;
  desc: string;
  live?: string;
  github?: string;
  api?: string;
}

const Cards = ({ item }: { item: Item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-full max-w-[400px] bg-red-50">
      <img
        src={item.image}
        alt={`Captura del proyecto ${item.title}`}
        loading="lazy"
        decoding="async"
        width={800}
        height={400}
        className="rounded-lg w-full h-auto"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Live
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 bg-black text-white px-3 py-2 rounded-md"
            >
              <FaGithub className="w-5 h-5 mr-1" aria-hidden="true" />
              Github
            </a>
          )}
          {item.api && (
            <a
              href={item.api}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 bg-black/80 text-white px-3 py-2 rounded-md"
            >
              <FaGithub className="w-5 h-5 mr-1" aria-hidden="true" />
              API
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
