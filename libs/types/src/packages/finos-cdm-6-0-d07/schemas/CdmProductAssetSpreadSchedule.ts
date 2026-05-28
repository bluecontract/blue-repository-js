import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';

export const CdmProductAssetSpreadScheduleSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SpreadSchedule']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    price: z
      .lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
      )
      .optional(),
    spreadScheduleType: z
      .lazy(() => CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema)
      .optional(),
  })
);

export type CdmProductAssetSpreadSchedule = z.infer<
  typeof CdmProductAssetSpreadScheduleSchema
>;
