import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

const zod = z as any;

export const CdmProductTemplateEvergreenProvisionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EvergreenProvision']
)(
  zod.object({
    description: zod.string().optional(),
    extensionFrequency: zod.lazy(
      () => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema
    ),
    finalPeriodFeeAdjustment: zod
      .lazy(() => CdmObservableAssetPriceSchema)
      .optional(),
    name: zod.string().optional(),
    noticeDeadlineDateTime: zod.string().optional(),
    noticeDeadlinePeriod: zod
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
    noticePeriod: zod.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
    singlePartyOption: zod
      .lazy(() => CdmBaseStaticdataPartyPartyRoleSchema)
      .optional(),
  })
);

export type CdmProductTemplateEvergreenProvision = z.infer<
  typeof CdmProductTemplateEvergreenProvisionSchema
>;
