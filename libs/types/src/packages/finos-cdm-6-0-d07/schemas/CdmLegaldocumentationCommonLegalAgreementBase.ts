import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';

const zod = z as any;

export const CdmLegaldocumentationCommonLegalAgreementBaseSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementBase'
    ]
  )(
    zod.object({
      agreementDate: zod.string().optional(),
      attachment: zod
        .array(zod.lazy(() => CdmLegaldocumentationCommonResourceSchema))
        .min(0)
        .optional(),
      contractualParty: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(2)
        .max(2)
        .optional(),
      description: zod.string().optional(),
      effectiveDate: zod.string().optional(),
      identifier: zod
        .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      legalAgreementIdentification: zod.lazy(
        () => CdmLegaldocumentationCommonLegalAgreementIdentificationSchema
      ),
      name: zod.string().optional(),
      otherParty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonLegalAgreementBase = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementBaseSchema
>;
