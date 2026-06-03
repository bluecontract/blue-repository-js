import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';

const zod = z as any;

export const CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateSettingDetails'
    ]
  )(
    zod.object({
      calculationDetails: zod
        .lazy(() => CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema)
        .optional(),
      description: zod.string().optional(),
      floatingRate: zod.number(),
      name: zod.string().optional(),
      observationDate: zod.string().optional(),
      resetDate: zod.string().optional(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateSettingDetails = z.infer<
  typeof CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema
>;
