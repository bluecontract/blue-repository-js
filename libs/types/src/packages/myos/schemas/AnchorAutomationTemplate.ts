import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AnchorAutomationTemplateSchema = withTypeBlueId(
  blueIds['MyOS/Anchor Automation Template']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type AnchorAutomationTemplate = z.infer<
  typeof AnchorAutomationTemplateSchema
>;
