import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleAssetClassEnum'
    ]
  )(
    zod.enum([
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
