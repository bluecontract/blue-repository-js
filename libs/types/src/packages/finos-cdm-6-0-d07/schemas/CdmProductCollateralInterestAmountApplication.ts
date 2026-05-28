import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
import { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';

export const CdmProductCollateralInterestAmountApplicationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/InterestAmountApplication'
    ]
  )(
    z.object({
      deliveryAmount: z.lazy(() => CdmProductCollateralDeliveryAmountSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      returnAmount: z.lazy(() => CdmProductCollateralReturnAmountSchema),
    })
  );

export type CdmProductCollateralInterestAmountApplication = z.infer<
  typeof CdmProductCollateralInterestAmountApplicationSchema
>;
