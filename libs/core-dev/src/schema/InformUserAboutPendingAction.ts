import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const InformUserAboutPendingActionSchema = withTypeBlueId(
  blueIds['Inform User About Pending Action']
)(
  z.object({
    channel: z.unknown().optional(),
    description: z.string().optional(),
    expectedRequest: blueNodeField().optional(),
    message: z.unknown().optional(),
    name: z.string().optional(),
    operation: z.unknown().optional(),
    title: z.unknown().optional(),
  })
);

export type InformUserAboutPendingAction = z.infer<
  typeof InformUserAboutPendingActionSchema
>;
