import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
import { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementClauseVariant'
    ]
  )(
    zod.object({
      counterparty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(0)
        .max(2)
        .optional(),
      description: zod.string().optional(),
      identifier: zod.lazy(
        () =>
          CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema
      ),
      name: zod.string().optional(),
      otherParty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema))
        .min(0)
        .optional(),
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

export type CdmLegaldocumentationMasterMasterAgreementClauseVariant = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema
>;
