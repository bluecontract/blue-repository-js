import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';

export const CdmProductCollateralCollateralCriteriaBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralCriteriaBase']
  )(
    z.object({
      appliesTo: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      collateralCriteria: z.lazy(
        (): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      ratingPriorityResolution: z
        .lazy(() => CdmProductCollateralRatingPriorityResolutionEnumSchema)
        .optional(),
      restrictTo: z
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralCriteriaBase = z.infer<
  typeof CdmProductCollateralCollateralCriteriaBaseSchema
>;
