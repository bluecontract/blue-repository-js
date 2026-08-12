import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableOrAdjustedOrRelativeDate'
    ]
  )(
    zod.object({
      adjustedDate: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      dateAdjustments: zod
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      relativeDate: zod
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      unadjustedDate: zod.string().optional(),
    })
  );

export type CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate = z.infer<
  typeof CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema
>;
