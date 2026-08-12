import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaContractualSupplementTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
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
