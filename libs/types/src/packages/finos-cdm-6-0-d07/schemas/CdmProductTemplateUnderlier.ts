import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

export const CdmProductTemplateUnderlierSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Underlier']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    Observable: z
      .lazy(
        (): z.ZodTypeAny =>
          CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
      )
      .optional(),
    Product: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema)
      .optional(),
  })
);

export type CdmProductTemplateUnderlier = z.infer<
  typeof CdmProductTemplateUnderlierSchema
>;
