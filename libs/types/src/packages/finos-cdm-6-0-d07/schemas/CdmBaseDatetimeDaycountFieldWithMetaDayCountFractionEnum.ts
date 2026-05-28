import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/daycount/FieldWithMetaDayCountFractionEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseDatetimeDaycountDayCountFractionEnumSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum = z.infer<
  typeof CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
>;
