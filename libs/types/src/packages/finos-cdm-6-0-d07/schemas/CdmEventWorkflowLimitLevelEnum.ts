import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowLimitLevelEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/LimitLevelEnum']
)(
  zod.enum(['Account', 'Customer', 'House'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventWorkflowLimitLevelEnum = z.infer<
  typeof CdmEventWorkflowLimitLevelEnumSchema
>;
