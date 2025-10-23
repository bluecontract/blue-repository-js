import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentAnchorsSchema = withTypeBlueId(
  blueIds['Document Anchors']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type DocumentAnchors = z.infer<typeof DocumentAnchorsSchema>;
