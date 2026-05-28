import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonResourceTypeEnumSchema } from './CdmLegaldocumentationCommonResourceTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaResourceTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmLegaldocumentationCommonResourceTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum = z.infer<
  typeof CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema
>;
