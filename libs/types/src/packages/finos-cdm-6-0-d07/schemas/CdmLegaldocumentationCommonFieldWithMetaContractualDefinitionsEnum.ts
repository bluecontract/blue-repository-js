import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaContractualDefinitionsEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationCommonContractualDefinitionsEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum =
  z.infer<
    typeof CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema
  >;
