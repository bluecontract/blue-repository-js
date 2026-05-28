import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
import { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
import { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';

export const CdmObservableAssetPriceQuantitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceQuantity']
  )(
    z.object({
      description: z.string().optional(),
      effectiveDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      name: z.string().optional(),
      observable: z
        .lazy(() => CdmObservableAssetFieldWithMetaObservableSchema)
        .optional(),
      price: z
        .array(z.lazy(() => CdmObservableAssetFieldWithMetaPriceScheduleSchema))
        .min(0)
        .optional(),
      quantity: z
        .array(
          z.lazy(
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
