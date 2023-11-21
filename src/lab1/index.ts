export function sum(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function mul(a: number, b: number): number {
  return a * b;
}

export function div(a: number, b: number): number {
  return a / b;
}

export function pow(a: number, b: number): number {
  return a ** b;
}

export function gip(a: number, b: number): number {
  return Math.sqrt(a ** 2 + b ** 2);
}

export function deg1(a: number, b: number): number {
  return (Math.atan(b / a) * 180) / Math.PI;
}

export function deg2(a: number, b: number): number {
  return (Math.atan(a / b) * 180) / Math.PI;
}
