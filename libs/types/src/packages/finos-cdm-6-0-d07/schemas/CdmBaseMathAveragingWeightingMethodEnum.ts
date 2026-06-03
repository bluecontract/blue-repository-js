import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathAveragingWeightingMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingWeightingMethodEnum']
  )(
    zod.enum(['Unweighted', 'Weighted'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathAveragingWeightingMethodEnum = z.infer<
  typeof CdmBaseMathAveragingWeightingMethodEnumSchema
>;
