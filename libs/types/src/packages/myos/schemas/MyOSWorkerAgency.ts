import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSWorkerAgencySchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Worker Agency']
)(
  zod.object({
    name: zod.string().optional(),
  })
);

export type MyOSWorkerAgency = z.infer<typeof MyOSWorkerAgencySchema>;
