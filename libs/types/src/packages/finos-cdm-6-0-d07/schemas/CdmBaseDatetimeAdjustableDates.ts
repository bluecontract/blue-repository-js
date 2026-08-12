import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseDatetimeAdjustableDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableDates']
)(
  zod.object({
    adjustedDate: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
    dateAdjustments: zod
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    unadjustedDate: zod.array(zod.string()).min(0).optional(),
  })
);

export type CdmBaseDatetimeAdjustableDates = z.infer<
  typeof CdmBaseDatetimeAdjustableDatesSchema
>;
