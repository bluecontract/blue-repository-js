export interface SyncCodeGeneratorSchema {
  /** Path to the YAML files directory */
  inputPath: string;

  /** Name of the library to sync the code for */
  libraryName: string;

  /** Generate schemas */
  generateSchemas?: boolean;

  /** Generate blue IDs */
  generateBlueIds?: boolean;
}
