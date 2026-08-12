import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';

const zod = z as any;

export const CdmProductTemplateProductSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Product']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    NonTransferableProduct: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema)
      .optional(),
    TransferableProduct: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateTransferableProductSchema)
      .optional(),
  })
);

export type CdmProductTemplateProduct = z.infer<
  typeof CdmProductTemplateProductSchema
>;
