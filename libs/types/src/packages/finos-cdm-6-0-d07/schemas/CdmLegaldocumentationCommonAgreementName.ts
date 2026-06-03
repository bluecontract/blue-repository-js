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

const zod = z as any;

export const CdmLegaldocumentationCommonAgreementNameSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AgreementName']
  )(
    zod.object({
      agreementType: zod.lazy(
        () => CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema
      ),
      contractualDefinitionsType: zod
        .array(
          zod.lazy(
            () =>
              CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema
          )
        )
        .min(0)
        .optional(),
      contractualMatrix: zod
        .array(
          zod.lazy(() => CdmLegaldocumentationCommonContractualMatrixSchema)
        )
        .min(0)
        .optional(),
      contractualTermsSupplement: zod
        .array(
          zod.lazy(
            () => CdmLegaldocumentationCommonContractualTermsSupplementSchema
          )
        )
        .min(0)
        .optional(),
      creditSupportAgreementMarginType: zod
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      creditSupportAgreementType: zod
        .lazy(
          () =>
            CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema
        )
        .optional(),
      description: zod.string().optional(),
      masterAgreementType: zod
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema
        )
        .optional(),
      masterConfirmationAnnexType: zod
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema
        )
        .optional(),
      masterConfirmationType: zod
        .lazy(
          () =>
            CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema
        )
        .optional(),
      name: zod.string().optional(),
      otherAgreement: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonAgreementName = z.infer<
  typeof CdmLegaldocumentationCommonAgreementNameSchema
>;
