import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/FieldWithMetaCreditSupportAgreementTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmProductCollateralCreditSupportAgreementTypeEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum =
  z.infer<
    typeof CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema
  >;
