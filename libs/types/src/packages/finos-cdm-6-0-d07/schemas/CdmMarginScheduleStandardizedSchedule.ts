import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';

export const CdmMarginScheduleStandardizedScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedSchedule']
  )(
    z.object({
      assetClass: z.lazy(
        () => CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema
      ),
      durationInYears: z.number().optional(),
      name: z.string().optional(),
      notional: z.number(),
      notionalCurrency: z.string(),
      productClass: z.lazy(
        () => CdmMarginScheduleStandardizedScheduleProductClassEnumSchema
      ),
    })
  );

export type CdmMarginScheduleStandardizedSchedule = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleSchema
>;
