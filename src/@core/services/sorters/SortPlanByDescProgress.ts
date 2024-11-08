type Arg = object | number | string
export function sortInDesc(c1: Arg, c2: Arg) {
  if (c1 < c2) return 1
  if (c1 > c2) return -1
  return 0
}
