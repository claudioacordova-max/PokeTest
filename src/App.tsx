import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Text from "./components/Text";
import axios from "axios";
import type { pokemon, Region } from "./types/Types";
import "./App.css";
import Stats from "./components/Stats";
import Feedback from "./components/Feedback";
import GameOverModal from "./components/GameOverModal";
import background from "./assets/backgrounds/background1.png";

function App() {
  const pokemonGenerations = [
    {
      name: "Kanto",
      min: 1,
      max: 151,
    },
    {
      name: "Johto",
      min: 152,
      max: 251,
    },
    {
      name: "Hoenn",
      min: 252,
      max: 386,
    },
    {
      name: "Sinnoh",
      min: 387,
      max: 493,
    },
    {
      name: "Unova",
      min: 494,
      max: 649,
    },
    {
      name: "Kalos",
      min: 650,
      max: 721,
    },
    {
      name: "Alola",
      min: 722,
      max: 809,
    },
    {
      name: "Galar",
      min: 810,
      max: 905,
    },
    {
      name: "Paldea",
      min: 906,
      max: 1025,
    },
  ];
  const [gameState, setGameState] = useState<string>("PLAYING");
  const baseTime = 30;
  const [pokemonsData, setPokemonsData] = useState<pokemon[]>([]);
  const [pokemonCorrect, setPokemonCorrect] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [correctResponse, setCorrectResponse] = useState<boolean>();
  const [turn, setTurn] = useState<number>(1);
  const [lives, setLives] = useState<number>(3);
  const [time, setTime] = useState<number>(baseTime);
  const [pokemonsPicked, setPokemonsPicked] = useState<number[]>([]);
  const [region, setRegion] = useState<string>("Kanto");
  const generation =
    pokemonGenerations.find((g: Region) => g.name === region) ??
    pokemonGenerations[0];

  const resetGame = () => {
    setCorrectResponse(undefined);
    setTime(baseTime);
    setLives(3);
    setPokemonsPicked([]);
    setCount(0);
    setTurn(1);
    setGameState("PLAYING");
  };

  useEffect(() => {
    resetGame();
  }, [region]);

  useEffect(() => {
    async function loadPokemons() {
      const pokemons: pokemon[] = [];
      let pokemonCorrect = Math.floor(Math.random() * 3);
      let pokemonMax = generation.max - generation.min + 1;
      let pokemonMin = generation.min;
      let pokemonAvailable = pokemonMax - pokemonsPicked.length;

      if (pokemonAvailable <= 3) {
        pokemonCorrect = Math.floor(Math.random() * pokemonAvailable);
      }

      async function HttpRequest() {
        let pokemon = Math.floor(Math.random() * pokemonMax) + pokemonMin;
        while (
          pokemons.some((p) => p?.id === pokemon) ||
          pokemonsPicked.some((p) => p === pokemon)
        ) {
          pokemon = Math.floor(Math.random() * pokemonMax) + pokemonMin;
        }

        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then(({ data }) => pokemons.push(data));
      }
      let maxCards = 3;
      if (pokemonAvailable <= 3) {
        maxCards = pokemonAvailable;
      }
      for (let i = 1; i <= maxCards; ++i) {
        await HttpRequest();
      }
      setPokemonsData(pokemons);
      setPokemonCorrect(pokemonCorrect);
    }
    loadPokemons();
  }, [turn, region]);

  const clickPokemon = (index: number) => {
    if (index === pokemonCorrect) {
      setPokemonsPicked([
        ...pokemonsPicked,
        pokemonsData?.[pokemonCorrect]?.id,
      ]);

      setCorrectResponse(true);
    } else {
      setCorrectResponse(false);
    }
    if (gameState === "PLAYING") {
      setTurn(turn + 1);
      setTime(baseTime);
    }
  };
  useEffect(() => {
    if (correctResponse === true) {
      setCount(count + 1);
    } else if (correctResponse === false) {
      setLives(lives - 1);
    }
  }, [turn]);

  useEffect(() => {
    if (gameState !== "PLAYING") return;

    const interval = setInterval(() => {
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, turn]);

  useEffect(() => {
    if (time > 0 || gameState !== "PLAYING") return;
    setCorrectResponse(false);
    setTime(baseTime);
    setTurn((prevTurn) => prevTurn + 1);
  }, [time, gameState]);

  useEffect(() => {
    if (lives <= 0) {
      setGameState("LOST");
    } else if (pokemonsPicked.length === generation.max - generation.min + 1) {
      setGameState("WIN");
    }
  }, [lives, pokemonsPicked]);

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-bottom-left bg-fixed opacity-40 brightness-110"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <Header region={region} setRegion={setRegion} />
        <Stats count={count} lives={lives} time={time} />
        <div
          className="flex-1
flex
flex-col
items-center"
        >
          <Text>
            ¿Cual de estos Pokemons es {pokemonsData[pokemonCorrect]?.name}?
          </Text>
          <Card handleClick={clickPokemon} pokemonsData={pokemonsData}></Card>
          <Feedback />
          {gameState !== "PLAYING" && (
            <GameOverModal
              count={count}
              turn={turn}
              pokemomnMax={generation.max - generation.min + 1}
              won={gameState === "WIN"}
              onRestart={resetGame}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
