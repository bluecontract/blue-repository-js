import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/FieldWithMetaGoverningLawEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationCommonGoverningLawEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum = z.infer<
  typeof CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema
>;
