import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

export const CdmProductCommonScheduleLagSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/Lag']
)(
  z.object({
    description: z.string().optional(),
    firstObservationDateOffset: z
      .lazy(() => CdmBaseDatetimeOffsetSchema)
      .optional(),
    lagDuration: z.lazy(() => CdmBaseDatetimeOffsetSchema),
    name: z.string().optional(),
  })
);

export type CdmProductCommonScheduleLag = z.infer<
  typeof CdmProductCommonScheduleLagSchema
>;
