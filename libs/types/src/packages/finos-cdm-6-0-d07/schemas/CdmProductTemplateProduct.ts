import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';

export const CdmProductTemplateProductSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Product']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    NonTransferableProduct: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema)
      .optional(),
    TransferableProduct: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateTransferableProductSchema)
      .optional(),
  })
);

export type CdmProductTemplateProduct = z.infer<
  typeof CdmProductTemplateProductSchema
>;
