import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';

export const CdmProductCollateralDistributionAndInterestPaymentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/DistributionAndInterestPayment'
    ]
  )(
    z.object({
      description: z.string().optional(),
      interestParameters: z
        .array(
          z.lazy(() => CdmProductCollateralCollateralInterestParametersSchema)
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralDistributionAndInterestPayment = z.infer<
  typeof CdmProductCollateralDistributionAndInterestPaymentSchema
>;
