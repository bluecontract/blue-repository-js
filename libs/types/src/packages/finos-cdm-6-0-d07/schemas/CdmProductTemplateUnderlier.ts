import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

const zod = z as any;

export const CdmProductTemplateUnderlierSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Underlier']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    Observable: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
      )
      .optional(),
    Product: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema)
      .optional(),
  })
);

export type CdmProductTemplateUnderlier = z.infer<
  typeof CdmProductTemplateUnderlierSchema
>;
