import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const InformUserAboutPendingActionSchema = withTypeBlueId(
  blueIds['Inform User About Pending Action']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    channel: z.string().optional(),
    expectedRequest: blueNodeField().optional(),
    title: z.string().optional(),
    message: z.string().optional(),
    operation: z.string().optional(),
  })
);

export type InformUserAboutPendingAction = z.infer<
  typeof InformUserAboutPendingActionSchema
>;
