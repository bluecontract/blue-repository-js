import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

const zod = z as any;

export const CdmBaseStaticdataIdentifierIdentifiedListSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/IdentifiedList']
  )(
    zod.object({
      componentId: zod
        .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(2)
        .optional(),
      description: zod.string().optional(),
      listId: zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema),
      name: zod.string().optional(),
      price: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
    })
  );

export type CdmBaseStaticdataIdentifierIdentifiedList = z.infer<
  typeof CdmBaseStaticdataIdentifierIdentifiedListSchema
>;
