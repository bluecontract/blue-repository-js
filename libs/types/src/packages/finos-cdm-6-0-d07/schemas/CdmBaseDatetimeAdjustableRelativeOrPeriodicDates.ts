import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';

export const CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableRelativeOrPeriodicDates'
    ]
  )(
    z.object({
      adjustableDates: z
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      periodicDates: z
        .lazy(() => CdmBaseDatetimePeriodicDatesSchema)
        .optional(),
      relativeDates: z
        .lazy(() => CdmBaseDatetimeRelativeDatesSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableRelativeOrPeriodicDates = z.infer<
  typeof CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema
>;
