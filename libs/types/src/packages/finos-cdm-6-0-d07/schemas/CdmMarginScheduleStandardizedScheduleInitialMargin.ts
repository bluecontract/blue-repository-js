import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmMarginScheduleStandardizedScheduleInitialMarginSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleInitialMargin'
    ]
  )(
    zod.object({
      name: zod.string().optional(),
      netInitialMargin: zod.lazy(() => CdmObservableAssetMoneySchema),
      tradeInfo: zod
        .array(
          zod.lazy(() => CdmMarginScheduleStandardizedScheduleTradeInfoSchema)
        )
        .min(0)
        .optional(),
    })
  );

export type CdmMarginScheduleStandardizedScheduleInitialMargin = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleInitialMarginSchema
>;
