import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralCollateralValuationTreatmentSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralValuationTreatment'
    ]
  )(
    zod.object({
      additionalHaircutPercentage: zod.number().optional(),
      description: zod.string().optional(),
      fxHaircutPercentage: zod.number().optional(),
      haircutPercentage: zod.number().optional(),
      marginPercentage: zod.number().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralCollateralValuationTreatment = z.infer<
  typeof CdmProductCollateralCollateralValuationTreatmentSchema
>;
