import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
import { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';

export const CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementClauseVariant'
    ]
  )(
    z.object({
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      description: z.string().optional(),
      identifier: z.lazy(
        () =>
          CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema
      ),
      name: z.string().optional(),
      otherParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema))
        .min(0)
        .optional(),
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

export type CdmLegaldocumentationMasterMasterAgreementClauseVariant = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema
>;
