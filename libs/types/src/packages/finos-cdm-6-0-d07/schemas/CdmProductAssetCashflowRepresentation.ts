import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';

export const CdmProductAssetCashflowRepresentationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CashflowRepresentation']
  )(
    z.object({
      cashflowsMatchParameters: z.boolean(),
      description: z.string().optional(),
      name: z.string().optional(),
      paymentCalculationPeriod: z
        .array(
          z.lazy(() => CdmProductCommonSchedulePaymentCalculationPeriodSchema)
        )
        .min(0)
        .optional(),
    })
  );

export type CdmProductAssetCashflowRepresentation = z.infer<
  typeof CdmProductAssetCashflowRepresentationSchema
>;
