import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';

export const CdmEventCommonContractFormationInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ContractFormationInstruction']
  )(
    z.object({
      description: z.string().optional(),
      legalAgreement: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonContractFormationInstruction = z.infer<
  typeof CdmEventCommonContractFormationInstructionSchema
>;
