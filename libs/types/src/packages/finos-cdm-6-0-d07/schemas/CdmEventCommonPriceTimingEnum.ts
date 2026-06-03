import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonPriceTimingEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PriceTimingEnum']
)(
  zod.enum(['ClosingPrice', 'OpeningPrice'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonPriceTimingEnum = z.infer<
  typeof CdmEventCommonPriceTimingEnumSchema
>;
