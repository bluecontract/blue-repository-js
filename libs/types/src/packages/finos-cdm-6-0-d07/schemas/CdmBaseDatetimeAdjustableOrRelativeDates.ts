import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';

const zod = z as any;

export const CdmBaseDatetimeAdjustableOrRelativeDatesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrRelativeDates']
  )(
    zod.object({
      adjustableDates: zod
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      relativeDates: zod
        .lazy(() => CdmBaseDatetimeRelativeDatesSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrRelativeDates = z.infer<
  typeof CdmBaseDatetimeAdjustableOrRelativeDatesSchema
>;
