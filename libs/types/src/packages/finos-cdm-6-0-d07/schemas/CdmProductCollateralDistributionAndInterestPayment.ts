import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';

const zod = z as any;

export const CdmProductCollateralDistributionAndInterestPaymentSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/DistributionAndInterestPayment'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      interestParameters: zod
        .array(
          zod.lazy(() => CdmProductCollateralCollateralInterestParametersSchema)
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralDistributionAndInterestPayment = z.infer<
  typeof CdmProductCollateralDistributionAndInterestPaymentSchema
>;
