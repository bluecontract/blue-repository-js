import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

export const CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/metafields/ReferenceWithMetaObservable'
    ]
  )(
    z.object({
      address: z.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: z.string().optional(),
      globalReference: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetMetafieldsReferenceWithMetaObservable = z.infer<
  typeof CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
>;
