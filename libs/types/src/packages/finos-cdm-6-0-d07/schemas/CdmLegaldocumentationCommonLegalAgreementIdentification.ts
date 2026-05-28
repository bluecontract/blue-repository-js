import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';

export const CdmLegaldocumentationCommonLegalAgreementIdentificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementIdentification'
    ]
  )(
    z.object({
      agreementName: z.lazy(
        () => CdmLegaldocumentationCommonAgreementNameSchema
      ),
      description: z.string().optional(),
      governingLaw: z
        .lazy(() => CdmLegaldocumentationCommonGoverningLawEnumSchema)
        .optional(),
      name: z.string().optional(),
      publisher: z
        .lazy(
          () => CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema
        )
        .optional(),
      vintage: z.number().optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreementIdentification = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
>;
