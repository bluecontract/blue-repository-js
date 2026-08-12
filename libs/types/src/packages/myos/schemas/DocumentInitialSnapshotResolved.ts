import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const DocumentInitialSnapshotResolvedSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Initial Snapshot Resolved']
)(
  ResponseSchema.extend({
    document: blueNodeField().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentInitialSnapshotResolved = z.infer<
  typeof DocumentInitialSnapshotResolvedSchema
>;
