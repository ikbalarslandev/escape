import { FaHorseHead, FaFire } from "react-icons/fa";
import {
  GiStoneTablet,
  GiSandSnake,
  GiClayBrick,
  GiWatchtower,
  GiCrossedChains,
} from "react-icons/gi";
import { PiMosqueLight } from "react-icons/pi";

interface IObject {
  index: number;
  name: string;
  icon: any;
}

export const objects: IObject[] = [
  {
    index: 1,
    name: "Minyatür At",
    icon: <FaHorseHead className="text-white text-3xl" />,
  },
  {
    index: 2,
    name: "Parşömen",
    icon: <GiStoneTablet className="text-white text-3xl" />,
  },
  {
    index: 3,
    name: "Yılan",
    icon: <GiSandSnake className="text-white text-3xl" />,
  },
  {
    index: 4,
    name: "Tuğla",
    icon: <GiClayBrick className="text-white text-3xl" />,
  },
  {
    index: 5,
    name: "İsyan Ateşi",
    icon: <FaFire className="text-white text-3xl" />,
  },
  {
    index: 6,
    name: "Kubbe Minyatürü",
    icon: <PiMosqueLight className="text-white text-3xl" />,
  },
  {
    index: 8,
    name: "Minare",
    icon: <GiWatchtower className="text-white text-3xl" />,
  },
  {
    index: 11,
    name: "Tuğla",
    icon: <GiCrossedChains className="text-white text-3xl" />,
  },
];

export const convertIndexToBage = ({ i }: { i: number }) => {
  const object = objects.find((o) => o.index === i);
  if (!object) return null;
  return (
    <div>
      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
        {object.icon}
      </div>
      <h2 className="text-2xl font-serif font-bold text-white mb-2">
        {object.name}
      </h2>
    </div>
  );
};
