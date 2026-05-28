import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';

export const CdmLegaldocumentationCommonAgreementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AgreementTerms']
  )(
    z.object({
      agreement: z.lazy(() => CdmLegaldocumentationContractAgreementSchema),
      clauseLibrary: z.boolean().optional(),
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(2)
        .max(2)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonAgreementTerms = z.infer<
  typeof CdmLegaldocumentationCommonAgreementTermsSchema
>;
