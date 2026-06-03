import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonMatrixTermEnumSchema } from './CdmLegaldocumentationCommonMatrixTermEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaMatrixTermEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationCommonMatrixTermEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum = z.infer<
  typeof CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema
>;
