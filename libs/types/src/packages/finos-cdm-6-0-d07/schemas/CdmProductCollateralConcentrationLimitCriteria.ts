import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralAverageTradingVolumeSchema } from './CdmProductCollateralAverageTradingVolume';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralConcentrationLimitTypeEnumSchema } from './CdmProductCollateralConcentrationLimitTypeEnum';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';

export const CdmProductCollateralConcentrationLimitCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/ConcentrationLimitCriteria'
    ]
  )(
    z.object({
      appliesTo: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      averageTradingVolume: z
        .lazy(() => CdmProductCollateralAverageTradingVolumeSchema)
        .optional(),
      collateralCriteria: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralCollateralCriteriaSchema)
        .optional(),
      concentrationLimitType: z
        .lazy(() => CdmProductCollateralConcentrationLimitTypeEnumSchema)
        .optional(),
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

export type CdmProductCollateralConcentrationLimitCriteria = z.infer<
  typeof CdmProductCollateralConcentrationLimitCriteriaSchema
>;
