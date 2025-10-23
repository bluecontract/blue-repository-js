import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const OperationSchema = withTypeBlueId(blueIds['Operation'])(
  z.object({
    channel: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type Operation = z.infer<typeof OperationSchema>;
