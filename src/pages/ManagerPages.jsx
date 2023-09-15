import React, { useState } from "react";
import AddAnimalsPage from "./AddAnimalsPage";

const ManagerPages = () => {
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
      water_temperatures: "24 - 26 °C",
      water_ph: "6.5 - 8.0",
    },
    {
      id_sp: 1,
      id_family: 1,
      name: "Corydoras pygmaeus",
      characteristics:
        " he pygmy corydoras is widely distributed in inland waters in Peru in tributaries of the Nanay River, in Ecuador in tributaries of the Aguarico River, and in western Brazil in tributaries of the Madeira River. It feeds on worms, benthic crustaceans, insects, and plant matter. ",
      water_temperatures: "22 - 26 °C",
      water_ph: "6.0 - 8.0",
    },
    {
      id_sp: 2,
      id_family: 2,
      name: "Poecilia reticulata",
      characteristics:
        "Guppies originate from northeast South America, but have been introduced to many environments and are now found all over the world. Male guppies (5cm), which are smaller than females (7 cm), have ornamental caudal and dorsal fins. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae.",
      water_temperatures: "25-27 °C",
      water_ph: "",
    },
  ]);

  const [fish, setFish] = useState([
    {
      id_fish: 0,
      id_race: 6,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 1,
      id_race: 5,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 2,
      id_race: 5,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 3,
      id_race: 5,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 4,
      id_race: 5,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 5,
      id_sp: 2,
      id_race: 0,
      gender: "Female",
      arrival_date: "08/15/2023",
      date_of_death: "",
      breeding_date: "09/10/2023",
    },
    {
      id_fish: 6,
      id_sp: 2,
      id_race: 0,
      gender: "Female",
      arrival_date: "08/15/2023",
      date_of_death: "",
      breeding_date: "09/10/2023",
    },
    {
      id_fish: 7,
      id_sp: 2,
      id_race: 3,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 8,
      id_race: 4,
      gender: "Male",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 9,
      id_race: 4,
      gender: "Female",
      arrival_date: "09/06/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 10,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 11,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 12,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 13,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 14,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 15,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 16,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 17,
      id_race: 4,
      gender: "",
      arrival_date: "09/10/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 18,
      id_race: 3,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 19,
      id_race: 2,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 20,
      id_race: 0,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 21,
      id_race: 1,
      gender: "Female",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
    {
      id_fish: 22,
      id_race: 1,
      gender: "Macho",
      arrival_date: "09/14/2023",
      date_of_death: "",
      breeding_date: "",
    },
  ]);

  const [race, setRace] = useState([
    {
      id_race: 0,
      id_sp: 2,
      name: "Assortead guppy",
      characteristics: "",
    },
    {
      id_race: 1,
      id_sp: 2,
      name: "Guppy Flame",
      characteristics: "",
    },
    {
      id_race: 2,
      id_sp: 2,
      name: "Guppy Emerald Blue and Red Grass",
      characteristics: "",
    },
    {
      id_race: 3,
      id_sp: 2,
      name: "Guppy Koi Tuxedo",
      characteristics: "",
    },
    {
      id_race: 4,
      id_sp: 2,
      name: "Assortead guppy children",
      characteristics: "",
    },
    {
      id_race: 5,
      id_sp: 1,
      name: "Pygmy corydoras",
      characteristics: "",
    },
    {
      id_race: 6,
      id_sp: 0,
      name: "Siamese algae-eater",
      characteristics: "",
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
          date: "",
          value: "",
          observation: "",
        },
      ],
    },
  ]);

  const addFish = (id_race, gender, arrivalDate, dateOfDeath, breedindDate) => {
    const idFish = fish[fish.length - 1].id_fish + 1;
    console.log("jhgf");
    const newFish = {
      id_fish: idFish,
      id_race: id_race,
      gender: gender,
      arrival_date: arrivalDate,
      date_of_death: dateOfDeath,
      breeding_date: breedindDate,
    };
    setFish([...fish, newFish]);
  };

  return (
    <>
      <AddAnimalsPage
        allFamilies={families}
        allSpecies={species}
        allRace={race}
        addfish={addFish}
      />
    </>
  );
};

export default ManagerPages;
