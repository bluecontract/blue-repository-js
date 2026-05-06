import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const DocumentInitialSnapshotRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    sourceSessionId: z.string().optional(),
  })
);

export type DocumentInitialSnapshotRequested = z.infer<
  typeof DocumentInitialSnapshotRequestedSchema
>;
