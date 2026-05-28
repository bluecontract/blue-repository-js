import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';

export const CdmProductCollateralEligibleCollateralCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralCriteria'
    ]
  )(
    z.object({
      appliesTo: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      collateralCriteria: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      ratingPriorityResolution: z
        .lazy(() => CdmProductCollateralRatingPriorityResolutionEnumSchema)
        .optional(),
      restrictTo: z
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      treatment: z.lazy(() => CdmProductCollateralCollateralTreatmentSchema),
    })
  );

export type CdmProductCollateralEligibleCollateralCriteria = z.infer<
  typeof CdmProductCollateralEligibleCollateralCriteriaSchema
>;
