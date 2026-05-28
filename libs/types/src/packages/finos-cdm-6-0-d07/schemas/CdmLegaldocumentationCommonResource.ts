import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
import { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmLegaldocumentationCommonResourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/Resource']
  )(
    z.object({
      comments: z.string().optional(),
      description: z.string().optional(),
      language: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      length: z
        .lazy(() => CdmLegaldocumentationCommonResourceLengthSchema)
        .optional(),
      mimeType: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      name: z.string().optional(),
      resourceId: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      resourceType: z
        .lazy(
          () => CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema
        )
        .optional(),
      sizeInBytes: z.number().optional(),
      string: z.string().optional(),
      url: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonResource = z.infer<
  typeof CdmLegaldocumentationCommonResourceSchema
>;
