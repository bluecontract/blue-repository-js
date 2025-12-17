import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentAnchorSchema } from './DocumentAnchor';

export const DocumentAnchorsSchema = withTypeBlueId(
  blueIds['MyOS/Document Anchors']
)(z.object({}).catchall(DocumentAnchorSchema));

export type DocumentAnchors = z.infer<typeof DocumentAnchorsSchema>;
