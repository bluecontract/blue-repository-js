import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';

export const CdmProductCollateralCheckEligibilityResultSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CheckEligibilityResult']
  )(
    z.object({
      description: z.string().optional(),
      eligibilityQuery: z.lazy(
        () => CdmProductCollateralEligibilityQuerySchema
      ),
      isEligible: z.boolean(),
      matchingEligibleCriteria: z
        .array(
          z.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      specification: z.lazy(
        () => CdmProductCollateralEligibleCollateralSpecificationSchema
      ),
    })
  );

export type CdmProductCollateralCheckEligibilityResult = z.infer<
  typeof CdmProductCollateralCheckEligibilityResultSchema
>;
