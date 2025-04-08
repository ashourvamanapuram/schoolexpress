export function calculateGCD(a: number, b: number): number {
    if (!b) return a;
    return calculateGCD(b, a % b);
}
