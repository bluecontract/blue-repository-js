import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathRoundingDirectionEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/RoundingDirectionEnum']
)(
  zod.enum(['Down', 'Nearest', 'Up'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathRoundingDirectionEnum = z.infer<
  typeof CdmBaseMathRoundingDirectionEnumSchema
>;
