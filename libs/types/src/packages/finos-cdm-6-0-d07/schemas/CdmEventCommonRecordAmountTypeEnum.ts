import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonRecordAmountTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RecordAmountTypeEnum']
)(
  zod.enum(['AccountTotal', 'GrandTotal', 'ParentTotal'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonRecordAmountTypeEnum = z.infer<
  typeof CdmEventCommonRecordAmountTypeEnumSchema
>;
