import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCommonScheduleFxLinkedNotionalScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FxLinkedNotionalSchedule'
    ]
  )(
    z.object({
      description: z.string().optional(),
      fixingTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      fxSpotRateSource: z.lazy(() => CdmObservableAssetFxSpotRateSourceSchema),
      name: z.string().optional(),
      varyingNotionalCurrency: z.lazy(
        () => ComRosettaModelFieldWithMetaStringSchema
      ),
      varyingNotionalFixingDates: z.lazy(
        () => CdmBaseDatetimeRelativeDateOffsetSchema
      ),
      varyingNotionalInterimExchangePaymentDates: z.lazy(
        () => CdmBaseDatetimeRelativeDateOffsetSchema
      ),
    })
  );

export type CdmProductCommonScheduleFxLinkedNotionalSchedule = z.infer<
  typeof CdmProductCommonScheduleFxLinkedNotionalScheduleSchema
>;
