import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';

const zod = z as any;

export const CdmProductCollateralAllCriteriaSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AllCriteria']
)(
  zod.object({
    allCriteria: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema
        )
      )
      .min(2)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralAllCriteria = z.infer<
  typeof CdmProductCollateralAllCriteriaSchema
>;
