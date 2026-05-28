import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseDatetimeAdjustableDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableDates']
  )(
    z.object({
      adjustedDate: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      dateAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      unadjustedDate: z.array(z.string()).min(0).optional(),
    })
  );

export type CdmBaseDatetimeAdjustableDates = z.infer<
  typeof CdmBaseDatetimeAdjustableDatesSchema
>;
