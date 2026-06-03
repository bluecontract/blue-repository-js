import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleStubPeriodTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/StubPeriodTypeEnum']
  )(
    zod.enum(['LongFinal', 'LongInitial', 'ShortFinal', 'ShortInitial'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonScheduleStubPeriodTypeEnum = z.infer<
  typeof CdmProductCommonScheduleStubPeriodTypeEnumSchema
>;
