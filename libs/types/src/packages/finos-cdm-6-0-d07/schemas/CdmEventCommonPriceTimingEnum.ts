import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonPriceTimingEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PriceTimingEnum']
)(
  z.enum(['ClosingPrice', 'OpeningPrice'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonPriceTimingEnum = z.infer<
  typeof CdmEventCommonPriceTimingEnumSchema
>;
