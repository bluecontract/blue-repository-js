import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateOptionExerciseStyleEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionExerciseStyleEnum']
  )(
    zod.enum(['American', 'Bermuda', 'European'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateOptionExerciseStyleEnum = z.infer<
  typeof CdmProductTemplateOptionExerciseStyleEnumSchema
>;
