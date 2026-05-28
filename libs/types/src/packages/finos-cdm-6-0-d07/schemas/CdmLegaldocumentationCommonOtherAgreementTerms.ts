import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonOtherAgreementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/OtherAgreementTerms'
    ]
  )(
    z.object({
      description: z.string().optional(),
      isSpecified: z.boolean(),
      legalDocument: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonOtherAgreementTerms = z.infer<
  typeof CdmLegaldocumentationCommonOtherAgreementTermsSchema
>;
