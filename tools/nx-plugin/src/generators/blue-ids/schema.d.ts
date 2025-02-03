export interface BlueIdsGeneratorSchema {
  /** Path to the blue-ids.yaml file */
  inputPath: string;

  /** Name of the library to generate the blue IDs for */
  libraryName: string;

  /** Skip formatting files */
  skipFormat?: boolean;
}
