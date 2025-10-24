import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSDocumentSessionReferenceSchema = withTypeBlueId(
  blueIds['MyOS Document Session Reference']
)(
  z.object({
    description: z.string().optional(),
    documentId: z.string().optional(),
    name: z.string().optional(),
    sessionId: z.string().optional(),
  })
);

export type MyOSDocumentSessionReference = z.infer<
  typeof MyOSDocumentSessionReferenceSchema
>;
