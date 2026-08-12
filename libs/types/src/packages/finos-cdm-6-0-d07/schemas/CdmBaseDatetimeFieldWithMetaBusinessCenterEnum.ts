import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaBusinessCenterEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema).optional(),
    })
  );

export type CdmBaseDatetimeFieldWithMetaBusinessCenterEnum = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
>;
