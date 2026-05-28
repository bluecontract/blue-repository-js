import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleStubPeriodTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/StubPeriodTypeEnum']
  )(
    z.enum(['LongFinal', 'LongInitial', 'ShortFinal', 'ShortInitial'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonScheduleStubPeriodTypeEnum = z.infer<
  typeof CdmProductCommonScheduleStubPeriodTypeEnumSchema
>;
