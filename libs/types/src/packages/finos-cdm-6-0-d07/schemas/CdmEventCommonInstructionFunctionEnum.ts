import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonInstructionFunctionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/InstructionFunctionEnum']
  )(
    z.enum([
      'Compression',
      'ContractFormation',
      'Execution',
      'QuantityChange',
      'Renegotiation',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonInstructionFunctionEnum = z.infer<
  typeof CdmEventCommonInstructionFunctionEnumSchema
>;
