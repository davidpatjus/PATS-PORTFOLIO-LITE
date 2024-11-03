import { FaGithub } from "react-icons/fa";

interface Item {
  image: string;
  title: string;
  desc: string;
  live?: string;
  github: string;
  api?: string;
}

const Cards = ({ item }: { item: Item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt="" className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          {item.live && (
            <button className="bg-red-500 text-white px-3 py-2 rounded-md">
              <a href={item.live} target="_blank">
                Live
              </a>
            </button>
          )}
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a href={item.github} target="_blank" className="flex gap-1">
              <FaGithub className="w-5 h-5 mr-1" />
              Github
            </a>
          </button>
          {item.api && (
            <button className="bg-black/80 text-white px-3 py-2 rounded-md">
              <a href={item.api} target="_blank" className="flex gap-1">
                <FaGithub className="w-5 h-5 mr-1" />
                API
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
