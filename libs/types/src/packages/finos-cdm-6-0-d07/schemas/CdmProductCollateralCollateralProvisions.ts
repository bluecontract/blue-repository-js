import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';

const zod = z as any;

export const CdmProductCollateralCollateralProvisionsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralProvisions']
  )(
    zod.object({
      collateralType: zod.lazy(
        () => CdmProductCollateralCollateralTypeEnumSchema
      ),
      description: zod.string().optional(),
      eligibleCollateral: zod
        .array(
          zod.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
      substitutionProvisions: zod
        .lazy(() => CdmProductCollateralSubstitutionProvisionsSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralProvisions = z.infer<
  typeof CdmProductCollateralCollateralProvisionsSchema
>;
