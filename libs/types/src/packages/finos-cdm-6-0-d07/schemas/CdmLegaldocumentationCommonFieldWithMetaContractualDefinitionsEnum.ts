import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaContractualDefinitionsEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmLegaldocumentationCommonContractualDefinitionsEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum =
  z.infer<
    typeof CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema
  >;
