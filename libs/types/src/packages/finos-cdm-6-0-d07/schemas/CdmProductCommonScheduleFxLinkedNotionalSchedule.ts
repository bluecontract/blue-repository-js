import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductCommonScheduleFxLinkedNotionalScheduleSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FxLinkedNotionalSchedule'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      fixingTime: zod
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      fxSpotRateSource: zod.lazy(
        () => CdmObservableAssetFxSpotRateSourceSchema
      ),
      name: zod.string().optional(),
      varyingNotionalCurrency: zod.lazy(
        () => ComRosettaModelFieldWithMetaStringSchema
      ),
      varyingNotionalFixingDates: zod.lazy(
        () => CdmBaseDatetimeRelativeDateOffsetSchema
      ),
      varyingNotionalInterimExchangePaymentDates: zod.lazy(
        () => CdmBaseDatetimeRelativeDateOffsetSchema
      ),
    })
  );

export type CdmProductCommonScheduleFxLinkedNotionalSchedule = z.infer<
  typeof CdmProductCommonScheduleFxLinkedNotionalScheduleSchema
>;
