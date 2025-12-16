import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSWorkerAgencySchema = withTypeBlueId(blueIds['MyOS/MyOS Worker Agency'])(
  z.object({})
);

export type MyOSWorkerAgency = z.infer<typeof MyOSWorkerAgencySchema>;
