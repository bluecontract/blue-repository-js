import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralCollateralValuationTreatmentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralValuationTreatment'
    ]
  )(
    z.object({
      additionalHaircutPercentage: z.number().optional(),
      description: z.string().optional(),
      fxHaircutPercentage: z.number().optional(),
      haircutPercentage: z.number().optional(),
      marginPercentage: z.number().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralCollateralValuationTreatment = z.infer<
  typeof CdmProductCollateralCollateralValuationTreatmentSchema
>;
