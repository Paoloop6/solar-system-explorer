export interface PlanetData {
  name: string;
  radius: number;
  distance: number;
  color: string;
  orbitSpeed: number;
  facts: {
    diameter: string;
    distanceFromSun: string;
    orbitalPeriod: string;
    surfaceTemp: string;
    composition: string;
    moons: string;
    funFact: string;
  };
}

export const planetsData: PlanetData[] = [
  {
    name: "Mercury",
    radius: 0.4,
    distance: 8,
    color: "#8C7853",
    orbitSpeed: 0.047,
    facts: {
      diameter: "4,879 km",
      distanceFromSun: "57.9 million km",
      orbitalPeriod: "88 Earth days",
      surfaceTemp: "-173°C to 427°C",
      composition: "Rocky planet with iron core",
      moons: "0",
      funFact: "Mercury has no atmosphere and its surface is covered in craters like our Moon!"
    }
  },
  {
    name: "Venus",
    radius: 0.9,
    distance: 12,
    color: "#FFC649",
    orbitSpeed: 0.035,
    facts: {
      diameter: "12,104 km",
      distanceFromSun: "108.2 million km",
      orbitalPeriod: "225 Earth days",
      surfaceTemp: "462°C (hottest planet)",
      composition: "Rocky with thick CO2 atmosphere",
      moons: "0",
      funFact: "Venus rotates backwards compared to most planets and a day on Venus is longer than its year!"
    }
  },
  {
    name: "Earth",
    radius: 1,
    distance: 16,
    color: "#4A90E2",
    orbitSpeed: 0.03,
    facts: {
      diameter: "12,742 km",
      distanceFromSun: "149.6 million km",
      orbitalPeriod: "365.25 days",
      surfaceTemp: "-88°C to 58°C",
      composition: "Rocky with nitrogen-oxygen atmosphere",
      moons: "1 (The Moon)",
      funFact: "Earth is the only known planet with life and 71% of its surface is covered by water!"
    }
  },
  {
    name: "Mars",
    radius: 0.5,
    distance: 20,
    color: "#E27B58",
    orbitSpeed: 0.024,
    facts: {
      diameter: "6,779 km",
      distanceFromSun: "227.9 million km",
      orbitalPeriod: "687 Earth days",
      surfaceTemp: "-87°C to -5°C",
      composition: "Rocky with thin CO2 atmosphere",
      moons: "2 (Phobos and Deimos)",
      funFact: "Mars has the largest volcano in the solar system - Olympus Mons, which is 3 times taller than Mt. Everest!"
    }
  },
  {
    name: "Jupiter",
    radius: 2.5,
    distance: 28,
    color: "#C88B3A",
    orbitSpeed: 0.013,
    facts: {
      diameter: "139,820 km",
      distanceFromSun: "778.5 million km",
      orbitalPeriod: "12 Earth years",
      surfaceTemp: "-108°C",
      composition: "Gas giant (hydrogen and helium)",
      moons: "95+ known moons",
      funFact: "Jupiter's Great Red Spot is a giant storm that has been raging for at least 400 years and is larger than Earth!"
    }
  },
  {
    name: "Saturn",
    radius: 2.2,
    distance: 36,
    color: "#FAD5A5",
    orbitSpeed: 0.009,
    facts: {
      diameter: "116,460 km",
      distanceFromSun: "1.4 billion km",
      orbitalPeriod: "29 Earth years",
      surfaceTemp: "-138°C",
      composition: "Gas giant with iconic rings",
      moons: "146+ known moons",
      funFact: "Saturn's rings are made of billions of pieces of ice and rock, and Saturn is so light it could float in water!"
    }
  },
  {
    name: "Uranus",
    radius: 1.5,
    distance: 44,
    color: "#4FD0E7",
    orbitSpeed: 0.007,
    facts: {
      diameter: "50,724 km",
      distanceFromSun: "2.9 billion km",
      orbitalPeriod: "84 Earth years",
      surfaceTemp: "-195°C",
      composition: "Ice giant (water, methane, ammonia)",
      moons: "27+ known moons",
      funFact: "Uranus rotates on its side! It likely got knocked over by a massive collision billions of years ago."
    }
  },
  {
    name: "Neptune",
    radius: 1.4,
    distance: 52,
    color: "#5B5DDF",
    orbitSpeed: 0.005,
    facts: {
      diameter: "49,244 km",
      distanceFromSun: "4.5 billion km",
      orbitalPeriod: "165 Earth years",
      surfaceTemp: "-200°C",
      composition: "Ice giant with supersonic winds",
      moons: "14+ known moons",
      funFact: "Neptune has the strongest winds in the solar system, reaching speeds of 2,100 km/h - faster than the speed of sound!"
    }
  }
];
