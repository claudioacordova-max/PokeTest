export type pokemon = {
  name: string;
  sprites: { other: { home: { front_default: string } } };
  id: number;
};

export type Region = {
  name: string;
  min: number;
  max: number;
};
