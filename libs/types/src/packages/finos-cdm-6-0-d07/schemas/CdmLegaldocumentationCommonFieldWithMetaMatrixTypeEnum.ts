import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonMatrixTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaMatrixTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationCommonMatrixTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum = z.infer<
  typeof CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema
>;
