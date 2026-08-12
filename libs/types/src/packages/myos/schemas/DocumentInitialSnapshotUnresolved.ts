import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const DocumentInitialSnapshotUnresolvedSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Unresolved']
)(
  ResponseSchema.extend({
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type DocumentInitialSnapshotUnresolved = z.infer<
  typeof DocumentInitialSnapshotUnresolvedSchema
>;
