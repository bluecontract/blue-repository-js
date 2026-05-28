import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

export const CdmProductCollateralCollateralAgreementFloatingRateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralAgreementFloatingRate'
    ]
  )(
    z.object({
      capRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      compressibleSpread: z.boolean(),
      description: z.string().optional(),
      floorRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      name: z.string().optional(),
      negativeInterest: z.boolean(),
      rateOption: z
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema
        )
        .optional(),
      spreadSchedule: z
        .lazy(() => CdmProductAssetSpreadScheduleSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralAgreementFloatingRate = z.infer<
  typeof CdmProductCollateralCollateralAgreementFloatingRateSchema
>;
