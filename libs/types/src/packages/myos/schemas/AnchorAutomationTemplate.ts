import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const AnchorAutomationTemplateSchema: any = withTypeBlueId(
  blueIds['MyOS/Anchor Automation Template']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type AnchorAutomationTemplate = z.infer<
  typeof AnchorAutomationTemplateSchema
>;
