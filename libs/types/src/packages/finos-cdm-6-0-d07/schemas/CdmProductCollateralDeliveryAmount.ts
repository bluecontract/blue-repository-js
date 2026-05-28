import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';

export const CdmProductCollateralDeliveryAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/DeliveryAmount']
  )(
    z.object({
      customElection: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      standardElection: z
        .lazy(() => CdmProductCollateralDeliveryAmountElectionEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralDeliveryAmount = z.infer<
  typeof CdmProductCollateralDeliveryAmountSchema
>;
