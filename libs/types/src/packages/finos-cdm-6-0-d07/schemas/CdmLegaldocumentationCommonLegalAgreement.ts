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

const zod = z as any;

export const CdmLegaldocumentationCommonLegalAgreementSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreement']
  )(
    zod.object({
      agreementDate: zod.string().optional(),
      agreementTerms: zod
        .lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonAgreementTermsSchema
        )
        .optional(),
      attachment: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny => CdmLegaldocumentationCommonResourceSchema
          )
        )
        .min(0)
        .optional(),
      contractualParty: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny =>
              CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(2)
        .max(2)
        .optional(),
      description: zod.string().optional(),
      effectiveDate: zod.string().optional(),
      identifier: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny => CdmBaseStaticdataIdentifierIdentifierSchema
          )
        )
        .min(0)
        .optional(),
      legalAgreementIdentification: zod
        .lazy(
          (): z.ZodTypeAny =>
            CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
        )
        .optional(),
      name: zod.string().optional(),
      otherParty: zod
        .array(
          zod.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartyRoleSchema)
        )
        .min(0)
        .optional(),
      relatedAgreements: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
          )
        )
        .min(0)
        .optional(),
      umbrellaAgreement: zod
        .lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonUmbrellaAgreementSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreement = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementSchema
>;
