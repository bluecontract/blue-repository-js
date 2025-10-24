import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSDocumentSessionReferenceSchema = withTypeBlueId(
  blueIds['MyOS Document Session Reference']
)(
  z.object({
    description: z.string().optional(),
    documentId: z.unknown().optional(),
    name: z.string().optional(),
    sessionId: z.unknown().optional(),
  })
);

export type MyOSDocumentSessionReference = z.infer<
  typeof MyOSDocumentSessionReferenceSchema
>;
