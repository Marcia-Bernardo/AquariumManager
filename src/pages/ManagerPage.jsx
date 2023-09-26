import React, { useState } from "react";
import AddFish from "../components/AddFish";
import ListRace from "../components/ListRace";
import ListFishCard from "./../components/ListFishCard";
import ShowFish from "../components/ShowFish";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

const ManagerPage = ({ showPage }) => {
  const [families, setFamilies] = useState([
    {
      id: 0,
      name: "Cyprinidae",
      characteristics:
        "It's the largest and most diverse fish family. Cyprinids are often introduced as a management tool to control various factors in the aquatic environment, such as aquatic vegetation and diseases transmitted by snails.",
    },
    {
      id: 1,
      name: "Callichthyidae",
      characteristics:
        "Callichthyidae is a family of catfishes (order Siluriformes), called armored catfishes due to the two rows of bony plates (or scutes) along the lengths of their bodies. It contains some of the most popular freshwater aquarium fish, such as many species in the gender Corydoras.",
    },
    {
      id: 2,
      name: "Poeciliidae",
      characteristics:
        "Although the whole family Poeciliidae is known as 'live bearers' (ovoviparous), some species are egg-scattering with external fertilization.",
    },
  ]);

  const [species, setSpecies] = useState([
    {
      id_sp: 0,
      id_family: 0,
      name: "Crossocheilus oblongus",
      characteristics:
        "Since they cannot stay in mid water, they love driftwood/rocks and some plants that can support their weight to rest on. This species that prefers Java moss to red algae, and an undescribed species of Crossocheilus.",
      minTemp: 24,
      maxTemp: 26,
      water_ph: "6.5 - 8.0",
    },
    {
      id_sp: 1,
      id_family: 1,
      name: "Corydoras pygmaeus",
      characteristics:
        " he pygmy corydoras is widely distributed in inland waters in Peru in tributaries of the Nanay River, in Ecuador in tributaries of the Aguarico River, and in western Brazil in tributaries of the Madeira River. It feeds on worms, benthic crustaceans, insects, and plant matter. ",
      minTemp: 22,
      maxTemp: 26,
      water_ph: "6.0 - 8.0",
    },
    {
      id_sp: 2,
      id_family: 2,
      name: "Poecilia reticulata",
      characteristics:
        "Guppies originate from northeast South America, but have been introduced to many environments and are now found all over the world. Male guppies (5cm), which are smaller than females (7 cm), have ornamental caudal and dorsal fins. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae.",
      minTemp: 25,
      maxTemp: 27,
      water_ph: "",
    },
  ]);

  const [race, setRace] = useState([
    {
      id_race: 0,
      id_sp: 2,
      name: "Assortead guppy",
      characteristics: "",
      img: "guppy.jpeg",
    },
    {
      id_race: 1,
      id_sp: 2,
      name: "Guppy Flame",
      characteristics: "",
      img: "guppyFlame.jpeg",
    },
    {
      id_race: 2,
      id_sp: 2,
      name: "Guppy Emerald Blue and Red Grass",
      characteristics: "",
      img: "GuppyEmeraldBlue.jpeg",
    },
    {
      id_race: 3,
      id_sp: 2,
      name: "Guppy Koi Tuxedo",
      characteristics:
        "The Koi Tuxedo has a red head and red fins with a black base color. The males are usually more intensely coloured than the females and have larger fins. They also have a gonopodium converted to a mating organ, which is a pen-shaped anal fin. Females grow slightly larger and have a more sail-shaped anal fin.",
      img: "koi.jpeg",
    },
    {
      id_race: 4,
      id_sp: 2,
      name: "Assortead guppy children",
      characteristics: "",
      img: "levinos.jpeg",
    },
    {
      id_race: 5,
      id_sp: 1,
      name: "Pygmy corydoras",
      characteristics: "",
      img: "Pygmy.jpeg",
    },
    {
      id_race: 6,
      id_sp: 0,
      name: "Siamese algae-eater",
      characteristics: "",
      img: "Siamese.jpeg",
    },
  ]);

  const [fish, setFish] = useState([
    {
      id_fish: 0,
      id_race: 6,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 1,
      id_race: 5,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 2,
      id_race: 5,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 3,
      id_race: 5,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 4,
      id_race: 5,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 5,
      id_sp: 2,
      id_race: 0,
      generation: 1,
      gender: "Female",
      arrival_date: "08/15/2023",
      date_of_death: "09/21/2023",
      breeding_date: "09/10/2023",
    },
    {
      id_fish: 6,
      id_sp: 2,
      id_race: 0,
      generation: 1,
      gender: "Female",
      arrival_date: "08/15/2023",
      date_of_death: "",
      breeding_date: "09/10/2023",
    },
    {
      id_fish: 7,
      id_sp: 2,
      id_race: 3,
      generation: 1,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 8,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 9,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 10,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 11,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 12,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 13,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 14,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 15,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 16,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 17,
      id_race: 4,
      generation: 2,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 18,
      id_race: 3,
      generation: 1,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 19,
      id_race: 2,
      generation: 1,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 20,
      id_race: 0,
      generation: 1,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 21,
      id_race: 1,
      generation: 1,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 22,
      id_race: 1,
      generation: 1,
      gender: "Macho",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
  ]);

  const [measurements, setMeasurements] = useState([
    {
      id: 0,
      kind: "Changing the water",
      measurement: [
        {
          id: 0,
          date: "09/27/2023",
          value: "",
          observation: "Changing the pool to this 50l aquarium",
        },
      ],
    },
    {
      id: 1,
      kind: "water_temperatures",
      measurement: [
        {
          id: 0,
          date: "",
          value: "",
          observation: "",
        },
      ],
    },
    {
      id: 2,
      kind: "water_ph",
      measurement: [
        {
          id: 0,
          date: "09/15/2023",
          value: "6.8",
          observation: "",
        },
      ],
    },
  ]);

  const addFish = (
    id_race,
    generation,
    gender,
    arrivalDate,
    dateOfDeath,
    breedindDate
  ) => {
    const idFish = fish[fish.length - 1].id_fish + 1;
    const newFish = {
      id_fish: idFish,
      id_race: id_race,
      generation: generation,
      gender: gender,
      arrival_date: arrivalDate,
      date_of_death: dateOfDeath,
      breeding_date: breedindDate,
    };
    setFish([...fish, newFish]);
  };

  const addFamily = (data) => {
    const idFamily = families[families.length - 1].id + 1;

    const newFamily = {
      id: idFamily,
      name: data.name,
      characteristics: data.characteristics,
    };
    setFamilies([...families, newFamily]);
  };

  const addSpecie = (data) => {
    const idSpecie = species[species.length - 1].id_sp + 1;
    const newSpecie = {
      id_sp: idSpecie,
      id_family: parseInt(data.id_family),
      name: data.name,
      characteristics: data.characteristics,
      minTemp: parseInt(data.minT),
      maxTemp: parseInt(data.maxT),
      water_ph: parseInt(data.ph),
    };
    setSpecies([...species, newSpecie]);
  };

  const addRace = (data) => {
    const idRace = race[race.length - 1].id_race + 1;

    const newRace = {
      id_race: idRace,
      id_sp: parseInt(data.id_sp),
      name: data.name,
      characteristics: data.characteristics,
    };
    setRace([...race, newRace]);
  };

  const { id } = useParams();

  if (showPage === "addFish") {
    return (
      <>
        <AddFish
          listNameFamily={families}
          listNameSpecie={species}
          saveFish={addFish}
          listNameRace={race}
          addFamily={addFamily}
          addSpecie={addSpecie}
          addRace={addRace}
        />
      </>
    );
  }
  if (showPage === "listRace") {
    return (
      <>
        <ListRace
          listNameFamily={families}
          listNameSpecie={species}
          listNameRace={race}
          listFish={fish}
        />
      </>
    );
  }
  if (showPage === "listFish") {
    return (
      <>
        <ListFishCard listNameRace={race} listFish={fish} />
      </>
    );
  }

  if (showPage === "showFish") {
    return (
      <>
        <ShowFish listNameRace={race} listFish={fish} idRace={id} />
      </>
    );
  }
  if (showPage === "fishDetails") {
    return (
      <>
        <Details
          listNameFamily={families}
          listNameSpecie={species}
          listNameRace={race}
          listFish={fish}
          idFish={id}
        />
      </>
    );
  }
};
export default ManagerPage;
