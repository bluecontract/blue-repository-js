import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';

const zod = z as any;

export const CdmProductCollateralEligibleCollateralSpecificationInstructionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralSpecificationInstruction'
    ]
  )(
    zod.object({
      common: zod.lazy(
        () => CdmProductCollateralEligibleCollateralCriteriaSchema
      ),
      name: zod.string().optional(),
      variable: zod
        .array(
          zod.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(1)
        .optional(),
    })
  );

export type CdmProductCollateralEligibleCollateralSpecificationInstruction =
  z.infer<
    typeof CdmProductCollateralEligibleCollateralSpecificationInstructionSchema
  >;
