function noop(node) {
  console.log(`Visit vertex ${node}`);
}

class DFSHelper {

  constructor() {}

  public printTree() {}

  // @ts-ignore
  public traverse(start: number, end: number, onVisit: (node) => void = noop) {
    // findTheStartPoint
  }
}

export default DFSHelper;
