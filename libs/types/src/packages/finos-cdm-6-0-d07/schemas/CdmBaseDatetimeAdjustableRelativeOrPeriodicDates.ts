import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';

const zod = z as any;

export const CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableRelativeOrPeriodicDates'
    ]
  )(
    zod.object({
      adjustableDates: zod
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      periodicDates: zod
        .lazy(() => CdmBaseDatetimePeriodicDatesSchema)
        .optional(),
      relativeDates: zod
        .lazy(() => CdmBaseDatetimeRelativeDatesSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableRelativeOrPeriodicDates = z.infer<
  typeof CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema
>;
