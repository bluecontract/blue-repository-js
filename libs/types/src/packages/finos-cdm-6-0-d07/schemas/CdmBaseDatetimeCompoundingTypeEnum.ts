import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeCompoundingTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CompoundingTypeEnum']
  )(
    z.enum(['Business', 'Calendar', 'None'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseDatetimeCompoundingTypeEnum = z.infer<
  typeof CdmBaseDatetimeCompoundingTypeEnumSchema
>;
