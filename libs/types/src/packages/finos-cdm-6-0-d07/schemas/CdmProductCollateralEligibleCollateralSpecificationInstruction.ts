import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';

export const CdmProductCollateralEligibleCollateralSpecificationInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralSpecificationInstruction'
    ]
  )(
    z.object({
      common: z.lazy(
        () => CdmProductCollateralEligibleCollateralCriteriaSchema
      ),
      name: z.string().optional(),
      variable: z
        .array(
          z.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(1)
        .optional(),
    })
  );

export type CdmProductCollateralEligibleCollateralSpecificationInstruction =
  z.infer<
    typeof CdmProductCollateralEligibleCollateralSpecificationInstructionSchema
  >;
