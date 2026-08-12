import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';

const zod = z as any;

export const CdmProductAssetCashflowRepresentationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CashflowRepresentation']
)(
  zod.object({
    cashflowsMatchParameters: zod.boolean(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentCalculationPeriod: zod
      .array(
        zod.lazy(() => CdmProductCommonSchedulePaymentCalculationPeriodSchema)
      )
      .min(0)
      .optional(),
  })
);

export type CdmProductAssetCashflowRepresentation = z.infer<
  typeof CdmProductAssetCashflowRepresentationSchema
>;
