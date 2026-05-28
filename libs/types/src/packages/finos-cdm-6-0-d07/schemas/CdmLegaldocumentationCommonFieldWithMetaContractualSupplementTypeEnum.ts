import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaContractualSupplementTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(
          () => CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema
  >;
