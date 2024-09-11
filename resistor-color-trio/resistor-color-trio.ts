export function decodedResistorValue(colors: string[]): string {
  let ohmValue = decodedValue(colors);

  let unit = "ohms";
  if (ohmValue > 1_000_000_000)
    {
      ohmValue = ohmValue / 1_000_000_000;
      unit = "gigaohms";
    }
    else if (ohmValue > 1_000_000)
    {
      ohmValue = ohmValue / 1_000_000; 
      unit = "megaohms";
    }
    else if (ohmValue > 1_000)
    {
      ohmValue = ohmValue / 1_000;
      unit = "kiloohms";
    }

  return `${ohmValue} ${unit}`;

}

function decodedValue(colors: string[]): number {
  const firstColor = COLORS.indexOf(colors[0]);
  const secondColor = COLORS.indexOf(colors[1]);
  const thirdColor = COLORS.indexOf(colors[2]);
  return (firstColor * 10 + secondColor) * (10 **  thirdColor);
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
