export interface TestInterface {
  name: string;
  grades: Grade[];
  id?: number;
}

export interface Grade {
  id?: number;
  name: string;
}

