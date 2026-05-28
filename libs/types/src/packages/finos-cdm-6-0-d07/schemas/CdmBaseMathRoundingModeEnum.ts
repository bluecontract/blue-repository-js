import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathRoundingModeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/RoundingModeEnum']
)(
  z.enum(['Down', 'Up'] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathRoundingModeEnum = z.infer<
  typeof CdmBaseMathRoundingModeEnumSchema
>;
