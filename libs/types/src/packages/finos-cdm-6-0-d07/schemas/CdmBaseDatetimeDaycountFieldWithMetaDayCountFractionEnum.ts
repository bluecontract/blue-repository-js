import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/daycount/FieldWithMetaDayCountFractionEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseDatetimeDaycountDayCountFractionEnumSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum = z.infer<
  typeof CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
>;
