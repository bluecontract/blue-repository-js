export interface BlueType {
  moduleName: string;
  moduleBlueId: string;
}

export interface PackageJson {
  version: string;
  blueType?: BlueType;
}
