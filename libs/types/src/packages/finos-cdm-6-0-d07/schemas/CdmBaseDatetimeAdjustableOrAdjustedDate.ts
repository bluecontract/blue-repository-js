import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseDatetimeAdjustableOrAdjustedDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrAdjustedDate']
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
      unadjustedDate: z.string().optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrAdjustedDate = z.infer<
  typeof CdmBaseDatetimeAdjustableOrAdjustedDateSchema
>;
