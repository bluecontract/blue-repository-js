import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetSingleValuationDateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SingleValuationDate']
)(
  zod.object({
    businessDays: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetSingleValuationDate = z.infer<
  typeof CdmObservableAssetSingleValuationDateSchema
>;
