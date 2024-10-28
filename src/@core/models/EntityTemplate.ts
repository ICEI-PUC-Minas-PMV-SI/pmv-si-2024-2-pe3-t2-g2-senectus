export abstract class EntityTemplate<T> {
  abstract clone(): T
  abstract serialize(): string
  abstract deserialize(json: string): T
}
