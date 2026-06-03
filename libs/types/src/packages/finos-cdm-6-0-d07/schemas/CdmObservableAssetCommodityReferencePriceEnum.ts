import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCommodityReferencePriceEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CommodityReferencePriceEnum'
    ]
  )(
    zod.enum([
      'ALUMINIUM ALLOY-LME 15 MONTH',
      'COAL-CENTRAL APPALACHIAN-NYMEX',
      'COCOA-ICE',
      'COFFEE ARABICA-ICE',
      'COFFEE ROBUSTA-ICE',
      'COPPER-COMEX',
      'CORN-CBOT',
      'COTTON NO. 2-ICE',
      'ETHANOL-CBOT',
      'FEEDER CATTLE-CME',
      'FROZEN CONCENTRATED ORANGE JUICE NO. 1-ICE',
      'GASOLINE-RBOB-NEW YORK-ICE',
      'GASOLINE-RBOB-NEW YORK-NYMEX',
      'GOLD-COMEX',
      'HEATING OIL-NEW YORK-NYMEX',
      'LEAN HOGS-CME',
      'LIVE CATTLE-CME',
      'LUMBER-CME',
      'MILK-CLASS III-CME',
      'MILK-NONFAT-DRY-CME',
      'NATURAL GAS-NYMEX',
      'NATURAL GAS-PEPL (TEXOK MAINLINE)-INSIDE FERC',
      'NATURAL GAS-W. TEXAS (WAHA)-INSIDE FERC',
      'OATS-CBOT',
      'OIL-WTI-NYMEX',
      'PALLADIUM-NYMEX',
      'PLATINUM-NYMEX',
      'RICE-CBOT',
      'SILVER-COMEX',
      'SOYBEANS-CBOT',
      'SOYBEAN MEAL-CBOT',
      'SOYBEAN OIL-CBOT',
      'SUGAR # 11 (WORLD)-ICE',
      'SUGAR # 16 (US)-ICE',
      'WHEAT-CBOT',
      'WHEAT HRW-KCBOT',
      'WHEAT RED SPRING-MGE',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCommodityReferencePriceEnum = z.infer<
  typeof CdmObservableAssetCommodityReferencePriceEnumSchema
>;
