import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const DocumentInitialSnapshotResolvedSchema = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Resolved']
)(
  ResponseSchema.extend({
    document: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type DocumentInitialSnapshotResolved = z.infer<
  typeof DocumentInitialSnapshotResolvedSchema
>;
