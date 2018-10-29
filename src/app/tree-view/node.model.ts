export enum NodeType {
  ExtDes,
  ParamDefaut,
  ParamFix,
  ParamFlex,
  ParamFlag
}

export class Node {
  public desc: string;
  public type: NodeType;
  public children: Node[];


  constructor(desc: string, type: NodeType, children: Node[]) {
    this.desc = desc;
    this.type = type;
    this.children = children;
  }
}
