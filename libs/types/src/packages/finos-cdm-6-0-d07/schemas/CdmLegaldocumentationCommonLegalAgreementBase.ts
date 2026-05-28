import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';

export const CdmLegaldocumentationCommonLegalAgreementBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementBase'
    ]
  )(
    z.object({
      agreementDate: z.string().optional(),
      attachment: z
        .array(z.lazy(() => CdmLegaldocumentationCommonResourceSchema))
        .min(0)
        .optional(),
      contractualParty: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(2)
        .max(2)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      legalAgreementIdentification: z.lazy(
        () => CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
      ),
      name: z.string().optional(),
      otherParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreementBase = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementBaseSchema
>;
