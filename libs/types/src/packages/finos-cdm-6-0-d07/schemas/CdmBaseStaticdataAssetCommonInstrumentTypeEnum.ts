import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/InstrumentTypeEnum'
    ]
  )(
    zod.enum([
      'Certificate',
      'Debt',
      'Equity',
      'Fund',
      'LetterOfCredit',
      'ListedDerivative',
      'Warrant',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonInstrumentTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema
>;
