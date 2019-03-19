const initialState = {
  placement: [
    {
      name: 'noord',
      factor: 0.98,
    },
    {
      name: 'oost',
      factor: 0.99,
    },
    {
      name: 'west',
      factor: 1.01,
    },
    {
      name: 'zuid',
      factor: 1.02,
    },
  ],
  floors: [
    {
      name: 'Begane grond',
      factor: 0.98,
    },
    {
      name: 'Eerste verdieping',
      factor: 0.99,
    },
    {
      name: 'Tweede verdiepeing',
      factor: 0.995,
    },
    {
      name: 'Derde verdieping',
      factor: 1,
    },
    {
      name: 'Vierde en vijfde verdiepeing',
      factor: 1.005,
    },
    {
      name: 'Zesde en zevende verdiepeing',
      factor: 1.01,
    },
    {
      name: 'Achtste verdiepeing en hoger',
      factor: 1.015,
    },
    {
      name: 'Bovenste verdieping',
      factor: 1.025,
    },
    {
      name: 'Hoogte 4 meter (begane grond hoek)',
      factor: 1.03,
    },
  ],
  floorSize: [
    {
      min: 40,
      max: 45,
      factor: 1.15,
    },
    {
      min: 46,
      max: 50,
      factor: 1.13,
    },
    {
      min: 51,
      max: 55,
      factor: 1.1,
    },
    {
      min: 56,
      max: 60,
      factor: 1.06,
    },
    {
      min: 61,
      max: 62,
      factor: 1.03,
    },
    {
      min: 63,
      max: 63,
      factor: 1,
    },
    {
      min: 64,
      max: 65,
      factor: 0.99,
    },
    {
      min: 66,
      max: 70,
      factor: 0.95,
    },
    {
      min: 71,
      max: 75,
      factor: 0.925,
    },
    {
      min: 76,
      max: 80,
      factor: 0.9,
    },
    {
      min: 81,
      max: 90,
      factor: 0.97,
    },
    {
      min: 91,
      max: 100,
      factor: 0.85,
    },
    {
      min: 101,
      max: Infinity,
      factor: 0.8,
    },
  ],
};

export default initialState;
