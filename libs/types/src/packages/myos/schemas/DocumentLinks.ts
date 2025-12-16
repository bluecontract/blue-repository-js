import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const DocumentLinksSchema = withTypeBlueId(blueIds['MyOS/Document Links'])(
  z.object({}).catchall(LinkSchema)
);

export type DocumentLinks = z.infer<typeof DocumentLinksSchema>;
