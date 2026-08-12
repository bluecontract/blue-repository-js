import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';

const zod = z as any;

export const CdmProductCollateralCheckEligibilityResultSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CheckEligibilityResult']
  )(
    zod.object({
      description: zod.string().optional(),
      eligibilityQuery: zod.lazy(
        () => CdmProductCollateralEligibilityQuerySchema
      ),
      isEligible: zod.boolean(),
      matchingEligibleCriteria: zod
        .array(
          zod.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
      specification: zod.lazy(
        () => CdmProductCollateralEligibleCollateralSpecificationSchema
      ),
    })
  );

export type CdmProductCollateralCheckEligibilityResult = z.infer<
  typeof CdmProductCollateralCheckEligibilityResultSchema
>;
