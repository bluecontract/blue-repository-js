import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';

const zod = z as any;

export const CdmBaseStaticdataPartyTelephoneNumberSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/TelephoneNumber']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    number: zod.string(),
    telephoneNumberType: zod
      .lazy(() => CdmBaseStaticdataPartyTelephoneTypeEnumSchema)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyTelephoneNumber = z.infer<
  typeof CdmBaseStaticdataPartyTelephoneNumberSchema
>;
