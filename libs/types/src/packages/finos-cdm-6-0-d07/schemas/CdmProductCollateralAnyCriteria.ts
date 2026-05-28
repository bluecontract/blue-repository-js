import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';

export const CdmProductCollateralAnyCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AnyCriteria']
  )(
    z.object({
      anyCriteria: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema
          )
        )
        .min(2)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralAnyCriteria = z.infer<
  typeof CdmProductCollateralAnyCriteriaSchema
>;
