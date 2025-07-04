import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const OperationSchema = withTypeBlueId(blueIds['Operation'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    channel: z.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type Operation = z.infer<typeof OperationSchema>;
