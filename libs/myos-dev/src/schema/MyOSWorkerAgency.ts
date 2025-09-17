import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSWorkerAgencySchema = withTypeBlueId(
  blueIds['MyOS Worker Agency']
)(
  z.object({
    name: z.string().optional(),
  })
);

export type MyOSWorkerAgency = z.infer<typeof MyOSWorkerAgencySchema>;
