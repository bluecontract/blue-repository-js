import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleAssetClassEnum'
    ]
  )(
    z.enum([
      'Commodity',
      'Credit',
      'Equity',
      'ForeignExchange',
      'InterestRates',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmMarginScheduleStandardizedScheduleAssetClassEnum = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema
>;
