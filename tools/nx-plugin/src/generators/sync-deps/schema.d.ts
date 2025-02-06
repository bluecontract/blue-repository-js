export interface SyncDepsGeneratorSchema {
  /** Name of the library to sync the dependencies for */
  libraryName: string;

  /** Skip formatting files */
  skipFormat?: boolean;
}
