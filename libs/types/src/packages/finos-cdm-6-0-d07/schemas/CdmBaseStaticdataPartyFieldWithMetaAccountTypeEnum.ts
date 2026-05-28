import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaAccountTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmBaseStaticdataPartyAccountTypeEnumSchema).optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema
>;
