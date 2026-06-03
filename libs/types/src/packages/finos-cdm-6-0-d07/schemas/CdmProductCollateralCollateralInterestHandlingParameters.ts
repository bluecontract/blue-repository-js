import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
import { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
import { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
import { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
import { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';

const zod = z as any;

export const CdmProductCollateralCollateralInterestHandlingParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestHandlingParameters'
    ]
  )(
    zod.object({
      accrueInterestOnUnsettledInterest: zod.boolean().optional(),
      alternativeProvision: zod.string().optional(),
      alternativeToInterestAmount: zod
        .lazy(() => CdmProductCollateralAlternativeToInterestAmountEnumSchema)
        .optional(),
      cutoffTime: zod.string().optional(),
      description: zod.string().optional(),
      includeAccrualInMarginCalc: zod.boolean(),
      interestAmountApplication: zod
        .lazy(() => CdmProductCollateralInterestAmountApplicationSchema)
        .optional(),
      interestPaymentHandling: zod.lazy(
        () => CdmProductCollateralCollateralInterestHandlingEnumSchema
      ),
      interestRolloverLimit: zod
        .lazy(() => CdmBaseMathNumberBoundSchema)
        .optional(),
      name: zod.string().optional(),
      netInterestWithMarginCalls: zod.boolean(),
      netPostedAndHeldInterest: zod.boolean(),
      notification: zod
        .lazy(() => CdmProductCollateralCollateralInterestNotificationSchema)
        .optional(),
      onFullReturn: zod.boolean(),
      onPartialReturn: zod.boolean(),
      paymentBusinessCenter: zod
        .array(zod.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
        .min(0)
        .optional(),
      writeoffLimit: zod.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
    })
  );

export type CdmProductCollateralCollateralInterestHandlingParameters = z.infer<
  typeof CdmProductCollateralCollateralInterestHandlingParametersSchema
>;
