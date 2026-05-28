import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';

export const CdmProductCommonScheduleInitialFixingDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/InitialFixingDate']
  )(
    z.object({
      description: z.string().optional(),
      initialFixingDate: z.string().optional(),
      name: z.string().optional(),
      relativeDateOffset: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleInitialFixingDate = z.infer<
  typeof CdmProductCommonScheduleInitialFixingDateSchema
>;
