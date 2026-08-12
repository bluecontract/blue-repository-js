import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

const zod = z as any;

export const CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/EquitySwapMasterConfirmation2018'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      equityCashSettlementDates: zod.lazy(
        () => CdmProductCommonSchedulePaymentDatesSchema
      ),
      linearInterpolationElection: zod.lazy(
        () => CdmObservableAssetInterpolationMethodEnumSchema
      ),
      name: zod.string().optional(),
      pricingMethodElection: zod.lazy(
        () => CdmProductAssetPriceReturnTermsSchema
      ),
      settlementTerms: zod.lazy(
        () => CdmProductCommonSettlementSettlementTermsSchema
      ),
      typeOfSwapElection: zod.lazy(() => CdmProductAssetReturnTypeEnumSchema),
      valuationDates: zod.lazy(() => CdmObservableAssetValuationDatesSchema),
    })
  );

export type CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018 =
  z.infer<
    typeof CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema
  >;
