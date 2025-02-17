import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const RecommendedUserActionMessageSchema = withTypeBlueId(
  blueIds.RecommendedUserActionMessage
)(
  z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    action: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type RecommendedUserActionMessage = z.infer<
  typeof RecommendedUserActionMessageSchema
>;
