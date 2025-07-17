export interface ContentsGeneratorSchema {
  /**
   * The name of your Nx project/library.
   * e.g. 'my-zod-lib'
   */
  libraryName: string;

  /**
   * The directory where .blue files exist (usually 'blue-preprocessed/SomeModule').
   */
  inputPath: string;

  /**
   * Skip Nx/Prettier formatting after generation.
   */
  skipFormat?: boolean;
}
