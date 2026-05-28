import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';

export const CdmBaseDatetimeBusinessDateRangeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessDateRange']
  )(
    z.object({
      businessCenters: z
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      businessDayConvention: z.lazy(
        () => CdmBaseDatetimeBusinessDayConventionEnumSchema
      ),
      description: z.string().optional(),
      endDate: z.string().optional(),
      name: z.string().optional(),
      startDate: z.string().optional(),
    })
  );

export type CdmBaseDatetimeBusinessDateRange = z.infer<
  typeof CdmBaseDatetimeBusinessDateRangeSchema
>;
