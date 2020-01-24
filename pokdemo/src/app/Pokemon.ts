import {Stat} from "./Stat";

export class Pokemon {
  id: number;
  name: string;
  stats : Stat[];

  constructor(id:number, name:string, stats: Stat[]) {
    this.id = id;
    this.name = name;
    this.stats = stats;

  }

  getId ():number{
    return this.id;
  }
  getName ():string{
    return this.name;
  }

  getStats(): Stat[]{
    return this.stats;
  }

  addStats(s:Stat){
    this.stats.push(s);
  }
}
