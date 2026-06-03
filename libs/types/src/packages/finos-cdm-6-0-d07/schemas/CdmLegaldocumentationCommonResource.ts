import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
import { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmLegaldocumentationCommonResourceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/Resource']
)(
  zod.object({
    comments: zod.string().optional(),
    description: zod.string().optional(),
    language: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    length: zod
      .lazy(() => CdmLegaldocumentationCommonResourceLengthSchema)
      .optional(),
    mimeType: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    name: zod.string().optional(),
    resourceId: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    resourceType: zod
      .lazy(
        () => CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema
      )
      .optional(),
    sizeInBytes: zod.number().optional(),
    string: zod.string().optional(),
    url: zod.string().optional(),
  })
);

export type CdmLegaldocumentationCommonResource = z.infer<
  typeof CdmLegaldocumentationCommonResourceSchema
>;
