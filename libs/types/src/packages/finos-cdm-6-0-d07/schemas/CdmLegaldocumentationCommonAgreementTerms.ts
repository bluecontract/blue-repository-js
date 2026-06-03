import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';

const zod = z as any;

export const CdmLegaldocumentationCommonAgreementTermsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AgreementTerms']
  )(
    zod.object({
      agreement: zod.lazy(() => CdmLegaldocumentationContractAgreementSchema),
      clauseLibrary: zod.boolean().optional(),
      counterparty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(2)
        .max(2)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonAgreementTerms = z.infer<
  typeof CdmLegaldocumentationCommonAgreementTermsSchema
>;
