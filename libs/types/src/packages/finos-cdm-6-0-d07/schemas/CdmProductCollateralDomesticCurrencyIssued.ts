import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralDomesticCurrencyIssuedSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/DomesticCurrencyIssued']
  )(
    z.object({
      domesticCurrencyIssued: z.boolean(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralDomesticCurrencyIssued = z.infer<
  typeof CdmProductCollateralDomesticCurrencyIssuedSchema
>;
