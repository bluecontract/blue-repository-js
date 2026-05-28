import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationMasterMasterAgreementVariableSetSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementVariableSet'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      val: z.string().optional(),
      variableSet: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmLegaldocumentationMasterMasterAgreementVariableSetSchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterMasterAgreementVariableSet = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementVariableSetSchema
>;
