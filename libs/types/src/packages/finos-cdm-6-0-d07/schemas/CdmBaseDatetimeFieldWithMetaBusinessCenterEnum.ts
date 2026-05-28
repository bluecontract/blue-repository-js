import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaBusinessCenterEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema).optional(),
    })
  );

export type CdmBaseDatetimeFieldWithMetaBusinessCenterEnum = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
>;
