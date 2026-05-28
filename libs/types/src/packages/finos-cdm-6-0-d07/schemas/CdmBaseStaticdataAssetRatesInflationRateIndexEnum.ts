import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/rates/InflationRateIndexEnum'
    ]
  )(
    z.enum([
      'AUD-CPI',
      'AUS-CPI',
      'AUS-HICP',
      'BLG-CPI-GI',
      'BLG-CPI-HI',
      'BLG-HICP',
      'BRL-IGPM',
      'BRL-IPCA',
      'CAD-CPI',
      'CLP-CPI',
      'CNY-CPI',
      'CZK-CPI',
      'DEK-CPI',
      'DEK-HICP',
      'DEM-CPI',
      'DEM-CPI-NRW',
      'DEM-HICP',
      'ESP-CPI',
      'ESP-HICP',
      'ESP-R-CPI',
      'ESP-R-HICP',
      'EUR-AI-CPI',
      'EUR-AI-R-CPI',
      'EUR-EXT-CPI',
      'EUR-EXT-R-CPI',
      'FIN-CPI',
      'FIN-HICP',
      'FRC-EXT-CPI',
      'FRC-HICP',
      'GRD-CPI',
      'GRD-HICP',
      'HKD-CPI',
      'HUF-CPI',
      'IDR-CPI',
      'ILS-CPI',
      'IRL-CPI',
      'IRL-HICP',
      'ISK-CPI',
      'ISK-HICP',
      'ITL-BC-EXT-CPI',
      'ITL-BC-INT-CPI',
      'ITL-HICP',
      'ITL-WC-EXT-CPI',
      'ITL-WC-INT-CPI',
      'JPY-CPI-EXF',
      'KRW-CPI',
      'LUX-CPI',
      'LUX-HICP',
      'MXN-CPI',
      'MXN-UDI',
      'MYR-CPI',
      'NLG-CPI',
      'NLG-HICP',
      'NOK-CPI',
      'NZD-CPI',
      'PER-CPI',
      'PLN-CPI',
      'POR-CPI',
      'POR-HICP',
      'RUB-CPI',
      'SEK-CPI',
      'SGD-CPI',
      'SWF-CPI',
      'TRY-CPI',
      'TWD-CPI',
      'UK-CPIH',
      'UK-HICP',
      'UK-RPI',
      'UK-RPIX',
      'USA-CPI-U',
      'ZAR-CPI',
      'ZAR-CPIX',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetRatesInflationRateIndexEnum = z.infer<
  typeof CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema
>;
