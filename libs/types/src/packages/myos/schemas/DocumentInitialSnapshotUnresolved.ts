import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const DocumentInitialSnapshotUnresolvedSchema = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Unresolved']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type DocumentInitialSnapshotUnresolved = z.infer<
  typeof DocumentInitialSnapshotUnresolvedSchema
>;
