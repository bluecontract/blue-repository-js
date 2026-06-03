import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonInstrumentSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Instrument']
)(
  zod.object({
    description: zod.string().optional(),
    ListedDerivative: zod
      .lazy(() => CdmBaseStaticdataAssetCommonListedDerivativeSchema)
      .optional(),
    Loan: zod.lazy(() => CdmBaseStaticdataAssetCommonLoanSchema).optional(),
    name: zod.string().optional(),
    Security: zod
      .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
      .optional(),
  })
);

export type CdmBaseStaticdataAssetCommonInstrument = z.infer<
  typeof CdmBaseStaticdataAssetCommonInstrumentSchema
>;
