import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

const zod = z as any;

export const CdmProductCommonScheduleLagSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/Lag']
)(
  zod.object({
    description: zod.string().optional(),
    firstObservationDateOffset: zod
      .lazy(() => CdmBaseDatetimeOffsetSchema)
      .optional(),
    lagDuration: zod.lazy(() => CdmBaseDatetimeOffsetSchema),
    name: zod.string().optional(),
  })
);

export type CdmProductCommonScheduleLag = z.infer<
  typeof CdmProductCommonScheduleLagSchema
>;
