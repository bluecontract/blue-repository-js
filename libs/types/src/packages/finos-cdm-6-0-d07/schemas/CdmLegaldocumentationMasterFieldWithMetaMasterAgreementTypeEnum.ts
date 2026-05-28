import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterAgreementTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema
  >;
