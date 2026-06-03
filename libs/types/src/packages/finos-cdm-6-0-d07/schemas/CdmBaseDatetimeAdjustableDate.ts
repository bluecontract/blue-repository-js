import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseDatetimeAdjustableDateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustableDate']
)(
  zod.object({
    adjustedDate: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    dateAdjustments: zod
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    dateAdjustmentsReference: zod
      .lazy(
        () =>
          CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema
      )
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    unadjustedDate: zod.string().optional(),
  })
);

export type CdmBaseDatetimeAdjustableDate = z.infer<
  typeof CdmBaseDatetimeAdjustableDateSchema
>;
