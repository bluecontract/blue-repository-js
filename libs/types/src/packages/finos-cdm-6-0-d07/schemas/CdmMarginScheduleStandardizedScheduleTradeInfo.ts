import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmMarginScheduleStandardizedScheduleTradeInfoSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleTradeInfo'
    ]
  )(
    zod.object({
      assetClass: zod
        .lazy(() => CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema)
        .optional(),
      grossInitialMargin: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      markToMarketValue: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      name: zod.string().optional(),
      productClass: zod
        .lazy(() => CdmMarginScheduleStandardizedScheduleProductClassEnumSchema)
        .optional(),
    })
  );

export type CdmMarginScheduleStandardizedScheduleTradeInfo = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleTradeInfoSchema
>;
