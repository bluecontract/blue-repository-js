import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonPriceSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/PriceSource']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      pricePublisher: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      priceSourceHeading: z.string().optional(),
      priceSourceLocation: z.string().optional(),
      priceSourceTime: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonPriceSource = z.infer<
  typeof CdmBaseStaticdataAssetCommonPriceSourceSchema
>;
