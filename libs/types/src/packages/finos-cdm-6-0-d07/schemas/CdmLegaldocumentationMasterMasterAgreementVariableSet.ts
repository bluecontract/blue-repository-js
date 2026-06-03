import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterAgreementVariableSetSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementVariableSet'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      val: zod.string().optional(),
      variableSet: zod
        .array(
          zod.lazy(
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
