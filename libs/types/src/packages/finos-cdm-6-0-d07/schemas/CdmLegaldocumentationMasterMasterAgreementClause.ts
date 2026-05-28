import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';

export const CdmLegaldocumentationMasterMasterAgreementClauseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementClause'
    ]
  )(
    z.object({
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      description: z.string().optional(),
      identifer: z.lazy(
        () =>
          CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema
      ),
      name: z.string().optional(),
      otherParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema))
        .min(0)
        .optional(),
      variant: z
        .array(
          z.lazy(
            () => CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema
          )
        )
        .min(1)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterMasterAgreementClause = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementClauseSchema
>;
