import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaEntityTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmBaseStaticdataPartyEntityTypeEnumSchema).optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema
>;
