import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TimestampSchema = withTypeBlueId(blueIds['Common/Timestamp'])(
  z.string() as unknown as z.ZodObject<any>
);

export type Timestamp = z.infer<typeof TimestampSchema>;
