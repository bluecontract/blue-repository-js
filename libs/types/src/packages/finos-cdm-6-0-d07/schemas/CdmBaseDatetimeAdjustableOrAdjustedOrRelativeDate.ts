import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrAdjustedOrRelativeDate'
    ]
  )(
    z.object({
      adjustedDate: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      dateAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      relativeDate: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      unadjustedDate: z.string().optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate = z.infer<
  typeof CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema
>;
