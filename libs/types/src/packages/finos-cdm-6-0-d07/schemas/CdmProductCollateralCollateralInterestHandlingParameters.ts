import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
import { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
import { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
import { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
import { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';

export const CdmProductCollateralCollateralInterestHandlingParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestHandlingParameters'
    ]
  )(
    z.object({
      accrueInterestOnUnsettledInterest: z.boolean().optional(),
      alternativeProvision: z.string().optional(),
      alternativeToInterestAmount: z
        .lazy(() => CdmProductCollateralAlternativeToInterestAmountEnumSchema)
        .optional(),
      cutoffTime: z.string().optional(),
      description: z.string().optional(),
      includeAccrualInMarginCalc: z.boolean(),
      interestAmountApplication: z
        .lazy(() => CdmProductCollateralInterestAmountApplicationSchema)
        .optional(),
      interestPaymentHandling: z.lazy(
        () => CdmProductCollateralCollateralInterestHandlingEnumSchema
      ),
      interestRolloverLimit: z
        .lazy(() => CdmBaseMathNumberBoundSchema)
        .optional(),
      name: z.string().optional(),
      netInterestWithMarginCalls: z.boolean(),
      netPostedAndHeldInterest: z.boolean(),
      notification: z
        .lazy(() => CdmProductCollateralCollateralInterestNotificationSchema)
        .optional(),
      onFullReturn: z.boolean(),
      onPartialReturn: z.boolean(),
      paymentBusinessCenter: z
        .array(z.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
        .min(0)
        .optional(),
      writeoffLimit: z.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
    })
  );

export type CdmProductCollateralCollateralInterestHandlingParameters = z.infer<
  typeof CdmProductCollateralCollateralInterestHandlingParametersSchema
>;
