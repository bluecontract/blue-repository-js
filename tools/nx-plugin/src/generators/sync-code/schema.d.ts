export interface SyncCodeGeneratorSchema {
  /** Path to BlueRepository.blue (relative to workspace root) */
  sourcePath?: string;
  /** Skip formatting generated files. */
  skipFormat?: boolean;
}
