import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';

export const CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateSettingDetails'
    ]
  )(
    z.object({
      calculationDetails: z
        .lazy(() => CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema)
        .optional(),
      description: z.string().optional(),
      floatingRate: z.number(),
      name: z.string().optional(),
      observationDate: z.string().optional(),
      resetDate: z.string().optional(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateSettingDetails = z.infer<
  typeof CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema
>;
