import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ContractInstanceSchema = withTypeBlueId(blueIds.ContractInstance)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    workflowInstances: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    startedLocalContractCount: z.number().optional(),
    localContractInstances: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    contract: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    id: z.number().optional(),
    startedWorkflowCount: z.number().optional(),
  })
);

export type ContractInstance = z.infer<typeof ContractInstanceSchema>;
