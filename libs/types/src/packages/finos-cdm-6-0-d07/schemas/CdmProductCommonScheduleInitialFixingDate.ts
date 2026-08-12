import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';

const zod = z as any;

export const CdmProductCommonScheduleInitialFixingDateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/InitialFixingDate']
  )(
    zod.object({
      description: zod.string().optional(),
      initialFixingDate: zod.string().optional(),
      name: zod.string().optional(),
      relativeDateOffset: zod
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleInitialFixingDate = z.infer<
  typeof CdmProductCommonScheduleInitialFixingDateSchema
>;
