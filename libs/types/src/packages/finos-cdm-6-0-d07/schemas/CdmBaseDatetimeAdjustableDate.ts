import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseDatetimeAdjustableDateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableDate']
)(
  z.object({
    adjustedDate: z
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    dateAdjustments: z
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    dateAdjustmentsReference: z
      .lazy(
        () =>
          CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema
      )
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    unadjustedDate: z.string().optional(),
  })
);

export type CdmBaseDatetimeAdjustableDate = z.infer<
  typeof CdmBaseDatetimeAdjustableDateSchema
>;
