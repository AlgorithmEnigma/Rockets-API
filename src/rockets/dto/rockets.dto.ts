export class RocketDTO {
  readonly id: string;
  readonly name: string;
  readonly year: string;
  readonly manufacturer: string;
}

export class CreateRocketDTO {
  readonly name: string;
  readonly year: string;
  readonly manufacturer: string;
}
