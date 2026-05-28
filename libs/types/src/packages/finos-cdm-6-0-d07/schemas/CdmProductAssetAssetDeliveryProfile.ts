import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
import { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
import { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';

export const CdmProductAssetAssetDeliveryProfileSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryProfile']
  )(
    z.object({
      bankHolidaysTreatment: z
        .lazy(() => CdmProductAssetBankHolidayTreatmentEnumSchema)
        .optional(),
      block: z
        .array(z.lazy(() => CdmProductAssetAssetDeliveryProfileBlockSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      loadType: z.lazy(() => CdmProductAssetLoadTypeEnumSchema).optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetAssetDeliveryProfile = z.infer<
  typeof CdmProductAssetAssetDeliveryProfileSchema
>;
