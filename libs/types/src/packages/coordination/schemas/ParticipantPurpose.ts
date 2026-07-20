import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { PurposeStatementSchema } from './PurposeStatement';

const zod = z as any;

export const ParticipantPurposeSchema: any = withTypeBlueId(
  blueIds['Coordination/Participant Purpose']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    participant: zod.lazy(() => ActorSchema),
    statements: zod.array(zod.lazy(() => PurposeStatementSchema)),
  })
);

export type ParticipantPurpose = z.infer<typeof ParticipantPurposeSchema>;
