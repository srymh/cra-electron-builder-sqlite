export type Idol = {
  name: string;
  age: number;
};

export function isIdol(arg: any): arg is Idol {
  return arg.name !== undefined && arg.age !== undefined;
}
