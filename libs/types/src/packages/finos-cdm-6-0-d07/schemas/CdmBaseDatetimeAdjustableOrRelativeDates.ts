import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';

export const CdmBaseDatetimeAdjustableOrRelativeDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrRelativeDates']
  )(
    z.object({
      adjustableDates: z
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      relativeDates: z
        .lazy(() => CdmBaseDatetimeRelativeDatesSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrRelativeDates = z.infer<
  typeof CdmBaseDatetimeAdjustableOrRelativeDatesSchema
>;
