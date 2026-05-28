import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';

export const CdmProductCollateralCollateralProvisionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralProvisions']
  )(
    z.object({
      collateralType: z.lazy(
        () => CdmProductCollateralCollateralTypeEnumSchema
      ),
      description: z.string().optional(),
      eligibleCollateral: z
        .array(
          z.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      substitutionProvisions: z
        .lazy(() => CdmProductCollateralSubstitutionProvisionsSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralProvisions = z.infer<
  typeof CdmProductCollateralCollateralProvisionsSchema
>;
