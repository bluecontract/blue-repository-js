import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralDomesticCurrencyIssuedSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/DomesticCurrencyIssued']
  )(
    zod.object({
      domesticCurrencyIssued: zod.boolean(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralDomesticCurrencyIssued = z.infer<
  typeof CdmProductCollateralDomesticCurrencyIssuedSchema
>;
