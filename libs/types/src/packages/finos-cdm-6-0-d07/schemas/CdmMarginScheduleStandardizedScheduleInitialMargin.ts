import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmMarginScheduleStandardizedScheduleInitialMarginSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleInitialMargin'
    ]
  )(
    z.object({
      name: z.string().optional(),
      netInitialMargin: z.lazy(() => CdmObservableAssetMoneySchema),
      tradeInfo: z
        .array(
          z.lazy(() => CdmMarginScheduleStandardizedScheduleTradeInfoSchema)
        )
        .min(0)
        .optional(),
    })
  );

export type CdmMarginScheduleStandardizedScheduleInitialMargin = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleInitialMarginSchema
>;
