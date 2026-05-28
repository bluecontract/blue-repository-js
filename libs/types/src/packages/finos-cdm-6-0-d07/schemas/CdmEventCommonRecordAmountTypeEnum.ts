import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonRecordAmountTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RecordAmountTypeEnum']
  )(
    z.enum(['AccountTotal', 'GrandTotal', 'ParentTotal'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonRecordAmountTypeEnum = z.infer<
  typeof CdmEventCommonRecordAmountTypeEnumSchema
>;
