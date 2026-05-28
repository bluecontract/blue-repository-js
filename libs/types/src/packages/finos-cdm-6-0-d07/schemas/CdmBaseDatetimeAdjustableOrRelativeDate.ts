import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';

export const CdmBaseDatetimeAdjustableOrRelativeDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrRelativeDate']
  )(
    z.object({
      adjustableDate: z
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      relativeDate: z
        .lazy(() => CdmBaseDatetimeAdjustedRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrRelativeDate = z.infer<
  typeof CdmBaseDatetimeAdjustableOrRelativeDateSchema
>;
