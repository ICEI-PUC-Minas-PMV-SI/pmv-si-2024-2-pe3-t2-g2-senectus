export function makeUrlFriend(input: string) {
  return encodeURIComponent(input.replaceAll(' ', '_').toLowerCase())
}
