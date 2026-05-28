import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonContractualMatrixSchema } from './CdmLegaldocumentationCommonContractualMatrix';
import { CdmLegaldocumentationCommonContractualTermsSupplementSchema } from './CdmLegaldocumentationCommonContractualTermsSupplement';
import { CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum';
import { CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum';

export const CdmLegaldocumentationCommonAgreementNameSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AgreementName']
  )(
    z.object({
      agreementType: z.lazy(
        () => CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema
      ),
      contractualDefinitionsType: z
        .array(
          z.lazy(
            () =>
              CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema
          )
        )
        .min(0)
        .optional(),
      contractualMatrix: z
        .array(z.lazy(() => CdmLegaldocumentationCommonContractualMatrixSchema))
        .min(0)
        .optional(),
      contractualTermsSupplement: z
        .array(
          z.lazy(
            () => CdmLegaldocumentationCommonContractualTermsSupplementSchema
          )
        )
        .min(0)
        .optional(),
      creditSupportAgreementMarginType: z
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      creditSupportAgreementType: z
        .lazy(
          () =>
            CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      masterAgreementType: z
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema
        )
        .optional(),
      masterConfirmationAnnexType: z
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema
        )
        .optional(),
      masterConfirmationType: z
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema
        )
        .optional(),
      name: z.string().optional(),
      otherAgreement: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonAgreementName = z.infer<
  typeof CdmLegaldocumentationCommonAgreementNameSchema
>;
