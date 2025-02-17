export type LibraryConfig = {
  /**
   * Path to the blue-ids.yaml file
   */
  blueIdsYamlFile: string;
  /**
   * Path to the parent directory of the blue-ids.yaml file
   */
  parentDir: string;
  /**
   * Name of the package to be generated
   */
  name: string;
  /**
   * Import path of the package to be generated
   */
  importPackageName: string;
  /**
   * Whether the library exists
   */
  exists: boolean;
  /**
   * The current blueId of the library
   */
  currentBlueId: string | null;
  /**
   * The new blueId of the library
   */
  newBlueId: string | null;
};
