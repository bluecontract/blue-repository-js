import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmMarginScheduleStandardizedScheduleTradeInfoSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleTradeInfo'
    ]
  )(
    z.object({
      assetClass: z
        .lazy(() => CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema)
        .optional(),
      grossInitialMargin: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      markToMarketValue: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      name: z.string().optional(),
      productClass: z
        .lazy(() => CdmMarginScheduleStandardizedScheduleProductClassEnumSchema)
        .optional(),
    })
  );

export type CdmMarginScheduleStandardizedScheduleTradeInfo = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleTradeInfoSchema
>;
