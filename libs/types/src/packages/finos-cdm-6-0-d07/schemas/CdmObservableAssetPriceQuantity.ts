import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
import { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
import { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';

const zod = z as any;

export const CdmObservableAssetPriceQuantitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceQuantity']
)(
  zod.object({
    description: zod.string().optional(),
    effectiveDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    name: zod.string().optional(),
    observable: zod
      .lazy(() => CdmObservableAssetFieldWithMetaObservableSchema)
      .optional(),
    price: zod
      .array(zod.lazy(() => CdmObservableAssetFieldWithMetaPriceScheduleSchema))
      .min(0)
      .optional(),
    quantity: zod
      .array(
        zod.lazy(
          () => CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema
        )
      )
      .min(0)
      .optional(),
  })
);

export type CdmObservableAssetPriceQuantity = z.infer<
  typeof CdmObservableAssetPriceQuantitySchema
>;
