import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/math/FieldWithMetaNonNegativeQuantitySchedule'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseMathNonNegativeQuantityScheduleSchema)
        .optional(),
    })
  );

export type CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule = z.infer<
  typeof CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema
>;
