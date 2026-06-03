import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';

const zod = z as any;

export const CdmProductAssetSpreadScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SpreadSchedule']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    price: zod
      .lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
      )
      .optional(),
    spreadScheduleType: zod
      .lazy(() => CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema)
      .optional(),
  })
);

export type CdmProductAssetSpreadSchedule = z.infer<
  typeof CdmProductAssetSpreadScheduleSchema
>;
