import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';

export const CdmProductCollateralNegativeCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/NegativeCriteria']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      negativeCriteria: z.lazy(
        (): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema
      ),
    })
  );

export type CdmProductCollateralNegativeCriteria = z.infer<
  typeof CdmProductCollateralNegativeCriteriaSchema
>;
