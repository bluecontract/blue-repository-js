import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterAgreementTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema
  >;
