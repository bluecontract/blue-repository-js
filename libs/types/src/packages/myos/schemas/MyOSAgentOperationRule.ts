import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSAgentOperationRuleSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Operation Rule']
)(
  zod.object({
    description: zod.string().optional(),
    id: zod.string(),
    name: zod.string().optional(),
    text: zod.string(),
  })
);

export type MyOSAgentOperationRule = z.infer<
  typeof MyOSAgentOperationRuleSchema
>;
