import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const SearchContractSchema: any = withTypeBlueId(
  blueIds['MyOS/Search Contract']
)(
  zod.object({
    description: zod.string().optional(),
    geo: zod
      .object({
        description: zod.string().optional(),
        lat: zod.string().optional(),
        lon: zod.string().optional(),
      })
      .optional(),
    kv: zod.record(zod.string(), zod.string()).optional(),
    name: zod.string().optional(),
    q: zod.array(zod.string()).optional(),
  })
);

export type SearchContract = z.infer<typeof SearchContractSchema>;
