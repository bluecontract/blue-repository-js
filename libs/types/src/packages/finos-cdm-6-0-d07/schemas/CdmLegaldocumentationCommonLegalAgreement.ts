import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmLegaldocumentationCommonAgreementTermsSchema } from './CdmLegaldocumentationCommonAgreementTerms';
import { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
import { CdmLegaldocumentationCommonUmbrellaAgreementSchema } from './CdmLegaldocumentationCommonUmbrellaAgreement';

export const CdmLegaldocumentationCommonLegalAgreementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreement']
  )(
    z.object({
      agreementDate: z.string().optional(),
      agreementTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonAgreementTermsSchema
        )
        .optional(),
      attachment: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmLegaldocumentationCommonResourceSchema)
        )
        .min(0)
        .optional(),
      contractualParty: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(2)
        .max(2)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      identifier: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmBaseStaticdataIdentifierIdentifierSchema
          )
        )
        .min(0)
        .optional(),
      legalAgreementIdentification: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
        )
        .optional(),
      name: z.string().optional(),
      otherParty: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartyRoleSchema)
        )
        .min(0)
        .optional(),
      relatedAgreements: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
          )
        )
        .min(0)
        .optional(),
      umbrellaAgreement: z
        .lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonUmbrellaAgreementSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreement = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementSchema
>;
