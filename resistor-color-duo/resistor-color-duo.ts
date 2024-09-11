export function decodedValue(colors: string[]): number {
  const firstColor = COLORS.indexOf(colors[0]);
  const secondColor = COLORS.indexOf(colors[1]);
  return firstColor * 10 + secondColor;
}

const COLORS: string[] = [
  'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
];
