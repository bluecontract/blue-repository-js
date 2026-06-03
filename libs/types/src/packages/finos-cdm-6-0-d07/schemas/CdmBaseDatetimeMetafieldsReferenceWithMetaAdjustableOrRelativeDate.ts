import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

const zod = z as any;

export const CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/datetime/metafields/ReferenceWithMetaAdjustableOrRelativeDate'
    ]
  )(
    zod.object({
      address: zod.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: zod.string().optional(),
      globalReference: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate =
  z.infer<
    typeof CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema
  >;
