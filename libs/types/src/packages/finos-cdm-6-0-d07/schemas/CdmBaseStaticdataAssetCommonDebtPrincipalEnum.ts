import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtPrincipalEnum'
    ]
  )(
    z.enum([
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
