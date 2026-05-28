import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaPriceScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaPriceSchedule']
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableAssetPriceScheduleSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaPriceSchedule = z.infer<
  typeof CdmObservableAssetFieldWithMetaPriceScheduleSchema
>;
