import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';

const zod = z as any;

export const CdmProductCommonSchedulePaymentCalculationPeriodSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentCalculationPeriod'
    ]
  )(
    zod.object({
      adjustedPaymentDate: zod.string().optional(),
      calculationPeriod: zod
        .array(zod.lazy(() => CdmProductCommonScheduleCalculationPeriodSchema))
        .min(1)
        .optional(),
      description: zod.string().optional(),
      discountFactor: zod.number().optional(),
      fixedPaymentAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      forecastPaymentAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      name: zod.string().optional(),
      presentValueAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      unadjustedPaymentDate: zod.string().optional(),
    })
  );

export type CdmProductCommonSchedulePaymentCalculationPeriod = z.infer<
  typeof CdmProductCommonSchedulePaymentCalculationPeriodSchema
>;
