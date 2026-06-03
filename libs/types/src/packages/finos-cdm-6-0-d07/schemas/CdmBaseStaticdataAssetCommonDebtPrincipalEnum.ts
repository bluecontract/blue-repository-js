import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtPrincipalEnum'
    ]
  )(
    zod.enum([
      'Amortising',
      'Bullet',
      'Callable',
      'IndexLinked',
      'InflationLinked',
      'OtherStructured',
      'PrincipalOnly',
      'Puttable',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDebtPrincipalEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema
>;
