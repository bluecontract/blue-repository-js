import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaPriceScheduleSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaPriceSchedule']
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmObservableAssetPriceScheduleSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaPriceSchedule = z.infer<
  typeof CdmObservableAssetFieldWithMetaPriceScheduleSchema
>;
