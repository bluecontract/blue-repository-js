import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaCommodityBusinessCalendarEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseDatetimeCommodityBusinessCalendarEnumSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema
>;
