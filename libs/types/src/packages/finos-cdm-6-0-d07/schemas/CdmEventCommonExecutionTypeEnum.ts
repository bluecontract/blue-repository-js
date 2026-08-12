import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonExecutionTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExecutionTypeEnum']
)(
  zod.enum(['Electronic', 'OffFacility', 'OnVenue'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonExecutionTypeEnum = z.infer<
  typeof CdmEventCommonExecutionTypeEnumSchema
>;
