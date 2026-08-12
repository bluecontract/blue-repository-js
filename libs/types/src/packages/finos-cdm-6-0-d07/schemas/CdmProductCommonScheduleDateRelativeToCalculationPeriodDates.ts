import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';

const zod = z as any;

export const CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToCalculationPeriodDates'
    ]
  )(
    zod.object({
      calculationPeriodDatesReference: zod
        .array(
          zod.lazy(
            () =>
              CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
          )
        )
        .min(1)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleDateRelativeToCalculationPeriodDates =
  z.infer<
    typeof CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema
  >;
