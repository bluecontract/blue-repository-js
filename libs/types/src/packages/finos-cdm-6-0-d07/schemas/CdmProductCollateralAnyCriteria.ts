import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';

const zod = z as any;

export const CdmProductCollateralAnyCriteriaSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AnyCriteria']
)(
  zod.object({
    anyCriteria: zod
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

export type CdmProductCollateralAnyCriteria = z.infer<
  typeof CdmProductCollateralAnyCriteriaSchema
>;
