import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ContractsChangePolicySchema: any = withTypeBlueId(
  blueIds['Workflows/Contracts Change Policy']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    requireSectionChanges: zod.boolean().optional(),
  })
);

export type ContractsChangePolicy = z.infer<typeof ContractsChangePolicySchema>;
