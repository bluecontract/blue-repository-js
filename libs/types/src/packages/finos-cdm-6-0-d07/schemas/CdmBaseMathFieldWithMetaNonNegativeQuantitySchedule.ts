import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/math/FieldWithMetaNonNegativeQuantitySchedule'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseMathNonNegativeQuantityScheduleSchema)
        .optional(),
    })
  );

export type CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule = z.infer<
  typeof CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema
>;
