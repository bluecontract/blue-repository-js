import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

const zod = z as any;

export const CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/metafields/ReferenceWithMetaPaymentDates'
    ]
  )(
    zod.object({
      address: zod.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: zod.string().optional(),
      globalReference: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates =
  z.infer<
    typeof CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema
  >;
