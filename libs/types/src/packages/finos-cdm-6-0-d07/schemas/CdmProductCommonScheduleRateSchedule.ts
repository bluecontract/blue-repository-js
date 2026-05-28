import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

export const CdmProductCommonScheduleRateScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/RateSchedule']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      price: z.lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
      ),
    })
  );

export type CdmProductCommonScheduleRateSchedule = z.infer<
  typeof CdmProductCommonScheduleRateScheduleSchema
>;
