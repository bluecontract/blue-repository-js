import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';

export const CdmProductCommonSchedulePaymentCalculationPeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentCalculationPeriod'
    ]
  )(
    z.object({
      adjustedPaymentDate: z.string().optional(),
      calculationPeriod: z
        .array(z.lazy(() => CdmProductCommonScheduleCalculationPeriodSchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      discountFactor: z.number().optional(),
      fixedPaymentAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      forecastPaymentAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      name: z.string().optional(),
      presentValueAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      unadjustedPaymentDate: z.string().optional(),
    })
  );

export type CdmProductCommonSchedulePaymentCalculationPeriod = z.infer<
  typeof CdmProductCommonSchedulePaymentCalculationPeriodSchema
>;
