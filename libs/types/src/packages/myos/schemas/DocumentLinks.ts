import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

const zod = z as any;

export const DocumentLinksSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Links']
)(zod.object({}).catchall(zod.lazy(() => LinkSchema)));

export type DocumentLinks = z.infer<typeof DocumentLinksSchema>;
