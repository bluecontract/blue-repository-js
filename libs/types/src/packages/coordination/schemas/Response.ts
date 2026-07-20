import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MessageSchema } from './Message';
import { RequestSchema } from './Request';

const zod = z as any;

export const ResponseSchema: any = withTypeBlueId(
  blueIds['Coordination/Response']
)(
  MessageSchema.extend({
    description: zod.string().optional(),
    inResponseTo: zod.lazy(() => RequestSchema),
    name: zod.string().optional(),
  })
);

export type Response = z.infer<typeof ResponseSchema>;
