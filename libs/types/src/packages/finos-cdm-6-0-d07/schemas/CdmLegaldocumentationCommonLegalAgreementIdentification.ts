import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';

const zod = z as any;

export const CdmLegaldocumentationCommonLegalAgreementIdentificationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementIdentification'
    ]
  )(
    zod.object({
      agreementName: zod.lazy(
        () => CdmLegaldocumentationCommonAgreementNameSchema
      ),
      description: zod.string().optional(),
      governingLaw: zod
        .lazy(() => CdmLegaldocumentationCommonGoverningLawEnumSchema)
        .optional(),
      name: zod.string().optional(),
      publisher: zod
        .lazy(
          () => CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema
        )
        .optional(),
      vintage: zod.number().optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreementIdentification = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
>;
