import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';

export const CdmBaseStaticdataAssetCommonInstrumentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Instrument']
  )(
    z.object({
      description: z.string().optional(),
      ListedDerivative: z
        .lazy(() => CdmBaseStaticdataAssetCommonListedDerivativeSchema)
        .optional(),
      Loan: z.lazy(() => CdmBaseStaticdataAssetCommonLoanSchema).optional(),
      name: z.string().optional(),
      Security: z
        .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonInstrument = z.infer<
  typeof CdmBaseStaticdataAssetCommonInstrumentSchema
>;
