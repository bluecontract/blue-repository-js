import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterAgreementClauseSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementClause'
    ]
  )(
    zod.object({
      counterparty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      description: zod.string().optional(),
      identifer: zod.lazy(
        () =>
          CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema
      ),
      name: zod.string().optional(),
      otherParty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema))
        .min(0)
        .optional(),
      variant: zod
        .array(
          zod.lazy(
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
