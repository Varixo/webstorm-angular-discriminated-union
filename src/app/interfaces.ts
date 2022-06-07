export interface InterfaceA {
  type: 'A'
}

export interface InterfaceB {
  type: 'B'
}

export type Interface = InterfaceA | InterfaceB;
