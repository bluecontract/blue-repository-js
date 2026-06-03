import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentAnchorSchema } from './DocumentAnchor';

const zod = z as any;

export const DocumentAnchorsSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Anchors']
)(zod.object({}).catchall(zod.lazy(() => DocumentAnchorSchema)));

export type DocumentAnchors = z.infer<typeof DocumentAnchorsSchema>;
