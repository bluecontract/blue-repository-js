import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';

export const CdmBaseDatetimeBusinessDayAdjustmentsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessDayAdjustments']
  )(
    z.object({
      businessCenters: z
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      businessDayConvention: z.lazy(
        () => CdmBaseDatetimeBusinessDayConventionEnumSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseDatetimeBusinessDayAdjustments = z.infer<
  typeof CdmBaseDatetimeBusinessDayAdjustmentsSchema
>;
