import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonOtherAgreementTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/OtherAgreementTerms'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      isSpecified: zod.boolean(),
      legalDocument: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonOtherAgreementTerms = z.infer<
  typeof CdmLegaldocumentationCommonOtherAgreementTermsSchema
>;
