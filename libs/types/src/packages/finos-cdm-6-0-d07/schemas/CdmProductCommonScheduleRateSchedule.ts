import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

const zod = z as any;

export const CdmProductCommonScheduleRateScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/RateSchedule']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    price: zod.lazy(
      () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
    ),
  })
);

export type CdmProductCommonScheduleRateSchedule = z.infer<
  typeof CdmProductCommonScheduleRateScheduleSchema
>;
