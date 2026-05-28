import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
import { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';

export const CdmProductCollateralCollateralTreatmentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralTreatment']
  )(
    z.object({
      concentrationLimit: z
        .array(z.lazy(() => CdmProductCollateralConcentrationLimitSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      isIncluded: z.boolean(),
      name: z.string().optional(),
      valuationTreatment: z
        .lazy(() => CdmProductCollateralCollateralValuationTreatmentSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralTreatment = z.infer<
  typeof CdmProductCollateralCollateralTreatmentSchema
>;
