import React, { useState, useEffect } from "react";
import AddFish from "../components/AddFish";
import ListRace from "../components/ListRace";
import ListFishCard from "./../components/ListFishCard";
import ShowFish from "../components/ShowFish";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import ListMeasurements from "../components/ListMeasurements";
import Home from "../components/Home";
import AddMeasurements from "../components/AddMeasurements";

const ManagerPage = ({ showPage }) => {
  const [families, setFamilies] = useState([]);

  const [species, setSpecies] = useState([]);

  const [race, setRace] = useState([]);

  const [fish, setFish] = useState([]);

  const [measurements, setMeasurements] = useState([]);
  const [measurement, setMeasurement] = useState([]);

  useEffect(() => {
    // const emptyMeasurements = [
    //   {
    //     id: 0,
    //     kind: "Changing the water",
    //     measurement: [],
    //   },
    // ];
    if (localStorage.getItem(`families`) === null) {
      localStorage.setItem(`families`, JSON.stringify(families));
    }
    if (localStorage.getItem(`species`) === null) {
      localStorage.setItem(`species`, JSON.stringify(species));
    }
    if (localStorage.getItem(`race`) === null) {
      localStorage.setItem(`race`, JSON.stringify(race));
    }

    if (localStorage.getItem(`fish`) === null) {
      localStorage.setItem(`fish`, JSON.stringify(fish));
    }
    if (localStorage.getItem(`measurements`) === null) {
      localStorage.setItem(`measurements`, JSON.stringify(measurements));
    }
    if (localStorage.getItem(`measurement`) === null) {
      localStorage.setItem(`measurement`, JSON.stringify(measurement));
    }

    setFamilies(JSON.parse(localStorage.getItem(`families`)));
    setSpecies(JSON.parse(localStorage.getItem(`species`)));
    setRace(JSON.parse(localStorage.getItem(`race`)));
    setFish(JSON.parse(localStorage.getItem(`fish`)));
    setMeasurements(JSON.parse(localStorage.getItem(`measurements`)));
    setMeasurement(JSON.parse(localStorage.getItem(`measurement`)));
  }, []);

  const addFish = (
    id_race,
    generation,
    gender,
    arrivalDate,
    dateOfDeath,
    breedindDate
  ) => {
    let idFish = 1;
    if (fish.length > 0) {
      idFish = fish[fish.length - 1].id_fish + 1;
    }
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
    localStorage.setItem(`fish`, JSON.stringify([...fish, newFish]));
  };

  const addFamily = (data) => {
    let idFamily = 1;
    if (families.length > 0) {
      idFamily = families[families.length - 1].id + 1;
    }
    if (data.name === undefined || data.name === "") {
      return;
    }
    if (data.characteristics === undefined || data.characteristics === "") {
      return;
    }
    const newFamily = {
      id: idFamily,
      name: data.name,
      characteristics: data.characteristics,
    };
    setFamilies([...families, newFamily]);

    localStorage.setItem(`families`, JSON.stringify([...families, newFamily]));
  };

  const addSpecie = (data) => {
    let idSpecie = 1;
    if (species.length > 0) {
      idSpecie = species[species.length - 1].id_sp + 1;
    }
    // if (data.family === undefined || data.family === "") {
    //   return;
    // }
    if (data.name === undefined || data.name === "") {
      return;
    }
    if (data.characteristics === undefined || data.characteristics === "") {
      return;
    }
    if (data.minT === undefined || data.minT === "") {
      return;
    }
    if (data.maxT === undefined || data.maxT === "") {
      return;
    }

    if (data.ph === undefined || data.ph === "" || isNaN(parseInt(data.ph))) {
      return;
    }
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

    localStorage.setItem(`species`, JSON.stringify([...species, newSpecie]));
  };

  const addRace = (data) => {
    let idRace = 1;
    if (race.length > 0) {
      idRace = race[race.length - 1].id_race + 1;
    }
    if (data.name === undefined || data.name === "") {
      return;
    }
    if (data.characteristics === undefined || data.characteristics === "") {
      return;
    }
    const newRace = {
      id_race: idRace,
      id_sp: parseInt(data.id_sp),
      name: data.name,
      characteristics: data.characteristics,
      img: data.img,
    };
    setRace([...race, newRace]);

    localStorage.setItem(`race`, JSON.stringify([...race, newRace]));
  };

  const addKindMeasurement = (data) => {
    let idMeasurements = 1;
    if (measurements.length > 0) {
      idMeasurements = measurements[measurements.length - 1].id + 1;
    }
    if (data.kind === undefined || data.kind === "") {
      return;
    }

    const newMeasurements = {
      idMeasurements: idMeasurements,
      kind: data.kind,
      measurement: [],
    };
    setMeasurements([...measurements, newMeasurements]);
    localStorage.setItem(
      `measurements`,
      JSON.stringify([...measurements, newMeasurements])
    );
  };

  const addMeasurement = (data) => {
    let idMeasurement = 1;
    const filterKindMeasurement = measurements.find(
      (measurements) => measurements.id === data.id
    );
    console.log(measurements);
    if (measurement.length > 0) {
      idMeasurement = measurement[measurement.length - 1].id + 1;
    }
    if (data.kind === undefined || data.date === "") {
      return;
    }
    if (data.date === undefined || data.date === "") {
      return;
    }
    if (data.value === undefined || data.value === "") {
      return;
    }
    if (data.observation === undefined || data.observation === "") {
      return;
    }
    const newMeasurement = {
      idMeasurement: idMeasurement,
      date: data.date,
      value: data.value,
      observation: data.observation,
    };
    setMeasurements([...measurement, newMeasurement]);
    localStorage.setItem(
      `measurements`,
      JSON.stringify([...measurement, newMeasurement])
    );
  };

  const { id } = useParams();

  if (showPage === "aquarium") {
    return <Home listMeasurement={measurements} />;
  }

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

  if (showPage === "addMeasurement") {
    return (
      <>
        <AddMeasurements
          listMeasurement={measurements}
          addKindMeasurement={addKindMeasurement}
          addMeasurement={addMeasurement}
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
  if (showPage === "listMeasurement") {
    return (
      <>
        <ListMeasurements listMeasurement={measurements} />
      </>
    );
  }
};
export default ManagerPage;
