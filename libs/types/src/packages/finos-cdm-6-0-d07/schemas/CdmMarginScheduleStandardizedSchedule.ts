import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';

const zod = z as any;

export const CdmMarginScheduleStandardizedScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedSchedule']
)(
  zod.object({
    assetClass: zod.lazy(
      () => CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema
    ),
    durationInYears: zod.number().optional(),
    name: zod.string().optional(),
    notional: zod.number(),
    notionalCurrency: zod.string(),
    productClass: zod.lazy(
      () => CdmMarginScheduleStandardizedScheduleProductClassEnumSchema
    ),
  })
);

export type CdmMarginScheduleStandardizedSchedule = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleSchema
>;
