import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaCommodityBusinessCalendarEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseDatetimeCommodityBusinessCalendarEnumSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema
>;
