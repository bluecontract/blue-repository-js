import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';

const zod = z as any;

export const CdmBaseDatetimeAdjustableOrRelativeDateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrRelativeDate']
  )(
    zod.object({
      adjustableDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      relativeDate: zod
        .lazy(() => CdmBaseDatetimeAdjustedRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrRelativeDate = z.infer<
  typeof CdmBaseDatetimeAdjustableOrRelativeDateSchema
>;
