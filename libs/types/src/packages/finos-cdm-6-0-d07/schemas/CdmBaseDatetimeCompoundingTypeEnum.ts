import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeCompoundingTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CompoundingTypeEnum']
)(
  zod.enum(['Business', 'Calendar', 'None'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimeCompoundingTypeEnum = z.infer<
  typeof CdmBaseDatetimeCompoundingTypeEnumSchema
>;
