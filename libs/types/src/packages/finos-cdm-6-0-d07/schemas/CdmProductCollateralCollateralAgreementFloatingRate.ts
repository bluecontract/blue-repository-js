import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

const zod = z as any;

export const CdmProductCollateralCollateralAgreementFloatingRateSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralAgreementFloatingRate'
    ]
  )(
    zod.object({
      capRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      compressibleSpread: zod.boolean(),
      description: zod.string().optional(),
      floorRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      name: zod.string().optional(),
      negativeInterest: zod.boolean(),
      rateOption: zod
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema
        )
        .optional(),
      spreadSchedule: zod
        .lazy(() => CdmProductAssetSpreadScheduleSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralAgreementFloatingRate = z.infer<
  typeof CdmProductCollateralCollateralAgreementFloatingRateSchema
>;
