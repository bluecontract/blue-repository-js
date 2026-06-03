import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const TimestampSchema: any = withTypeBlueId(blueIds['Common/Timestamp'])(
  zod.string() as unknown as z.ZodObject<any>
);

export type Timestamp = z.infer<typeof TimestampSchema>;
