import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathRoundingDirectionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/RoundingDirectionEnum']
  )(
    z.enum(['Down', 'Nearest', 'Up'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathRoundingDirectionEnum = z.infer<
  typeof CdmBaseMathRoundingDirectionEnumSchema
>;
