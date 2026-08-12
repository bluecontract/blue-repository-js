import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/FieldWithMetaCreditSupportAgreementTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmProductCollateralCreditSupportAgreementTypeEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum =
  z.infer<
    typeof CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema
  >;
