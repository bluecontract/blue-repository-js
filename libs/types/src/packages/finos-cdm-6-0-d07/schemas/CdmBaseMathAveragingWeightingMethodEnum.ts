import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathAveragingWeightingMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingWeightingMethodEnum']
  )(
    z.enum(['Unweighted', 'Weighted'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathAveragingWeightingMethodEnum = z.infer<
  typeof CdmBaseMathAveragingWeightingMethodEnumSchema
>;
