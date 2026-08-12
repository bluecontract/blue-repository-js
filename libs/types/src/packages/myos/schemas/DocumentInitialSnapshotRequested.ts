import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const DocumentInitialSnapshotRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Requested']
)(
  RequestSchema.extend({
    name: zod.string().optional(),
    sourceSessionId: zod.string().optional(),
  })
);

export type DocumentInitialSnapshotRequested = z.infer<
  typeof DocumentInitialSnapshotRequestedSchema
>;
