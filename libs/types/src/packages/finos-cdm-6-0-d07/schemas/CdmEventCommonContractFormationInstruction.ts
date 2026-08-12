import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';

const zod = z as any;

export const CdmEventCommonContractFormationInstructionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ContractFormationInstruction']
  )(
    zod.object({
      description: zod.string().optional(),
      legalAgreement: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
          )
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmEventCommonContractFormationInstruction = z.infer<
  typeof CdmEventCommonContractFormationInstructionSchema
>;
