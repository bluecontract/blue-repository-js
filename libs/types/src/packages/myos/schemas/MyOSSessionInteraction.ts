import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSSessionInteractionSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Interaction']
)(
  zod.object({
    name: zod.string().optional(),
  })
);

export type MyOSSessionInteraction = z.infer<
  typeof MyOSSessionInteractionSchema
>;
