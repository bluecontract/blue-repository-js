import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

export const CdmBaseStaticdataIdentifierIdentifiedListSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/IdentifiedList']
  )(
    z.object({
      componentId: z
        .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(2)
        .optional(),
      description: z.string().optional(),
      listId: z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema),
      name: z.string().optional(),
      price: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
    })
  );

export type CdmBaseStaticdataIdentifierIdentifiedList = z.infer<
  typeof CdmBaseStaticdataIdentifierIdentifiedListSchema
>;
