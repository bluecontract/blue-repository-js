import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const SearchContractSchema = withTypeBlueId(
  blueIds['MyOS/Search Contract']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    geo: z
      .object({
        description: z.string().optional(),
        lat: z.string().optional(),
        lon: z.string().optional(),
      })
      .optional(),
    kv: z.record(z.string(), z.string()).optional(),
    name: z.string().optional(),
    q: z.array(z.string()).optional(),
  })
);

export type SearchContract = z.infer<typeof SearchContractSchema>;
