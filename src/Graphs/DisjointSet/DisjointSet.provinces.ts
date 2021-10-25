import DisjointSet from "./DisjointSet";

export default class Provinces {
  ds: DisjointSet
  citiesList: Array<Array<number>>

  constructor(input: Array<Array<number>>) {
    this.citiesList = input;
    this.ds = new DisjointSet();

    new Array(this.citiesList.length)
      .fill(null)
      .forEach((_, index) => this.ds.add(index));
  }

  analyze() {
    for (let i = 0; i < this.citiesList.length; i++) {
      for (let j = i + 1; j < this.citiesList.length; j++) {
        if (this.citiesList[i][j] === 1) {
          this.ds.union(i, j);
        }
      }
    }

    return this.ds.size
  }
}
