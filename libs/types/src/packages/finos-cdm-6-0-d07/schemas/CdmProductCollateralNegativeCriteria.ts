import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';

const zod = z as any;

export const CdmProductCollateralNegativeCriteriaSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/NegativeCriteria']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    negativeCriteria: zod.lazy(
      (): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema
    ),
  })
);

export type CdmProductCollateralNegativeCriteria = z.infer<
  typeof CdmProductCollateralNegativeCriteriaSchema
>;
