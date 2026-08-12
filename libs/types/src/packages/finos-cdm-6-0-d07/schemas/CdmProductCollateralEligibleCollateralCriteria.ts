import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';

const zod = z as any;

export const CdmProductCollateralEligibleCollateralCriteriaSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralCriteria'
    ]
  )(
    zod.object({
      appliesTo: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      collateralCriteria: zod
        .lazy((): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      ratingPriorityResolution: zod
        .lazy(() => CdmProductCollateralRatingPriorityResolutionEnumSchema)
        .optional(),
      restrictTo: zod
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      treatment: zod.lazy(() => CdmProductCollateralCollateralTreatmentSchema),
    })
  );

export type CdmProductCollateralEligibleCollateralCriteria = z.infer<
  typeof CdmProductCollateralEligibleCollateralCriteriaSchema
>;
