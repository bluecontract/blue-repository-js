import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
import { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';

const zod = z as any;

export const CdmProductCollateralCollateralTreatmentSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralTreatment']
  )(
    zod.object({
      concentrationLimit: zod
        .array(zod.lazy(() => CdmProductCollateralConcentrationLimitSchema))
        .min(0)
        .optional(),
      description: zod.string().optional(),
      isIncluded: zod.boolean(),
      name: zod.string().optional(),
      valuationTreatment: zod
        .lazy(() => CdmProductCollateralCollateralValuationTreatmentSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralTreatment = z.infer<
  typeof CdmProductCollateralCollateralTreatmentSchema
>;
