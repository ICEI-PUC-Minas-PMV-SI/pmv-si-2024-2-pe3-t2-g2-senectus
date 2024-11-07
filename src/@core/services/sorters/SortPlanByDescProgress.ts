export function sortInDesc(c1: object, c2: object) {
  if (c1 < c2) return 1
  if (c1 > c2) return -1
  return 0
}
