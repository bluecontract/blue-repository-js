import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSDocumentSessionReferenceSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Document Session Reference']
)(
  zod.object({
    description: zod.string().optional(),
    documentId: zod.string().optional(),
    name: zod.string().optional(),
    sessionId: zod.string().optional(),
  })
);

export type MyOSDocumentSessionReference = z.infer<
  typeof MyOSDocumentSessionReferenceSchema
>;
