import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';

const zod = z as any;

export const CdmProductCollateralDeliveryAmountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/DeliveryAmount']
)(
  zod.object({
    customElection: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    standardElection: zod
      .lazy(() => CdmProductCollateralDeliveryAmountElectionEnumSchema)
      .optional(),
  })
);

export type CdmProductCollateralDeliveryAmount = z.infer<
  typeof CdmProductCollateralDeliveryAmountSchema
>;
