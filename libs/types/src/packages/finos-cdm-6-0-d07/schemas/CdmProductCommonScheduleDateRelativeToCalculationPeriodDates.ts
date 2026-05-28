import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';

export const CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToCalculationPeriodDates'
    ]
  )(
    z.object({
      calculationPeriodDatesReference: z
        .array(
          z.lazy(
            () =>
              CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
          )
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleDateRelativeToCalculationPeriodDates =
  z.infer<
    typeof CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema
  >;
