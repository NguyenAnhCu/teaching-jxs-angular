export class Stat {
  baseStat: number;
  effort:number;
  stat: string;

  constructor(baseStat: number, effort: number, stat: string) {
    this.baseStat = baseStat;
    this.effort = effort;
    this.stat = stat;
  }
}
