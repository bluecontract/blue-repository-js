import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonValuationTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ValuationTypeEnum']
)(
  zod.enum(['MarkToMarket', 'MarkToModel'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonValuationTypeEnum = z.infer<
  typeof CdmEventCommonValuationTypeEnumSchema
>;
