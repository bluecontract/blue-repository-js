import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
import { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';

const zod = z as any;

export const CdmProductCollateralInterestAmountApplicationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/InterestAmountApplication'
    ]
  )(
    zod.object({
      deliveryAmount: zod.lazy(() => CdmProductCollateralDeliveryAmountSchema),
      description: zod.string().optional(),
      name: zod.string().optional(),
      returnAmount: zod.lazy(() => CdmProductCollateralReturnAmountSchema),
    })
  );

export type CdmProductCollateralInterestAmountApplication = z.infer<
  typeof CdmProductCollateralInterestAmountApplicationSchema
>;
