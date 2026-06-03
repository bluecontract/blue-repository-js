import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
import { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
import { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';

const zod = z as any;

export const CdmProductAssetAssetDeliveryProfileSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryProfile']
)(
  zod.object({
    bankHolidaysTreatment: zod
      .lazy(() => CdmProductAssetBankHolidayTreatmentEnumSchema)
      .optional(),
    block: zod
      .array(zod.lazy(() => CdmProductAssetAssetDeliveryProfileBlockSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    loadType: zod.lazy(() => CdmProductAssetLoadTypeEnumSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetAssetDeliveryProfile = z.infer<
  typeof CdmProductAssetAssetDeliveryProfileSchema
>;
