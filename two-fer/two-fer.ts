// Declare the overloads
export function twoFer(): string;
export function twoFer(name: string): string;

// Provide a single implementation for all overloads
export function twoFer(name?: string): string {
  if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
}
