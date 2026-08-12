import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentLinkSchema } from './DocumentLink';

const zod = z as any;

export const DocumentLinksSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Links']
)(zod.object({}).catchall(zod.lazy(() => DocumentLinkSchema)));

export type DocumentLinks = z.infer<typeof DocumentLinksSchema>;
