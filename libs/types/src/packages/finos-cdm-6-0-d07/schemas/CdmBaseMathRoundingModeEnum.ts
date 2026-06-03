import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathRoundingModeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/RoundingModeEnum']
)(
  zod.enum(['Down', 'Up'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathRoundingModeEnum = z.infer<
  typeof CdmBaseMathRoundingModeEnumSchema
>;
