"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiingNordic } from "react-icons/fa";
import {
  GiBarn,
  GiBoatHorizon,
  GiCactus,
  GiCampingTent,
  GiCastle,
  GiCaveEntrance,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../container/Container";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is 100 meters from the beach",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in countryside",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is in modern style",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is near windmills",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on a Island",
  },
  {
    label: "Lake",
    icon: GiBoatHorizon,
    description: "This property is very close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiingNordic,
    description: "This property is near a skiing resort",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Campings",
    icon: GiCampingTent,
    description: "This property is in a camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in a desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is very luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={item.label === category}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
