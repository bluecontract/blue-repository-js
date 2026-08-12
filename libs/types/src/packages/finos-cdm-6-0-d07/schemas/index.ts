import type { ZodTypeAny } from 'zod';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
import { CdmBaseDatetimeCustomisableOffsetSchema } from './CdmBaseDatetimeCustomisableOffset';
import { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
import { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
import { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
import { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';
import { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';
import { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
import { CdmBaseDatetimeTimeUnitEnumSchema } from './CdmBaseDatetimeTimeUnitEnum';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
import { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
import { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathCompareOpSchema } from './CdmBaseMathCompareOp';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
import { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
import { CdmBaseMathMeasureBaseSchema } from './CdmBaseMathMeasureBase';
import { CdmBaseMathMeasureScheduleSchema } from './CdmBaseMathMeasureSchedule';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';
import { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
import { CdmBaseMathNonNegativeStepSchema } from './CdmBaseMathNonNegativeStep';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
import { CdmBaseMathQuantityScheduleSchema } from './CdmBaseMathQuantitySchedule';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';
import { CdmBaseMathRoundingModeEnumSchema } from './CdmBaseMathRoundingModeEnum';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataAssetCommonAssetBaseSchema } from './CdmBaseStaticdataAssetCommonAssetBase';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
import { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
import { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomySchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomy';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
import { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
import { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
import { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';
import { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
import { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';
import { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
import { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
import { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';
import { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
import { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
import { CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema } from './CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
import { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
import { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
import { CdmBaseStaticdataAssetCommonInstrumentBaseSchema } from './CdmBaseStaticdataAssetCommonInstrumentBase';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
import { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';
import { CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMoneyMarketTypeEnum';
import { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
import { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
import { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
import { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
import { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
import { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
import { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';
import { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
import { CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
import { CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema } from './CdmBaseStaticdataIdentifierFieldWithMetaIdentifier';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
import { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
import { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
import { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
import { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
import { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
import { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';
import { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
import { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
import { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
import { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';
import { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
import { CdmBaseStaticdataPartyRelatedPartySchema } from './CdmBaseStaticdataPartyRelatedParty';
import { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';
import { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';
import { CdmEventCommonActionEnumSchema } from './CdmEventCommonActionEnum';
import { CdmEventCommonAffirmationStatusEnumSchema } from './CdmEventCommonAffirmationStatusEnum';
import { CdmEventCommonAssetTransferTypeEnumSchema } from './CdmEventCommonAssetTransferTypeEnum';
import { CdmEventCommonBillingInstructionSchema } from './CdmEventCommonBillingInstruction';
import { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
import { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
import { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';
import { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';
import { CdmEventCommonBusinessEventSchema } from './CdmEventCommonBusinessEvent';
import { CdmEventCommonCalculateTransferInstructionSchema } from './CdmEventCommonCalculateTransferInstruction';
import { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';
import { CdmEventCommonClearingInstructionSchema } from './CdmEventCommonClearingInstruction';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonCollateralPortfolioSchema } from './CdmEventCommonCollateralPortfolio';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonConfirmationStatusEnumSchema } from './CdmEventCommonConfirmationStatusEnum';
import { CdmEventCommonContractDetailsSchema } from './CdmEventCommonContractDetails';
import { CdmEventCommonContractFormationInstructionSchema } from './CdmEventCommonContractFormationInstruction';
import { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonCounterpartyPositionBusinessEventSchema } from './CdmEventCommonCounterpartyPositionBusinessEvent';
import { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
import { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';
import { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
import { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
import { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
import { CdmEventCommonExecutionInstructionSchema } from './CdmEventCommonExecutionInstruction';
import { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';
import { CdmEventCommonExerciseEventSchema } from './CdmEventCommonExerciseEvent';
import { CdmEventCommonExerciseInstructionSchema } from './CdmEventCommonExerciseInstruction';
import { CdmEventCommonExposureSchema } from './CdmEventCommonExposure';
import { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
import { CdmEventCommonIndexTransitionInstructionSchema } from './CdmEventCommonIndexTransitionInstruction';
import { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';
import { CdmEventCommonInstructionFunctionEnumSchema } from './CdmEventCommonInstructionFunctionEnum';
import { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
import { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';
import { CdmEventCommonMarginCallBaseSchema } from './CdmEventCommonMarginCallBase';
import { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
import { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
import { CdmEventCommonMarginCallIssuanceSchema } from './CdmEventCommonMarginCallIssuance';
import { CdmEventCommonMarginCallResponseSchema } from './CdmEventCommonMarginCallResponse';
import { CdmEventCommonMarginCallResponseActionSchema } from './CdmEventCommonMarginCallResponseAction';
import { CdmEventCommonMarginCallResponseTypeEnumSchema } from './CdmEventCommonMarginCallResponseTypeEnum';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonObservationInstructionSchema } from './CdmEventCommonObservationInstruction';
import { CdmEventCommonPartyChangeInstructionSchema } from './CdmEventCommonPartyChangeInstruction';
import { CdmEventCommonPerformanceTransferTypeEnumSchema } from './CdmEventCommonPerformanceTransferTypeEnum';
import { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';
import { CdmEventCommonPositionIdentifierSchema } from './CdmEventCommonPositionIdentifier';
import { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
import { CdmEventCommonQuantityChangeInstructionSchema } from './CdmEventCommonQuantityChangeInstruction';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
import { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
import { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonResetInstructionSchema } from './CdmEventCommonResetInstruction';
import { CdmEventCommonReturnInstructionSchema } from './CdmEventCommonReturnInstruction';
import { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
import { CdmEventCommonSecurityLendingInvoiceSchema } from './CdmEventCommonSecurityLendingInvoice';
import { CdmEventCommonSplitInstructionSchema } from './CdmEventCommonSplitInstruction';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonStockSplitInstructionSchema } from './CdmEventCommonStockSplitInstruction';
import { CdmEventCommonTermsChangeInstructionSchema } from './CdmEventCommonTermsChangeInstruction';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmEventCommonTradePricingReportSchema } from './CdmEventCommonTradePricingReport';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmEventCommonTransferExpressionSchema } from './CdmEventCommonTransferExpression';
import { CdmEventCommonTransferInstructionSchema } from './CdmEventCommonTransferInstruction';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
import { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
import { CdmEventCommonValuationInstructionSchema } from './CdmEventCommonValuationInstruction';
import { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
import { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
import { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
import { CdmEventPositionAvailableInventorySchema } from './CdmEventPositionAvailableInventory';
import { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
import { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
import { CdmEventPositionContractBaseSchema } from './CdmEventPositionContractBase';
import { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';
import { CdmEventPositionInventorySchema } from './CdmEventPositionInventory';
import { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmEventPositionPortfolioSchema } from './CdmEventPositionPortfolio';
import { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';
import { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmEventPositionSecurityLocateSchema } from './CdmEventPositionSecurityLocate';
import { CdmEventWorkflowCreditLimitInformationSchema } from './CdmEventWorkflowCreditLimitInformation';
import { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';
import { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';
import { CdmEventWorkflowEventInstructionSchema } from './CdmEventWorkflowEventInstruction';
import { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';
import { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
import { CdmEventWorkflowLimitApplicableSchema } from './CdmEventWorkflowLimitApplicable';
import { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';
import { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
import { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';
import { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';
import { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
import { CdmEventWorkflowWorkflowSchema } from './CdmEventWorkflowWorkflow';
import { CdmEventWorkflowWorkflowStateSchema } from './CdmEventWorkflowWorkflowState';
import { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';
import { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';
import { CdmEventWorkflowWorkflowStepApprovalSchema } from './CdmEventWorkflowWorkflowStepApproval';
import { CdmLegaldocumentationCommonAddressForNoticesSchema } from './CdmLegaldocumentationCommonAddressForNotices';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmLegaldocumentationCommonAgreementTermsSchema } from './CdmLegaldocumentationCommonAgreementTerms';
import { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';
import { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';
import { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
import { CdmLegaldocumentationCommonContractualMatrixSchema } from './CdmLegaldocumentationCommonContractualMatrix';
import { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
import { CdmLegaldocumentationCommonContractualTermsSupplementSchema } from './CdmLegaldocumentationCommonContractualTermsSupplement';
import { CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportDocumentTermsEnum';
import { CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportProviderTermsEnum';
import { CdmLegaldocumentationCommonExecutionLocationEnumSchema } from './CdmLegaldocumentationCommonExecutionLocationEnum';
import { CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum';
import { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';
import { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';
import { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
import { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';
import { CdmLegaldocumentationCommonLegalAgreementBaseSchema } from './CdmLegaldocumentationCommonLegalAgreementBase';
import { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
import { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';
import { CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementTypeEnum';
import { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';
import { CdmLegaldocumentationCommonMatrixTermEnumSchema } from './CdmLegaldocumentationCommonMatrixTermEnum';
import { CdmLegaldocumentationCommonMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonMatrixTypeEnum';
import { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';
import { CdmLegaldocumentationCommonOtherAgreementSchema } from './CdmLegaldocumentationCommonOtherAgreement';
import { CdmLegaldocumentationCommonOtherAgreementTermsSchema } from './CdmLegaldocumentationCommonOtherAgreementTerms';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
import { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
import { CdmLegaldocumentationCommonResourceTypeEnumSchema } from './CdmLegaldocumentationCommonResourceTypeEnum';
import { CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityClauseEnum';
import { CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityTermsEnum';
import { CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema } from './CdmLegaldocumentationCommonTerminationCurrencyConditionEnum';
import { CdmLegaldocumentationCommonUmbrellaAgreementSchema } from './CdmLegaldocumentationCommonUmbrellaAgreement';
import { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';
import { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';
import { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
import { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
import { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
import { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
import { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
import { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
import { CdmLegaldocumentationMasterEquityMasterConfirmationSchema } from './CdmLegaldocumentationMasterEquityMasterConfirmation';
import { CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema } from './CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
import { CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum';
import { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';
import { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
import { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';
import { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';
import { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
import { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
import { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
import { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';
import { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
import { CdmLegaldocumentationMasterMasterConfirmationBaseSchema } from './CdmLegaldocumentationMasterMasterConfirmationBase';
import { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
import { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
import { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';
import { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';
import { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';
import { CdmMarginScheduleStandardizedScheduleSchema } from './CdmMarginScheduleStandardizedSchedule';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleInitialMarginSchema } from './CdmMarginScheduleStandardizedScheduleInitialMargin';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
import { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
import { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';
import { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationShiftMethodEnum';
import { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
import { CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationStyleEnum';
import { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
import { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';
import { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
import { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
import { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
import { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
import { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditNotationsSchema } from './CdmObservableAssetCreditNotations';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
import { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
import { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
import { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
import { CdmObservableAssetCurveSchema } from './CdmObservableAssetCurve';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
import { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
import { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';
import { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
import { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
import { CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema } from './CdmObservableAssetFieldWithMetaInterpolationMethodEnum';
import { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
import { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';
import { CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetFieldWithMetaQuotedCurrencyPair';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
import { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
import { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
import { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
import { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
import { CdmObservableAssetFroFloatingRateIndexDefinitionSchema } from './CdmObservableAssetFroFloatingRateIndexDefinition';
import { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';
import { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';
import { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
import { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
import { CdmObservableAssetFxRateSourceFixingSchema } from './CdmObservableAssetFxRateSourceFixing';
import { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
import { CdmObservableAssetIndexBaseSchema } from './CdmObservableAssetIndexBase';
import { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';
import { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
import { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';
import { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
import { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';
import { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
import { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
import { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';
import { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';
import { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableAssetPriceCompositeSchema } from './CdmObservableAssetPriceComposite';
import { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
import { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';
import { CdmObservableAssetPriceTypeEnumSchema } from './CdmObservableAssetPriceTypeEnum';
import { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
import { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';
import { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
import { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
import { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
import { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';
import { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
import { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
import { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';
import { CdmObservableAssetTransactedPriceSchema } from './CdmObservableAssetTransactedPrice';
import { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
import { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
import { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
import { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';
import { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';
import { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
import { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
import { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
import { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';
import { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';
import { CdmObservableEventIndexEventConsequenceEnumSchema } from './CdmObservableEventIndexEventConsequenceEnum';
import { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
import { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
import { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
import { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';
import { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';
import { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';
import { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';
import { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
import { CdmObservableEventShareExtraordinaryEventEnumSchema } from './CdmObservableEventShareExtraordinaryEventEnum';
import { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';
import { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
import { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';
import { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
import { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
import { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';
import { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
import { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
import { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
import { CdmProductAssetBondReferenceSchema } from './CdmProductAssetBondReference';
import { CdmProductAssetBoundedCorrelationSchema } from './CdmProductAssetBoundedCorrelation';
import { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';
import { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';
import { CdmProductAssetCashflowRepresentationSchema } from './CdmProductAssetCashflowRepresentation';
import { CdmProductAssetCommodityPayoutSchema } from './CdmProductAssetCommodityPayout';
import { CdmProductAssetCompoundingMethodEnumSchema } from './CdmProductAssetCompoundingMethodEnum';
import { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
import { CdmProductAssetCreditDefaultPayoutSchema } from './CdmProductAssetCreditDefaultPayout';
import { CdmProductAssetCreditSeniorityEnumSchema } from './CdmProductAssetCreditSeniorityEnum';
import { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
import { CdmProductAssetDiscountingMethodSchema } from './CdmProductAssetDiscountingMethod';
import { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';
import { CdmProductAssetDividendAmountTypeEnumSchema } from './CdmProductAssetDividendAmountTypeEnum';
import { CdmProductAssetDividendCompositionEnumSchema } from './CdmProductAssetDividendCompositionEnum';
import { CdmProductAssetDividendCurrencySchema } from './CdmProductAssetDividendCurrency';
import { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';
import { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';
import { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
import { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';
import { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';
import { CdmProductAssetDividendPeriodSchema } from './CdmProductAssetDividendPeriod';
import { CdmProductAssetDividendPeriodEnumSchema } from './CdmProductAssetDividendPeriodEnum';
import { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema } from './CdmProductAssetFieldWithMetaIndexAnnexSourceEnum';
import { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';
import { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';
import { CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema } from './CdmProductAssetFinalPrincipalExchangeCalculationEnum';
import { CdmProductAssetFixedAmountCalculationDetailsSchema } from './CdmProductAssetFixedAmountCalculationDetails';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
import { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';
import { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
import { CdmProductAssetFloatingRateSchema } from './CdmProductAssetFloatingRate';
import { CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema } from './CdmProductAssetFloatingrateFloatingAmountCalculationDetails';
import { CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema } from './CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnum';
import { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
import { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';
import { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
import { CdmProductAssetFloatingRateBaseSchema } from './CdmProductAssetFloatingRateBase';
import { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
import { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
import { CdmProductAssetForeignExchangeSchema } from './CdmProductAssetForeignExchange';
import { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';
import { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
import { CdmProductAssetGeneralTermsSchema } from './CdmProductAssetGeneralTerms';
import { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
import { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';
import { CdmProductAssetInterestRatePayoutSchema } from './CdmProductAssetInterestRatePayout';
import { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';
import { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';
import { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';
import { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
import { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';
import { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetNonCashDividendTreatmentEnumSchema } from './CdmProductAssetNonCashDividendTreatmentEnum';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetProtectionTermsSchema } from './CdmProductAssetProtectionTerms';
import { CdmProductAssetRateSpecificationSchema } from './CdmProductAssetRateSpecification';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';
import { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
import { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
import { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';
import { CdmProductAssetReturnTermsBaseSchema } from './CdmProductAssetReturnTermsBase';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
import { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';
import { CdmProductAssetSettledEntityMatrixSchema } from './CdmProductAssetSettledEntityMatrix';
import { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
import { CdmProductAssetSpreadCalculationMethodEnumSchema } from './CdmProductAssetSpreadCalculationMethodEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
import { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';
import { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
import { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
import { CdmProductAssetVarianceCapFloorSchema } from './CdmProductAssetVarianceCapFloor';
import { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
import { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';
import { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';
import { CdmProductCollateralAllCriteriaSchema } from './CdmProductCollateralAllCriteria';
import { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
import { CdmProductCollateralAnyCriteriaSchema } from './CdmProductCollateralAnyCriteria';
import { CdmProductCollateralAssetAgencyRatingSchema } from './CdmProductCollateralAssetAgencyRating';
import { CdmProductCollateralAssetCountryOfOriginSchema } from './CdmProductCollateralAssetCountryOfOrigin';
import { CdmProductCollateralAssetMaturitySchema } from './CdmProductCollateralAssetMaturity';
import { CdmProductCollateralAverageTradingVolumeSchema } from './CdmProductCollateralAverageTradingVolume';
import { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';
import { CdmProductCollateralCheckEligibilityResultSchema } from './CdmProductCollateralCheckEligibilityResult';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralCriteriaBaseSchema } from './CdmProductCollateralCollateralCriteriaBase';
import { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
import { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
import { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
import { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
import { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
import { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
import { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';
import { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';
import { CdmProductCollateralConcentrationLimitTypeEnumSchema } from './CdmProductCollateralConcentrationLimitTypeEnum';
import { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';
import { CdmProductCollateralCounterpartyOwnIssuePermittedSchema } from './CdmProductCollateralCounterpartyOwnIssuePermitted';
import { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
import { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
import { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';
import { CdmProductCollateralDistributionAndInterestPaymentSchema } from './CdmProductCollateralDistributionAndInterestPayment';
import { CdmProductCollateralDomesticCurrencyIssuedSchema } from './CdmProductCollateralDomesticCurrencyIssued';
import { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';
import { CdmProductCollateralEligibleCollateralSpecificationInstructionSchema } from './CdmProductCollateralEligibleCollateralSpecificationInstruction';
import { CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum';
import { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';
import { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';
import { CdmProductCollateralIssuerAgencyRatingSchema } from './CdmProductCollateralIssuerAgencyRating';
import { CdmProductCollateralIssuerCountryOfOriginSchema } from './CdmProductCollateralIssuerCountryOfOrigin';
import { CdmProductCollateralIssuerNameSchema } from './CdmProductCollateralIssuerName';
import { CdmProductCollateralListingExchangeSchema } from './CdmProductCollateralListingExchange';
import { CdmProductCollateralListingSectorSchema } from './CdmProductCollateralListingSector';
import { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';
import { CdmProductCollateralNegativeCriteriaSchema } from './CdmProductCollateralNegativeCriteria';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';
import { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';
import { CdmProductCollateralSovereignAgencyRatingSchema } from './CdmProductCollateralSovereignAgencyRating';
import { CdmProductCollateralSpecificAssetSchema } from './CdmProductCollateralSpecificAsset';
import { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';
import { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';
import { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
import { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';
import { CdmProductCommonScheduleCalculationPeriodDataSchema } from './CdmProductCommonScheduleCalculationPeriodData';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema } from './CdmProductCommonScheduleDateRelativeToCalculationPeriodDates';
import { CdmProductCommonScheduleDateRelativeToPaymentDatesSchema } from './CdmProductCommonScheduleDateRelativeToPaymentDates';
import { CdmProductCommonScheduleDateRelativeToValuationDatesSchema } from './CdmProductCommonScheduleDateRelativeToValuationDates';
import { CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema } from './CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment';
import { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';
import { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';
import { CdmProductCommonScheduleInitialFixingDateSchema } from './CdmProductCommonScheduleInitialFixingDate';
import { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';
import { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';
import { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';
import { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';
import { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
import { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
import { CdmProductCommonScheduleResetDatesSchema } from './CdmProductCommonScheduleResetDates';
import { CdmProductCommonScheduleResetFrequencySchema } from './CdmProductCommonScheduleResetFrequency';
import { CdmProductCommonScheduleResetRelativeToEnumSchema } from './CdmProductCommonScheduleResetRelativeToEnum';
import { CdmProductCommonScheduleStubCalculationPeriodAmountSchema } from './CdmProductCommonScheduleStubCalculationPeriodAmount';
import { CdmProductCommonScheduleStubPeriodSchema } from './CdmProductCommonScheduleStubPeriod';
import { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';
import { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';
import { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';
import { CdmProductCommonSettlementAssetFlowBaseSchema } from './CdmProductCommonSettlementAssetFlowBase';
import { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';
import { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
import { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
import { CdmProductCommonSettlementCashSettlementTermsSchema } from './CdmProductCommonSettlementCashSettlementTerms';
import { CdmProductCommonSettlementCommodityPriceReturnTermsSchema } from './CdmProductCommonSettlementCommodityPriceReturnTerms';
import { CdmProductCommonSettlementComputedAmountSchema } from './CdmProductCommonSettlementComputedAmount';
import { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
import { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';
import { CdmProductCommonSettlementFixedPriceSchema } from './CdmProductCommonSettlementFixedPrice';
import { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';
import { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
import { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';
import { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';
import { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';
import { CdmProductCommonSettlementPayoutBaseSchema } from './CdmProductCommonSettlementPayoutBase';
import { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';
import { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';
import { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';
import { CdmProductCommonSettlementPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementPhysicalSettlementTerms';
import { CdmProductCommonSettlementPricingDatesSchema } from './CdmProductCommonSettlementPricingDates';
import { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';
import { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';
import { CdmProductCommonSettlementSettlementBaseSchema } from './CdmProductCommonSettlementSettlementBase';
import { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
import { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
import { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
import { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';
import { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
import { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
import { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';
import { CdmProductTemplateAsianSchema } from './CdmProductTemplateAsian';
import { CdmProductTemplateAssetLegSchema } from './CdmProductTemplateAssetLeg';
import { CdmProductTemplateAssetPayoutSchema } from './CdmProductTemplateAssetPayout';
import { CdmProductTemplateAssetPayoutTradeTypeEnumSchema } from './CdmProductTemplateAssetPayoutTradeTypeEnum';
import { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
import { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';
import { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';
import { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
import { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
import { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
import { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
import { CdmProductTemplateCancelableProvisionAdjustedDatesSchema } from './CdmProductTemplateCancelableProvisionAdjustedDates';
import { CdmProductTemplateCancellationEventSchema } from './CdmProductTemplateCancellationEvent';
import { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
import { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';
import { CdmProductTemplateDividendTermsSchema } from './CdmProductTemplateDividendTerms';
import { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';
import { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';
import { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
import { CdmProductTemplateExerciseFeeSchema } from './CdmProductTemplateExerciseFee';
import { CdmProductTemplateExerciseFeeScheduleSchema } from './CdmProductTemplateExerciseFeeSchedule';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';
import { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
import { CdmProductTemplateExerciseProcedureSchema } from './CdmProductTemplateExerciseProcedure';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateExpirationTimeTypeEnumSchema } from './CdmProductTemplateExpirationTimeTypeEnum';
import { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';
import { CdmProductTemplateExtendibleProvisionAdjustedDatesSchema } from './CdmProductTemplateExtendibleProvisionAdjustedDates';
import { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';
import { CdmProductTemplateFixedPricePayoutSchema } from './CdmProductTemplateFixedPricePayout';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
import { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
import { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';
import { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';
import { CdmProductTemplateMarginTypeEnumSchema } from './CdmProductTemplateMarginTypeEnum';
import { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';
import { CdmProductTemplateMultipleExerciseSchema } from './CdmProductTemplateMultipleExercise';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';
import { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';
import { CdmProductTemplateOptionExerciseStyleEnumSchema } from './CdmProductTemplateOptionExerciseStyleEnum';
import { CdmProductTemplateOptionFeatureSchema } from './CdmProductTemplateOptionFeature';
import { CdmProductTemplateOptionPayoutSchema } from './CdmProductTemplateOptionPayout';
import { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';
import { CdmProductTemplateOptionTypeEnumSchema } from './CdmProductTemplateOptionTypeEnum';
import { CdmProductTemplatePartialExerciseSchema } from './CdmProductTemplatePartialExercise';
import { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
import { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';
import { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
import { CdmProductTemplatePerformancePayoutSchema } from './CdmProductTemplatePerformancePayout';
import { CdmProductTemplatePortfolioReturnTermsSchema } from './CdmProductTemplatePortfolioReturnTerms';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';
import { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
import { CdmProductTemplateRepoDurationEnumSchema } from './CdmProductTemplateRepoDurationEnum';
import { CdmProductTemplateReturnTermsSchema } from './CdmProductTemplateReturnTerms';
import { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';
import { CdmProductTemplateSettlementPayoutSchema } from './CdmProductTemplateSettlementPayout';
import { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';
import { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';
import { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';
import { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';
import { CdmProductTemplateTradableProductSchema } from './CdmProductTemplateTradableProduct';
import { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';
import { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';
import { CdmRegulationAddtlAttrbtsSchema } from './CdmRegulationAddtlAttrbts';
import { CdmRegulationBuyrSchema } from './CdmRegulationBuyr';
import { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
import { CdmRegulationDocumentSchema } from './CdmRegulationDocument';
import { CdmRegulationExctgPrsnSchema } from './CdmRegulationExctgPrsn';
import { CdmRegulationFinInstrmSchema } from './CdmRegulationFinInstrm';
import { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
import { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';
import { CdmRegulationIdSchema } from './CdmRegulationId';
import { CdmRegulationIndxSchema } from './CdmRegulationIndx';
import { CdmRegulationInvstmtDcsnPrsnSchema } from './CdmRegulationInvstmtDcsnPrsn';
import { CdmRegulationNewSchema } from './CdmRegulationNew';
import { CdmRegulationNmSchema } from './CdmRegulationNm';
import { CdmRegulationOrdrTrnsmssnSchema } from './CdmRegulationOrdrTrnsmssn';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';
import { CdmRegulationPricSchema } from './CdmRegulationPric';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';
import { CdmRegulationQtySchema } from './CdmRegulationQty';
import { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
import { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';
import { CdmRegulationSellrSchema } from './CdmRegulationSellr';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';
import { CdmRegulationSwpSchema } from './CdmRegulationSwp';
import { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
import { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';
import { CdmRegulationTermSchema } from './CdmRegulationTerm';
import { CdmRegulationTxSchema } from './CdmRegulationTx';
import { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
import { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
export { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
export { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
export { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
export { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
export { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
export { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
export { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';
export { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
export { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
export { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
export { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
export { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';
export { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
export { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
export { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
export { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
export { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
export { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
export { CdmBaseDatetimeCustomisableOffsetSchema } from './CdmBaseDatetimeCustomisableOffset';
export { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
export { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
export { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
export { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
export { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
export { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
export { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
export { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
export { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
export { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
export { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
export { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
export { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
export { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';
export { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
export { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
export { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
export { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
export { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';
export { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
export { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';
export { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';
export { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
export { CdmBaseDatetimeTimeUnitEnumSchema } from './CdmBaseDatetimeTimeUnitEnum';
export { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
export { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
export { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
export { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
export { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
export { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
export { CdmBaseMathCompareOpSchema } from './CdmBaseMathCompareOp';
export { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
export { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
export { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
export { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
export { CdmBaseMathMeasureBaseSchema } from './CdmBaseMathMeasureBase';
export { CdmBaseMathMeasureScheduleSchema } from './CdmBaseMathMeasureSchedule';
export { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
export { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';
export { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
export { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
export { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
export { CdmBaseMathNonNegativeStepSchema } from './CdmBaseMathNonNegativeStep';
export { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
export { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
export { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
export { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
export { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
export { CdmBaseMathQuantityScheduleSchema } from './CdmBaseMathQuantitySchedule';
export { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
export { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';
export { CdmBaseMathRoundingModeEnumSchema } from './CdmBaseMathRoundingModeEnum';
export { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
export { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';
export { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
export { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
export { CdmBaseStaticdataAssetCommonAssetBaseSchema } from './CdmBaseStaticdataAssetCommonAssetBase';
export { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
export { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
export { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
export { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
export { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
export { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
export { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
export { CdmBaseStaticdataAssetCommonCollateralTaxonomySchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomy';
export { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
export { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
export { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
export { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
export { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
export { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';
export { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
export { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
export { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';
export { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
export { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
export { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';
export { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
export { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
export { CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema } from './CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum';
export { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
export { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
export { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
export { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
export { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
export { CdmBaseStaticdataAssetCommonInstrumentBaseSchema } from './CdmBaseStaticdataAssetCommonInstrumentBase';
export { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
export { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
export { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
export { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
export { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
export { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
export { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';
export { CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMoneyMarketTypeEnum';
export { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
export { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
export { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
export { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
export { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
export { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
export { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
export { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
export { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
export { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';
export { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
export { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';
export { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
export { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';
export { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
export { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
export { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
export { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
export { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
export { CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum';
export { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
export { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
export { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
export { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
export { CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema } from './CdmBaseStaticdataIdentifierFieldWithMetaIdentifier';
export { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
export { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
export { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
export { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
export { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
export { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
export { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
export { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
export { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
export { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
export { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
export { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
export { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
export { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
export { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
export { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
export { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';
export { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
export { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
export { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
export { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
export { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
export { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
export { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';
export { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
export { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
export { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
export { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
export { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
export { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
export { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
export { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
export { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';
export { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
export { CdmBaseStaticdataPartyRelatedPartySchema } from './CdmBaseStaticdataPartyRelatedParty';
export { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';
export { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';
export { CdmEventCommonActionEnumSchema } from './CdmEventCommonActionEnum';
export { CdmEventCommonAffirmationStatusEnumSchema } from './CdmEventCommonAffirmationStatusEnum';
export { CdmEventCommonAssetTransferTypeEnumSchema } from './CdmEventCommonAssetTransferTypeEnum';
export { CdmEventCommonBillingInstructionSchema } from './CdmEventCommonBillingInstruction';
export { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
export { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
export { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';
export { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';
export { CdmEventCommonBusinessEventSchema } from './CdmEventCommonBusinessEvent';
export { CdmEventCommonCalculateTransferInstructionSchema } from './CdmEventCommonCalculateTransferInstruction';
export { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';
export { CdmEventCommonClearingInstructionSchema } from './CdmEventCommonClearingInstruction';
export { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
export { CdmEventCommonCollateralPortfolioSchema } from './CdmEventCommonCollateralPortfolio';
export { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
export { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
export { CdmEventCommonConfirmationStatusEnumSchema } from './CdmEventCommonConfirmationStatusEnum';
export { CdmEventCommonContractDetailsSchema } from './CdmEventCommonContractDetails';
export { CdmEventCommonContractFormationInstructionSchema } from './CdmEventCommonContractFormationInstruction';
export { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
export { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
export { CdmEventCommonCounterpartyPositionBusinessEventSchema } from './CdmEventCommonCounterpartyPositionBusinessEvent';
export { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
export { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';
export { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
export { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
export { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
export { CdmEventCommonExecutionInstructionSchema } from './CdmEventCommonExecutionInstruction';
export { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';
export { CdmEventCommonExerciseEventSchema } from './CdmEventCommonExerciseEvent';
export { CdmEventCommonExerciseInstructionSchema } from './CdmEventCommonExerciseInstruction';
export { CdmEventCommonExposureSchema } from './CdmEventCommonExposure';
export { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
export { CdmEventCommonIndexTransitionInstructionSchema } from './CdmEventCommonIndexTransitionInstruction';
export { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';
export { CdmEventCommonInstructionFunctionEnumSchema } from './CdmEventCommonInstructionFunctionEnum';
export { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
export { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';
export { CdmEventCommonMarginCallBaseSchema } from './CdmEventCommonMarginCallBase';
export { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
export { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
export { CdmEventCommonMarginCallIssuanceSchema } from './CdmEventCommonMarginCallIssuance';
export { CdmEventCommonMarginCallResponseSchema } from './CdmEventCommonMarginCallResponse';
export { CdmEventCommonMarginCallResponseActionSchema } from './CdmEventCommonMarginCallResponseAction';
export { CdmEventCommonMarginCallResponseTypeEnumSchema } from './CdmEventCommonMarginCallResponseTypeEnum';
export { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
export { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
export { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
export { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
export { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
export { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
export { CdmEventCommonObservationInstructionSchema } from './CdmEventCommonObservationInstruction';
export { CdmEventCommonPartyChangeInstructionSchema } from './CdmEventCommonPartyChangeInstruction';
export { CdmEventCommonPerformanceTransferTypeEnumSchema } from './CdmEventCommonPerformanceTransferTypeEnum';
export { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';
export { CdmEventCommonPositionIdentifierSchema } from './CdmEventCommonPositionIdentifier';
export { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
export { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
export { CdmEventCommonQuantityChangeInstructionSchema } from './CdmEventCommonQuantityChangeInstruction';
export { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
export { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
export { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
export { CdmEventCommonResetSchema } from './CdmEventCommonReset';
export { CdmEventCommonResetInstructionSchema } from './CdmEventCommonResetInstruction';
export { CdmEventCommonReturnInstructionSchema } from './CdmEventCommonReturnInstruction';
export { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
export { CdmEventCommonSecurityLendingInvoiceSchema } from './CdmEventCommonSecurityLendingInvoice';
export { CdmEventCommonSplitInstructionSchema } from './CdmEventCommonSplitInstruction';
export { CdmEventCommonStateSchema } from './CdmEventCommonState';
export { CdmEventCommonStockSplitInstructionSchema } from './CdmEventCommonStockSplitInstruction';
export { CdmEventCommonTermsChangeInstructionSchema } from './CdmEventCommonTermsChangeInstruction';
export { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
export { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
export { CdmEventCommonTradePricingReportSchema } from './CdmEventCommonTradePricingReport';
export { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
export { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
export { CdmEventCommonTransferExpressionSchema } from './CdmEventCommonTransferExpression';
export { CdmEventCommonTransferInstructionSchema } from './CdmEventCommonTransferInstruction';
export { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
export { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';
export { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
export { CdmEventCommonValuationInstructionSchema } from './CdmEventCommonValuationInstruction';
export { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
export { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
export { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
export { CdmEventPositionAvailableInventorySchema } from './CdmEventPositionAvailableInventory';
export { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
export { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
export { CdmEventPositionContractBaseSchema } from './CdmEventPositionContractBase';
export { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';
export { CdmEventPositionInventorySchema } from './CdmEventPositionInventory';
export { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';
export { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
export { CdmEventPositionPortfolioSchema } from './CdmEventPositionPortfolio';
export { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';
export { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';
export { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
export { CdmEventPositionSecurityLocateSchema } from './CdmEventPositionSecurityLocate';
export { CdmEventWorkflowCreditLimitInformationSchema } from './CdmEventWorkflowCreditLimitInformation';
export { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
export { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
export { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';
export { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';
export { CdmEventWorkflowEventInstructionSchema } from './CdmEventWorkflowEventInstruction';
export { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';
export { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';
export { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
export { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
export { CdmEventWorkflowLimitApplicableSchema } from './CdmEventWorkflowLimitApplicable';
export { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';
export { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
export { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';
export { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';
export { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
export { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
export { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
export { CdmEventWorkflowWorkflowSchema } from './CdmEventWorkflowWorkflow';
export { CdmEventWorkflowWorkflowStateSchema } from './CdmEventWorkflowWorkflowState';
export { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';
export { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';
export { CdmEventWorkflowWorkflowStepApprovalSchema } from './CdmEventWorkflowWorkflowStepApproval';
export { CdmLegaldocumentationCommonAddressForNoticesSchema } from './CdmLegaldocumentationCommonAddressForNotices';
export { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
export { CdmLegaldocumentationCommonAgreementTermsSchema } from './CdmLegaldocumentationCommonAgreementTerms';
export { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';
export { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';
export { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
export { CdmLegaldocumentationCommonContractualMatrixSchema } from './CdmLegaldocumentationCommonContractualMatrix';
export { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
export { CdmLegaldocumentationCommonContractualTermsSupplementSchema } from './CdmLegaldocumentationCommonContractualTermsSupplement';
export { CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportDocumentTermsEnum';
export { CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportProviderTermsEnum';
export { CdmLegaldocumentationCommonExecutionLocationEnumSchema } from './CdmLegaldocumentationCommonExecutionLocationEnum';
export { CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum';
export { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';
export { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
export { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
export { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';
export { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
export { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
export { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';
export { CdmLegaldocumentationCommonLegalAgreementBaseSchema } from './CdmLegaldocumentationCommonLegalAgreementBase';
export { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
export { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';
export { CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementTypeEnum';
export { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';
export { CdmLegaldocumentationCommonMatrixTermEnumSchema } from './CdmLegaldocumentationCommonMatrixTermEnum';
export { CdmLegaldocumentationCommonMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonMatrixTypeEnum';
export { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';
export { CdmLegaldocumentationCommonOtherAgreementSchema } from './CdmLegaldocumentationCommonOtherAgreement';
export { CdmLegaldocumentationCommonOtherAgreementTermsSchema } from './CdmLegaldocumentationCommonOtherAgreementTerms';
export { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
export { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
export { CdmLegaldocumentationCommonResourceTypeEnumSchema } from './CdmLegaldocumentationCommonResourceTypeEnum';
export { CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityClauseEnum';
export { CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityTermsEnum';
export { CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema } from './CdmLegaldocumentationCommonTerminationCurrencyConditionEnum';
export { CdmLegaldocumentationCommonUmbrellaAgreementSchema } from './CdmLegaldocumentationCommonUmbrellaAgreement';
export { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';
export { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';
export { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
export { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
export { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
export { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
export { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
export { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
export { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
export { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
export { CdmLegaldocumentationMasterEquityMasterConfirmationSchema } from './CdmLegaldocumentationMasterEquityMasterConfirmation';
export { CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema } from './CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018';
export { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
export { CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum';
export { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum';
export { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum';
export { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';
export { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
export { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';
export { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
export { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';
export { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
export { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
export { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
export { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';
export { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
export { CdmLegaldocumentationMasterMasterConfirmationBaseSchema } from './CdmLegaldocumentationMasterMasterConfirmationBase';
export { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
export { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
export { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';
export { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';
export { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';
export { CdmMarginScheduleStandardizedScheduleSchema } from './CdmMarginScheduleStandardizedSchedule';
export { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
export { CdmMarginScheduleStandardizedScheduleInitialMarginSchema } from './CdmMarginScheduleStandardizedScheduleInitialMargin';
export { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
export { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
export { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
export { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
export { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';
export { CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights';
export { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';
export { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
export { CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationShiftMethodEnum';
export { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
export { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
export { CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationMethodEnum';
export { CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationStyleEnum';
export { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
export { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';
export { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
export { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';
export { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
export { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
export { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
export { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
export { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
export { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
export { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
export { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
export { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
export { CdmObservableAssetCreditNotationsSchema } from './CdmObservableAssetCreditNotations';
export { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
export { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
export { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
export { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
export { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
export { CdmObservableAssetCurveSchema } from './CdmObservableAssetCurve';
export { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
export { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
export { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';
export { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
export { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';
export { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
export { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';
export { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
export { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
export { CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema } from './CdmObservableAssetFieldWithMetaInterpolationMethodEnum';
export { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
export { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';
export { CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetFieldWithMetaQuotedCurrencyPair';
export { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
export { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
export { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
export { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
export { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
export { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
export { CdmObservableAssetFroFloatingRateIndexDefinitionSchema } from './CdmObservableAssetFroFloatingRateIndexDefinition';
export { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';
export { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';
export { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
export { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
export { CdmObservableAssetFxRateSourceFixingSchema } from './CdmObservableAssetFxRateSourceFixing';
export { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';
export { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
export { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
export { CdmObservableAssetIndexBaseSchema } from './CdmObservableAssetIndexBase';
export { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';
export { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
export { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
export { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';
export { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
export { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
export { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
export { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
export { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
export { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
export { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
export { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';
export { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
export { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
export { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';
export { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
export { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';
export { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
export { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
export { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
export { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';
export { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
export { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';
export { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';
export { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';
export { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
export { CdmObservableAssetPriceCompositeSchema } from './CdmObservableAssetPriceComposite';
export { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
export { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';
export { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
export { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
export { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';
export { CdmObservableAssetPriceTypeEnumSchema } from './CdmObservableAssetPriceTypeEnum';
export { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
export { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
export { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';
export { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
export { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
export { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
export { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
export { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';
export { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
export { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
export { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';
export { CdmObservableAssetTransactedPriceSchema } from './CdmObservableAssetTransactedPrice';
export { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
export { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
export { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
export { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';
export { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';
export { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
export { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
export { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
export { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
export { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';
export { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
export { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
export { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
export { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';
export { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';
export { CdmObservableEventIndexEventConsequenceEnumSchema } from './CdmObservableEventIndexEventConsequenceEnum';
export { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
export { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
export { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
export { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';
export { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';
export { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';
export { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';
export { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
export { CdmObservableEventShareExtraordinaryEventEnumSchema } from './CdmObservableEventShareExtraordinaryEventEnum';
export { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';
export { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';
export { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
export { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';
export { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
export { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
export { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';
export { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';
export { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
export { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
export { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
export { CdmProductAssetBondReferenceSchema } from './CdmProductAssetBondReference';
export { CdmProductAssetBoundedCorrelationSchema } from './CdmProductAssetBoundedCorrelation';
export { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';
export { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';
export { CdmProductAssetCashflowRepresentationSchema } from './CdmProductAssetCashflowRepresentation';
export { CdmProductAssetCommodityPayoutSchema } from './CdmProductAssetCommodityPayout';
export { CdmProductAssetCompoundingMethodEnumSchema } from './CdmProductAssetCompoundingMethodEnum';
export { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
export { CdmProductAssetCreditDefaultPayoutSchema } from './CdmProductAssetCreditDefaultPayout';
export { CdmProductAssetCreditSeniorityEnumSchema } from './CdmProductAssetCreditSeniorityEnum';
export { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
export { CdmProductAssetDiscountingMethodSchema } from './CdmProductAssetDiscountingMethod';
export { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';
export { CdmProductAssetDividendAmountTypeEnumSchema } from './CdmProductAssetDividendAmountTypeEnum';
export { CdmProductAssetDividendCompositionEnumSchema } from './CdmProductAssetDividendCompositionEnum';
export { CdmProductAssetDividendCurrencySchema } from './CdmProductAssetDividendCurrency';
export { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';
export { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';
export { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
export { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';
export { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';
export { CdmProductAssetDividendPeriodSchema } from './CdmProductAssetDividendPeriod';
export { CdmProductAssetDividendPeriodEnumSchema } from './CdmProductAssetDividendPeriodEnum';
export { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
export { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
export { CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema } from './CdmProductAssetFieldWithMetaIndexAnnexSourceEnum';
export { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';
export { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';
export { CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema } from './CdmProductAssetFinalPrincipalExchangeCalculationEnum';
export { CdmProductAssetFixedAmountCalculationDetailsSchema } from './CdmProductAssetFixedAmountCalculationDetails';
export { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
export { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';
export { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
export { CdmProductAssetFloatingRateSchema } from './CdmProductAssetFloatingRate';
export { CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema } from './CdmProductAssetFloatingrateFloatingAmountCalculationDetails';
export { CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema } from './CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnum';
export { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
export { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';
export { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
export { CdmProductAssetFloatingRateBaseSchema } from './CdmProductAssetFloatingRateBase';
export { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
export { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
export { CdmProductAssetForeignExchangeSchema } from './CdmProductAssetForeignExchange';
export { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';
export { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
export { CdmProductAssetGeneralTermsSchema } from './CdmProductAssetGeneralTerms';
export { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
export { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';
export { CdmProductAssetInterestRatePayoutSchema } from './CdmProductAssetInterestRatePayout';
export { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';
export { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';
export { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';
export { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
export { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';
export { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
export { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
export { CdmProductAssetNonCashDividendTreatmentEnumSchema } from './CdmProductAssetNonCashDividendTreatmentEnum';
export { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
export { CdmProductAssetProtectionTermsSchema } from './CdmProductAssetProtectionTerms';
export { CdmProductAssetRateSpecificationSchema } from './CdmProductAssetRateSpecification';
export { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
export { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';
export { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
export { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';
export { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
export { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
export { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';
export { CdmProductAssetReturnTermsBaseSchema } from './CdmProductAssetReturnTermsBase';
export { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
export { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';
export { CdmProductAssetSettledEntityMatrixSchema } from './CdmProductAssetSettledEntityMatrix';
export { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
export { CdmProductAssetSpreadCalculationMethodEnumSchema } from './CdmProductAssetSpreadCalculationMethodEnum';
export { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
export { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
export { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';
export { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
export { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
export { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
export { CdmProductAssetVarianceCapFloorSchema } from './CdmProductAssetVarianceCapFloor';
export { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
export { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';
export { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';
export { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';
export { CdmProductCollateralAllCriteriaSchema } from './CdmProductCollateralAllCriteria';
export { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
export { CdmProductCollateralAnyCriteriaSchema } from './CdmProductCollateralAnyCriteria';
export { CdmProductCollateralAssetAgencyRatingSchema } from './CdmProductCollateralAssetAgencyRating';
export { CdmProductCollateralAssetCountryOfOriginSchema } from './CdmProductCollateralAssetCountryOfOrigin';
export { CdmProductCollateralAssetMaturitySchema } from './CdmProductCollateralAssetMaturity';
export { CdmProductCollateralAverageTradingVolumeSchema } from './CdmProductCollateralAverageTradingVolume';
export { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';
export { CdmProductCollateralCheckEligibilityResultSchema } from './CdmProductCollateralCheckEligibilityResult';
export { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
export { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';
export { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
export { CdmProductCollateralCollateralCriteriaBaseSchema } from './CdmProductCollateralCollateralCriteriaBase';
export { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
export { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
export { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
export { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
export { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';
export { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
export { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
export { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
export { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
export { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
export { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';
export { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';
export { CdmProductCollateralConcentrationLimitTypeEnumSchema } from './CdmProductCollateralConcentrationLimitTypeEnum';
export { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';
export { CdmProductCollateralCounterpartyOwnIssuePermittedSchema } from './CdmProductCollateralCounterpartyOwnIssuePermitted';
export { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
export { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
export { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';
export { CdmProductCollateralDistributionAndInterestPaymentSchema } from './CdmProductCollateralDistributionAndInterestPayment';
export { CdmProductCollateralDomesticCurrencyIssuedSchema } from './CdmProductCollateralDomesticCurrencyIssued';
export { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
export { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
export { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';
export { CdmProductCollateralEligibleCollateralSpecificationInstructionSchema } from './CdmProductCollateralEligibleCollateralSpecificationInstruction';
export { CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum';
export { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';
export { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';
export { CdmProductCollateralIssuerAgencyRatingSchema } from './CdmProductCollateralIssuerAgencyRating';
export { CdmProductCollateralIssuerCountryOfOriginSchema } from './CdmProductCollateralIssuerCountryOfOrigin';
export { CdmProductCollateralIssuerNameSchema } from './CdmProductCollateralIssuerName';
export { CdmProductCollateralListingExchangeSchema } from './CdmProductCollateralListingExchange';
export { CdmProductCollateralListingSectorSchema } from './CdmProductCollateralListingSector';
export { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';
export { CdmProductCollateralNegativeCriteriaSchema } from './CdmProductCollateralNegativeCriteria';
export { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';
export { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';
export { CdmProductCollateralSovereignAgencyRatingSchema } from './CdmProductCollateralSovereignAgencyRating';
export { CdmProductCollateralSpecificAssetSchema } from './CdmProductCollateralSpecificAsset';
export { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';
export { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
export { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';
export { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';
export { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
export { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';
export { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';
export { CdmProductCommonScheduleCalculationPeriodDataSchema } from './CdmProductCommonScheduleCalculationPeriodData';
export { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
export { CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema } from './CdmProductCommonScheduleDateRelativeToCalculationPeriodDates';
export { CdmProductCommonScheduleDateRelativeToPaymentDatesSchema } from './CdmProductCommonScheduleDateRelativeToPaymentDates';
export { CdmProductCommonScheduleDateRelativeToValuationDatesSchema } from './CdmProductCommonScheduleDateRelativeToValuationDates';
export { CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema } from './CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment';
export { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';
export { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';
export { CdmProductCommonScheduleInitialFixingDateSchema } from './CdmProductCommonScheduleInitialFixingDate';
export { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';
export { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';
export { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';
export { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';
export { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';
export { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
export { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
export { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';
export { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';
export { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
export { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
export { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';
export { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
export { CdmProductCommonScheduleResetDatesSchema } from './CdmProductCommonScheduleResetDates';
export { CdmProductCommonScheduleResetFrequencySchema } from './CdmProductCommonScheduleResetFrequency';
export { CdmProductCommonScheduleResetRelativeToEnumSchema } from './CdmProductCommonScheduleResetRelativeToEnum';
export { CdmProductCommonScheduleStubCalculationPeriodAmountSchema } from './CdmProductCommonScheduleStubCalculationPeriodAmount';
export { CdmProductCommonScheduleStubPeriodSchema } from './CdmProductCommonScheduleStubPeriod';
export { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';
export { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';
export { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';
export { CdmProductCommonSettlementAssetFlowBaseSchema } from './CdmProductCommonSettlementAssetFlowBase';
export { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';
export { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
export { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
export { CdmProductCommonSettlementCashSettlementTermsSchema } from './CdmProductCommonSettlementCashSettlementTerms';
export { CdmProductCommonSettlementCommodityPriceReturnTermsSchema } from './CdmProductCommonSettlementCommodityPriceReturnTerms';
export { CdmProductCommonSettlementComputedAmountSchema } from './CdmProductCommonSettlementComputedAmount';
export { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
export { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';
export { CdmProductCommonSettlementFixedPriceSchema } from './CdmProductCommonSettlementFixedPrice';
export { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';
export { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
export { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';
export { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';
export { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';
export { CdmProductCommonSettlementPayoutBaseSchema } from './CdmProductCommonSettlementPayoutBase';
export { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';
export { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';
export { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';
export { CdmProductCommonSettlementPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementPhysicalSettlementTerms';
export { CdmProductCommonSettlementPricingDatesSchema } from './CdmProductCommonSettlementPricingDates';
export { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';
export { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
export { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';
export { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';
export { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
export { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';
export { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';
export { CdmProductCommonSettlementSettlementBaseSchema } from './CdmProductCommonSettlementSettlementBase';
export { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
export { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
export { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
export { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
export { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
export { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';
export { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
export { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
export { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';
export { CdmProductTemplateAsianSchema } from './CdmProductTemplateAsian';
export { CdmProductTemplateAssetLegSchema } from './CdmProductTemplateAssetLeg';
export { CdmProductTemplateAssetPayoutSchema } from './CdmProductTemplateAssetPayout';
export { CdmProductTemplateAssetPayoutTradeTypeEnumSchema } from './CdmProductTemplateAssetPayoutTradeTypeEnum';
export { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
export { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
export { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';
export { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';
export { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
export { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
export { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
export { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
export { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
export { CdmProductTemplateCancelableProvisionAdjustedDatesSchema } from './CdmProductTemplateCancelableProvisionAdjustedDates';
export { CdmProductTemplateCancellationEventSchema } from './CdmProductTemplateCancellationEvent';
export { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
export { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';
export { CdmProductTemplateDividendTermsSchema } from './CdmProductTemplateDividendTerms';
export { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';
export { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
export { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';
export { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
export { CdmProductTemplateExerciseFeeSchema } from './CdmProductTemplateExerciseFee';
export { CdmProductTemplateExerciseFeeScheduleSchema } from './CdmProductTemplateExerciseFeeSchedule';
export { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
export { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';
export { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
export { CdmProductTemplateExerciseProcedureSchema } from './CdmProductTemplateExerciseProcedure';
export { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
export { CdmProductTemplateExpirationTimeTypeEnumSchema } from './CdmProductTemplateExpirationTimeTypeEnum';
export { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';
export { CdmProductTemplateExtendibleProvisionAdjustedDatesSchema } from './CdmProductTemplateExtendibleProvisionAdjustedDates';
export { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';
export { CdmProductTemplateFixedPricePayoutSchema } from './CdmProductTemplateFixedPricePayout';
export { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
export { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
export { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
export { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';
export { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';
export { CdmProductTemplateMarginTypeEnumSchema } from './CdmProductTemplateMarginTypeEnum';
export { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';
export { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';
export { CdmProductTemplateMultipleExerciseSchema } from './CdmProductTemplateMultipleExercise';
export { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
export { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';
export { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';
export { CdmProductTemplateOptionExerciseStyleEnumSchema } from './CdmProductTemplateOptionExerciseStyleEnum';
export { CdmProductTemplateOptionFeatureSchema } from './CdmProductTemplateOptionFeature';
export { CdmProductTemplateOptionPayoutSchema } from './CdmProductTemplateOptionPayout';
export { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';
export { CdmProductTemplateOptionTypeEnumSchema } from './CdmProductTemplateOptionTypeEnum';
export { CdmProductTemplatePartialExerciseSchema } from './CdmProductTemplatePartialExercise';
export { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
export { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';
export { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
export { CdmProductTemplatePerformancePayoutSchema } from './CdmProductTemplatePerformancePayout';
export { CdmProductTemplatePortfolioReturnTermsSchema } from './CdmProductTemplatePortfolioReturnTerms';
export { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';
export { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
export { CdmProductTemplateRepoDurationEnumSchema } from './CdmProductTemplateRepoDurationEnum';
export { CdmProductTemplateReturnTermsSchema } from './CdmProductTemplateReturnTerms';
export { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';
export { CdmProductTemplateSettlementPayoutSchema } from './CdmProductTemplateSettlementPayout';
export { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';
export { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';
export { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';
export { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';
export { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';
export { CdmProductTemplateTradableProductSchema } from './CdmProductTemplateTradableProduct';
export { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';
export { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';
export { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';
export { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';
export { CdmRegulationAddtlAttrbtsSchema } from './CdmRegulationAddtlAttrbts';
export { CdmRegulationBuyrSchema } from './CdmRegulationBuyr';
export { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
export { CdmRegulationDocumentSchema } from './CdmRegulationDocument';
export { CdmRegulationExctgPrsnSchema } from './CdmRegulationExctgPrsn';
export { CdmRegulationFinInstrmSchema } from './CdmRegulationFinInstrm';
export { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
export { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';
export { CdmRegulationIdSchema } from './CdmRegulationId';
export { CdmRegulationIndxSchema } from './CdmRegulationIndx';
export { CdmRegulationInvstmtDcsnPrsnSchema } from './CdmRegulationInvstmtDcsnPrsn';
export { CdmRegulationNewSchema } from './CdmRegulationNew';
export { CdmRegulationNmSchema } from './CdmRegulationNm';
export { CdmRegulationOrdrTrnsmssnSchema } from './CdmRegulationOrdrTrnsmssn';
export { CdmRegulationOthrSchema } from './CdmRegulationOthr';
export { CdmRegulationPricSchema } from './CdmRegulationPric';
export { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';
export { CdmRegulationQtySchema } from './CdmRegulationQty';
export { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
export { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';
export { CdmRegulationSellrSchema } from './CdmRegulationSellr';
export { CdmRegulationSnglSchema } from './CdmRegulationSngl';
export { CdmRegulationSwpSchema } from './CdmRegulationSwp';
export { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
export { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';
export { CdmRegulationTermSchema } from './CdmRegulationTerm';
export { CdmRegulationTxSchema } from './CdmRegulationTx';
export { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';
export { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
export { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';
export { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';
export { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';
export { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export const schemas: Record<string, ZodTypeAny> = {
  J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD:
    CdmBaseDatetimeAdjustableDateSchema,
  ATwFe4A6KM2pwcq5ezVugmeREzNVytoPxpU4UgV8Nhdt:
    CdmBaseDatetimeAdjustableDatesSchema,
  '54eGVvFUpXJeDaqftgjfjb6rDLjcf7H3U88rMPXfzfQt':
    CdmBaseDatetimeAdjustableOrAdjustedDateSchema,
  EsGmKpSwEv5rrzVy75nUtg6sXKYHCmZRDzkGMYyQ7zhX:
    CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema,
  GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29:
    CdmBaseDatetimeAdjustableOrRelativeDateSchema,
  '9V8dVXLUmzyBUtMoSeANJ5YvW4XpFBRyrLAUa8aaKbtu':
    CdmBaseDatetimeAdjustableOrRelativeDatesSchema,
  A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs:
    CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema,
  '3F5SJZugXTpBEsr5jpbKnam1yzQE7tb7m7ULNAqRK1TT':
    CdmBaseDatetimeAdjustedRelativeDateOffsetSchema,
  hjVS7GrE9QqNFk61XTvTkP6ktQxzv96UUaGK74mg9YK:
    CdmBaseDatetimeAveragingScheduleSchema,
  Gpw3zDUDENr9thYruxb1S1firzfQSgHYJs5W3zaBbAzN:
    CdmBaseDatetimeBusinessCenterEnumSchema,
  Ds5a9bChKossVgHEM7Z2TQTCxDXdB2SZhtM9v9Y3mYmM:
    CdmBaseDatetimeBusinessCentersSchema,
  '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X':
    CdmBaseDatetimeBusinessCenterTimeSchema,
  D1kyjGPDqfudDfHp8GJJEwf5zvF3oA4XbQZnkCU6zpTx:
    CdmBaseDatetimeBusinessDateRangeSchema,
  AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz:
    CdmBaseDatetimeBusinessDayAdjustmentsSchema,
  '4nDV142exufoEvXv8wAPT7GVTpvQw7t3yETBpT9G6aWX':
    CdmBaseDatetimeBusinessDayConventionEnumSchema,
  '4F94gXYj4FFU12dFg6mKFxiAkiH6xjK8Fidg91K3kXaS':
    CdmBaseDatetimeCalculationFrequencySchema,
  '9F3YEUELa9MSY4ykUnh7PrK9r3EBLoFcHS5v18N9rRrb':
    CdmBaseDatetimeCalculationPeriodFrequencySchema,
  DcdNVPHaDXp3kB4voaW5oMavXyuKPnVfULcMDUkQXoZa:
    CdmBaseDatetimeCommodityBusinessCalendarEnumSchema,
  AdYxmwMLQx4hWKa8Fggt5X4iX1ww5YD2xAy4ij5FccFt:
    CdmBaseDatetimeCompoundingTypeEnumSchema,
  Ao9tm3BNPBdjPWu1djmdXcVU9u7MakAdbDXzqF5qvm72:
    CdmBaseDatetimeCustomisableOffsetSchema,
  '7dJA2x6vQbptJj6JY19SNAepGDTYYauAobPJ5nGTi5GV': CdmBaseDatetimeDateListSchema,
  d8TGYi33YeLUziE9B2VNLCjsoPfUQkCX35im7Ryuia9: CdmBaseDatetimeDateRangeSchema,
  pyxT9DcFhciMsTbfdSBW4nzkWrgN85S2H95X4k21814:
    CdmBaseDatetimeDateTimeListSchema,
  '7rLpateRXSy3RdPsPEUcip227zNh4gMbVPQ1GuqDksDz':
    CdmBaseDatetimeDaycountDayCountFractionEnumSchema,
  HQvDRU2HRkECU2uHD3Ej7VhhyWVYzBxPs79CZfFYccWc:
    CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema,
  DmhfCUUAaa5kZ8Qsom8VwEsMN3qmGWaJX1pGtUCfbqRQ:
    CdmBaseDatetimeDayOfWeekEnumSchema,
  '7SsDfFvRbfxrm8vS98NZ5Vq9nqD3CFNGWsLr6dc738LJ':
    CdmBaseDatetimeDayTypeEnumSchema,
  '5kncd2YXvmwkRzZPfFr5Ji5fZfkk9WoNmLNAkjcvS9cD':
    CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema,
  HLumy3ihw3YkMVGzNShUKY7ZWZCb7A9yMvGDoaLMqboa:
    CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema,
  '6XsZzNy8iHgmk7eDnmTPs7QFCthawsNg96517G4uThjP':
    CdmBaseDatetimeFieldWithMetaTimeZoneSchema,
  '2DcHFUdmvnUmoKpU2Ams5asKp2FjTWgEDMMrEiZUL3Bi':
    CdmBaseDatetimeFrequencySchema,
  EEy3XcQkPgCWJbBTZ5xCt324t2pFRJU6q9odJm19McMd:
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema,
  F2nvaUqNbFKSuzYyyhRM8m7PgfFhFvkDbejeQWX9jYCs:
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema,
  '7ACnecbuWHtBLYhrw8BaioS3DSUQFiDskjpaDNspEmof':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema,
  '8ob5XfEjggmQWCgVGZrrfihRpPpUr2yZ4MepyJHJvZ4C':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema,
  GWTMGPw1zgQW3M9NUS6RxNtce5jWU9defVNkm7sV6b8L: CdmBaseDatetimeOffsetSchema,
  '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL': CdmBaseDatetimePeriodSchema,
  HFJi2qNRTWh7ojwQLw3n3cdRMAvHwYP2Q9saLfzzYzDL:
    CdmBaseDatetimePeriodBoundSchema,
  HfcnjKnwmrE8GwTjvmvtKtcYgCZHWwe9PpsaJ5Y38Y2F: CdmBaseDatetimePeriodEnumSchema,
  '8g5Z7Xf3wFDD2QY1rGqmTjeY7EvWWEsxUiKyX6UbH8kp':
    CdmBaseDatetimePeriodExtendedEnumSchema,
  BzeLMQ2szfXctEZbXkHo6YK8X9oAyGG7RMSQ8DefBrFB:
    CdmBaseDatetimePeriodicDatesSchema,
  EUV3MXvt1cQxvRAWp3LAhhkTsfKr9aw5WA86WgqgWQZZ:
    CdmBaseDatetimePeriodRangeSchema,
  '2HMMgCWL1VJZ8jCH6hQYwRNNJKqCEbWUC4mgEUteMWp6':
    CdmBaseDatetimePeriodTimeEnumSchema,
  '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD':
    CdmBaseDatetimeRelativeDateOffsetSchema,
  EKfLs9rHaB8brKCyK3GJJ921tVXYtjAM9Err32UYpwXp:
    CdmBaseDatetimeRelativeDatesSchema,
  GxfgSxqafB73DXXwjJx4sXU3P96NoGFSnDx7p4Z9L14d:
    CdmBaseDatetimeRollConventionEnumSchema,
  '5uKXCGmozs8beHQLK5giHsJTcGD627CoqZ66K9g4ovMs':
    CdmBaseDatetimeRoundingFrequencyEnumSchema,
  '3PDh1DduaXVYt5s24M7YRANf1EfT3dES6f2RNp4KmAco':
    CdmBaseDatetimeTimeUnitEnumSchema,
  '3jiEy2e5MqwFVX3zkALqRNFaBpD4DawUCg1iYwfFzeca': CdmBaseDatetimeTimeZoneSchema,
  '5LqvSmiKbHfda3hZ4PJPNrsBm6612qKucN15UXbStsiT':
    CdmBaseMathArithmeticOperationEnumSchema,
  DGXpeuMHKQid6AVaxTWqMtdjUToyiyct3kFynh4rLqD9:
    CdmBaseMathAveragingCalculationMethodSchema,
  '518mz1k7ayS8Y3S4y9HauLqAQMigdB4Vf2r7XcVSwyuJ':
    CdmBaseMathAveragingCalculationMethodEnumSchema,
  '6f9mS8kB4QzF8v95vULVoewQvA8tBCcP6GoaUJg45Lh2':
    CdmBaseMathAveragingWeightingMethodEnumSchema,
  CWSVzp2Q44fquiPqREdwPG58ajzi9BWEUvtYAMNDyDaM:
    CdmBaseMathCapacityUnitEnumSchema,
  Hc6iLuuL3torLMTHyhY8LniLgM4VL7juEWmsbduTjr2Z: CdmBaseMathCompareOpSchema,
  '9QEEP3vJftxGgridJuAvcaKfZusGZVsywkfLzikwpM28': CdmBaseMathDatedValueSchema,
  FCaGFiACv9gh7BbLiPZYLCDttHSuo2J6u9uyRkQbxeSw:
    CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema,
  AxHcVRBDxjXQY57tQ5knQnqx4FdzRH13qTi6mskXeL5x:
    CdmBaseMathFinancialUnitEnumSchema,
  BQGvnTvpdbYnYYXrRjjpaTUrhXi5BJCkm9uXfSSjQ6Ve: CdmBaseMathMeasureSchema,
  '5KinhVtR3ea8RNSGWHbur4fEos6Bk4w7H1D3saRXnHjv': CdmBaseMathMeasureBaseSchema,
  '5utthLU8Mr2FitcPwk5JeRKD95mzu6Bk5QMCgdWT4jBN':
    CdmBaseMathMeasureScheduleSchema,
  '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP':
    CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema,
  '3kt6kBZd9TBHLb5rrsxt5zNTNVawoWNePPe6RGF33u45': CdmBaseMathMoneyBoundSchema,
  '6WetAg7Ko4txMKh764i61AvQ2oLaKaE6jziPc41xnwk': CdmBaseMathMoneyRangeSchema,
  '6jhJaMEanZrm8mpgb8YxWqCNs2c2UY9AoQigsG7hoNgw':
    CdmBaseMathNonNegativeQuantitySchema,
  DABeUA2VSfKoewn5RTb24nVAxHReN4yfRq2Ud8chTJq2:
    CdmBaseMathNonNegativeQuantityScheduleSchema,
  '6semmaRGbbwZi3WuvBjGtUDnUF52hRjzYmrBnaSzyuBQ':
    CdmBaseMathNonNegativeStepSchema,
  GNwk3nidjLwe1LhWBtBPRxoTtHf6cFhxWBE77ggP8XnL: CdmBaseMathNumberBoundSchema,
  '9tDrYvj29RS5Aj9BBJaXuZoNwTtiuZ5wRRCX8QwC3Q3i': CdmBaseMathNumberRangeSchema,
  '9rM943Zxj8XaBwwWtrihnmzqSxuoYsj5tqms4JHHt3AG':
    CdmBaseMathQuantifierEnumSchema,
  AdJnZG9c8KBZpbUXw47UmJ1yNJN4AK3q9P9aMJjaKanN: CdmBaseMathQuantitySchema,
  '99pdBM1fnVJLa2mfpj5KYGRAJzC1KXhBkbDnVsRWsZyb':
    CdmBaseMathQuantityChangeDirectionEnumSchema,
  GpiFokDnc4GEn39j9APMXcdDLtcBkZL66nRtL26Wzs2z:
    CdmBaseMathQuantityScheduleSchema,
  '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv': CdmBaseMathRoundingSchema,
  H4FAiqzdtZUhJfTdaLDLQxZR4hvCAduUrJec1nziCJCX:
    CdmBaseMathRoundingDirectionEnumSchema,
  '2pABT8TqsSJ1WZL8476XyUDYXnvKnp4GHU81wcThAVih':
    CdmBaseMathRoundingModeEnumSchema,
  '8swA6F2F6KHLgYRCBDKkg2HyrhQ2D7iumy7C99QJfKLy': CdmBaseMathScheduleSchema,
  '7qE4tr7jZifDuYrWwGZeTpRV1CFde8FZtHmFepTZ1t8F': CdmBaseMathUnitTypeSchema,
  '3RrCehQPhj94WCGJynzHZHuGPw5Vr6EeghnSE82NtFS6':
    CdmBaseMathWeatherUnitEnumSchema,
  '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q':
    CdmBaseStaticdataAssetCommonAssetSchema,
  H9pDXmUWKGAZeqq82hKK6hAodRKSD6TnPWGmzfht2Hkf:
    CdmBaseStaticdataAssetCommonAssetBaseSchema,
  '9yX6LE16R3vAK1CLiZg1CNCKs1R2z61AM6mkBEyi4wHf':
    CdmBaseStaticdataAssetCommonAssetClassEnumSchema,
  '4oFH9vehkWBHWWKWKPEPwytqoRKUA6mcVgrG7P1XtKRy':
    CdmBaseStaticdataAssetCommonAssetIdentifierSchema,
  DPpK6uSzRAk9eCFgyAjjWcEV4wMhTwxKHWRWiuXQqBQs:
    CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema,
  GYosLnxXxsEormFDHeohsEEMxPt7FWvEs89hCYk6UHXA:
    CdmBaseStaticdataAssetCommonAssetTypeSchema,
  '2ooSGfiQjuRvoogDtvMSjAoYBUtjFfAMekySyiXeH169':
    CdmBaseStaticdataAssetCommonAssetTypeEnumSchema,
  Fp8kieXrgB8GUChsCNFFLB9bbPSRfh2sua3aPiz8Zp5u:
    CdmBaseStaticdataAssetCommonCashSchema,
  '7NdxcUK32ve5yCHHJmMNTHsGHDYoGXvWiqPz9bQy5rbU':
    CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema,
  FvdbebgpWA3amq8WXUvqvKk1C95zhGYeBgcoZJGkkzEf:
    CdmBaseStaticdataAssetCommonCollateralTaxonomySchema,
  '3chJA3JUhKMfsju92nTnCs3wWtJd6BYH3uArkShihsPu':
    CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema,
  EMvkMQtTjt6kMvmoGwHz3VA8mzvuVNoPmcesVmG15Bui:
    CdmBaseStaticdataAssetCommonCommoditySchema,
  '4e4FSGJ6asiKeNv6j7PQBXz5HJEsr8DyqodHRGy2WSYj':
    CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema,
  '8wK6VDkJie5sBU85QpSedgsbetMvF1i1mUeEonKTT3Ur':
    CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema,
  AFMZa2hViXkmuEYd3tzHVx5sJAXHE2RH9Drcb1MV7xxa:
    CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema,
  '6LHAyF8TNkRmDZfw7dYCYVqgav2Ayj1tgcMncSXLkzVE':
    CdmBaseStaticdataAssetCommonCreditRiskEnumSchema,
  FhPnZj2GHsVFKjpG7XMywvjaX6i39gczdhSKJsMHyiEJ:
    CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema,
  '4VRXi2887ftZek9ZcqPyH1JmkREkDMm1UgMdE9Jghgur':
    CdmBaseStaticdataAssetCommonDebtClassEnumSchema,
  '7zaJEZ9NefFZk4CeyVPKCqRnx3UJruPMysi4hejrpUit':
    CdmBaseStaticdataAssetCommonDebtEconomicsSchema,
  ABWJdWCyzqLnaaGxRmBVDvKESHeps7uTHXPreA7Ki6WC:
    CdmBaseStaticdataAssetCommonDebtInterestEnumSchema,
  '6QJ9VwESPyRj4k8DnDFtvDTmqHcX6P3tTKqXTdEJqiXb':
    CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema,
  CmJXdH7HwBcN8C6x55jb2XfMQpNkC5PTXYTkLaejGQPm:
    CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema,
  '6unwaZ5oN6Bu5iNr9srEotBvRczagJYM6Dob6AfjsYhP':
    CdmBaseStaticdataAssetCommonDebtTypeSchema,
  EsztH2tDcpvYsxVwxWNZw6yfk9urbBinY5wg1uQidSwa:
    CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema,
  '2GyZQsL3jJbehh1yGGXeSt9FXraNFBEYGPd2TTyVpZio':
    CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema,
  '9EtbWfrbv5eGk2HbMkGnnhU42gPKFB8rYd5pZyt23UZQ':
    CdmBaseStaticdataAssetCommonDigitalAssetSchema,
  HoXHzdjP8HF4D5i1bFfyUQk6jiaxNMCFBYEZfUuNdLR5:
    CdmBaseStaticdataAssetCommonEquityTypeEnumSchema,
  '7YY6BuPWV5huqtQC8znxT9BwZTTGbLdCwHjJC6KszkAk':
    CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema,
  '5mfLv2DSeGxRwoQ5jPNZ9twryK766ap4Tm2cJZs8iMKL':
    CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema,
  DSHVccfaB84HdmUWNumGMEdFG9xvr7m5qAJSTVv2R81X:
    CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema,
  C1eJzacRV3YdWTiLScoqLS2Uv4KC4MEWVfb1ux4P9CeV:
    CdmBaseStaticdataAssetCommonInstrumentSchema,
  AUuFyQJMfctAayPGZdT1qgKHLs9RNCEYnZDabrjRUS7V:
    CdmBaseStaticdataAssetCommonInstrumentBaseSchema,
  '3tHNfJC2pEoNbjbkmKcBDiJFzKcUCcyi6jtqtPntYyFw':
    CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema,
  mfnU3a3EHham9Ji56wc4EzqkHqrWpTpWuwvp9bK3DJB:
    CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema,
  FT5tBAKn9DXtqB8b3RBnfGbCmrR7AbNHSSbCxCWRBqcq:
    CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema,
  EK6fu2Rrbrhva6gTHnTiDRDC2CYZESN7KREx5HCcRqP:
    CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema,
  '374XEfVvwdki4wSaK8zoqVicXwvUWGi9mb98FL49MgYd':
    CdmBaseStaticdataAssetCommonListedDerivativeSchema,
  '7Zg8UpGuEWYf4C37rRkZ2wK1qdAiHaebivQNjduH4Qd2':
    CdmBaseStaticdataAssetCommonLoanSchema,
  CgKgs5vpdFaJFjy1u1TBDhrDdp4FwcSbgLFqy7arvU9d:
    CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema,
  DfJLBeMDS4RDbatGWGuKwFqk7H9zBH9kHoYftNLYHECG:
    CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema,
  '6ndw1qraVosKGtrHUyCSNZ4yHpydKg4aKVNdbEEZfoMd':
    CdmBaseStaticdataAssetCommonPriceSourceSchema,
  FnPPihH443SKbNrwapeK3w4TS3YG23ns1dkQMnVkD5fp:
    CdmBaseStaticdataAssetCommonProductIdentifierSchema,
  HbfxwN6HWKa7Na2KKhwUNb3q2x3YJi6VaC29NcUEsdSB:
    CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema,
  zhu6Vg1U6muAYReiYsG2Xh1wrN4VDaeeREHBY7A8wtc:
    CdmBaseStaticdataAssetCommonProductTaxonomySchema,
  '3tmyFCaH2M2QEYvbreiGpAew7ngMHi5nHeRGv5poixAQ':
    CdmBaseStaticdataAssetCommonPutCallEnumSchema,
  '9m8CYJDTZHcV56FCNhnhqfrt3YNP7NHcQ5zYfuXUm9Yu':
    CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema,
  '8Hy8aJbbNdada5rvv2j1DRU4Ejtk1PdC6pEejkJ6D8kF':
    CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema,
  GRccc39hoCxirVd5AgYHyNZT6TtiBJj8USkFUA6nQcfG:
    CdmBaseStaticdataAssetCommonSecuritySchema,
  AeyCCHQJ9iUm1oez85sYSUiHbzdzodJZpU9ZNNhcqiFi:
    CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema,
  '5ZQJRbHs1sigSChqUCynDn3BTCeQbqJaiLpXEKJRp3w':
    CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema,
  GXDxn2HwbWwWg9AFSHwfSi4zZ32a3uVojNQmBN96DUvU:
    CdmBaseStaticdataAssetCommonTaxonomySchema,
  '5c9nkt7FnTm6eNWkunPNWokAVLeHpwmv6jscyf5pZYh9':
    CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema,
  DG2puP5kaTQTAW5sZ3dgpiPgy8Kg3yzoTseUHSGxqXmF:
    CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema,
  MxGjg9eCvZAeeJuareEGCcaduKPsjTuJeLMxem8MMJv:
    CdmBaseStaticdataAssetCommonTaxonomyValueSchema,
  QgrD8EkRPpuS8k3t8qTgcZexsamLyPMKBV9yb67CtLD:
    CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema,
  qgqfFbzy8ZMENxSvE1EQmUCDCAJq3vFPckR3afAC5fa:
    CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema,
  CfJhnmWCGJsuGKjrniD86MnqeEFDzMSQVu1kFMkHEggE:
    CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema,
  '479q1woparEWTtykQD81K2mKFboBtTz3iWRBsUyQNweX':
    CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema,
  Fhygqn6wLzFHq9CDFq6gXopxQmBTRFN6tmFdDsBn1Teg:
    CdmBaseStaticdataAssetCreditObligationsSchema,
  Hm8WzZ2vt1scZRpgZ9XjxKEcvsf2oXa8icw3PC9JPL2C:
    CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema,
  '9MWTLbKLsUSiaShABSSuHxaeJZ2aErzYPTqc28XefGr3':
    CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema,
  '61xQu3uRJ2Kq3tAXAVBoPoYJBAhKJGfMcRQEbAYqegp4':
    CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema,
  vMjyu6sbtgT7FA6GScxrp32Njg3k9oW6KxuXLU9RYHx:
    CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema,
  CEwZn6n44gVtUvBiBySA3E3WEwtA9yRuhHubY2RHd8d9:
    CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema,
  FkMWf1pd7YUm7zUWH64xW6YKJEWnWCzUoCiDxJWMWd2U:
    CdmBaseStaticdataIdentifierAssignedIdentifierSchema,
  '7dLLgnD4PFY6GgCdfDEzYK7BV9sYLkMTPmWqn2RvBHuV':
    CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema,
  '6qRBmHGpanZLqon5ADoUepYe9Cb8ddGJqU4tQKaj2ugi':
    CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema,
  '9KV48b6Fb2r3WJ1DyeqrYTjD1WUuExEj2cDwLdCGQHmu':
    CdmBaseStaticdataIdentifierIdentifiedListSchema,
  '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7':
    CdmBaseStaticdataIdentifierIdentifierSchema,
  '3ozegEWX22qBx9Ne96bvMirXcEA9bBRnr9EK6ibv7Jrf':
    CdmBaseStaticdataIdentifierLocationIdentifierSchema,
  FNeBLo1sQ7hp52M9UHnepcizEyD5BNf1S9y1z3f4hE11:
    CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema,
  Ci7ty5zffGzjgsQdhnezMazESuasmjVRABXcDJanwgLf:
    CdmBaseStaticdataPartyAccountSchema,
  HNVs55CfkQeYQBVum1H6fRtFYkYbVzc7dCGEYH3y5sfp:
    CdmBaseStaticdataPartyAccountTypeEnumSchema,
  '8QX9Mbix2tC4kxbpLrBPKAiRT3VePTJKerY8aff9tAD7':
    CdmBaseStaticdataPartyAddressSchema,
  AniuudoFrqXC96kiXErKBTZ1XAAk4nToRuineDTK6ppZ:
    CdmBaseStaticdataPartyAncillaryEntitySchema,
  '4iPHY4aygMFyDNb5teEsJeb7EyeK3CitfuP7DqfgnT1w':
    CdmBaseStaticdataPartyAncillaryPartySchema,
  '5UenXSd178j4ogWvtPBmvmYtMB2vnBUbSZpAKNkbGcuf':
    CdmBaseStaticdataPartyAncillaryRoleEnumSchema,
  EMjJhiDkKtnd6Xy5ATKZRxxn7miYV6i9qRKmbwi8PePK:
    CdmBaseStaticdataPartyBusinessUnitSchema,
  FJAP5z7vAscmEbjahmsTGxsBhr4mK2GAQkcC8bjM6AEf:
    CdmBaseStaticdataPartyBuyerSellerSchema,
  AWye6DehLS3vyWXet8adWpUZ8kLZYQCWMkCgEK9CoRSR:
    CdmBaseStaticdataPartyContactInformationSchema,
  '57Lwnif22McYRjgDzSyRZTsqY1Ac9LMSJcJ9KRXKiE6w':
    CdmBaseStaticdataPartyCounterpartySchema,
  '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw':
    CdmBaseStaticdataPartyCounterpartyRoleEnumSchema,
  '3fj5ZpreFrbsrc6yVWgKW85nno6XniWyJ3CkTfCoUEPk':
    CdmBaseStaticdataPartyEntityTypeEnumSchema,
  '4y8bsqThvmVPYmjEC7ZEas42LGtsKtTBQvYdVYsdGGMB':
    CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema,
  wP5A25jxQQthEaNAwp6AqdinowuQfr7uwkkRPxUX9P9:
    CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema,
  HcZAF2MZ9WCaRxSvbnwNrsUbjiQfnvheFFUVuxRyVqQG:
    CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema,
  AG9Tj8KSzAxFp8kXUogfAmWG8bandq6BE1o5iVxrvc3o:
    CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema,
  J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y:
    CdmBaseStaticdataPartyLegalEntitySchema,
  HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema,
  '2y5oTswWqzzAdz3YW657fXdmY8ENhbHAEWBxJwfmi5f3':
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema,
  AqRajqKToreHabAHCgT66Zc87qk24EdQSawSThmGb9Eu:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema,
  Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema,
  C3NyCURgLaHrTtjTpfDUYJnBfR1HhhpQmNSowonp7YHH:
    CdmBaseStaticdataPartyNaturalPersonSchema,
  GZevPGzamzSxh8yoRnX4ADVPupYmtwh9tYQvwURzxjmZ:
    CdmBaseStaticdataPartyNaturalPersonRoleSchema,
  '4YDv7wz1byKMYqB3FrNK86Sa3ZHPr1PqHrYRhQYzuYLu':
    CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema,
  DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd:
    CdmBaseStaticdataPartyPartySchema,
  EdgTekD4DSaAbY5B22rL1ks9aiMeJD37ywSxekUgteNf:
    CdmBaseStaticdataPartyPartyContactInformationSchema,
  AGa4xDzohuMeonuvvfPSohH7tmSdN59ng4Gm6V1AQJmm:
    CdmBaseStaticdataPartyPartyIdentifierSchema,
  HF2iBeqVB9K52LiqMfKwUtdriqmD7BQiewBjXBWpF763:
    CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema,
  '63Bw1Ena6g9zgLcVwPkkpApxNVecQwz8Ygi9rZZFYMoB':
    CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema,
  '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz':
    CdmBaseStaticdataPartyPartyRoleSchema,
  GaVQx77bWVG9DoP6sEfKJFggBPtqn5A3tsZSpn3avRUv:
    CdmBaseStaticdataPartyPartyRoleEnumSchema,
  JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn:
    CdmBaseStaticdataPartyPayerReceiverSchema,
  '6SkJg8pab5GVfz2xgkk28fvdNU2iQBgrKksnGCuFMJZw':
    CdmBaseStaticdataPartyPayerReceiverEnumSchema,
  GLGoPWSXSVwwF1ZNthMK3sQr3Fdsg6mr1Q1o8Ge26wQK:
    CdmBaseStaticdataPartyPersonIdentifierSchema,
  BEj7NeQ1KmrSoRpwdQvBz69ovp9genXGJ6mpLGXYYwHz:
    CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema,
  HCxtaayTkzuVfS1fw2tUcTEYqdzrqTdQWWMc9HnnNmjF:
    CdmBaseStaticdataPartyReferenceBankSchema,
  '3wSM3JHGBWwYNUcoh9WgxXG2BVYLr6NuB9HZBrH9kSRx':
    CdmBaseStaticdataPartyReferenceBanksSchema,
  '8by4qiTXS4w5iqFvkoPkRQtXZauocve3KX1QvEvK4oTD':
    CdmBaseStaticdataPartyRelatedPartySchema,
  CeKrYKeSQpN1Zz5XRY4kufruqx7W43H5TYXFKMsoKdig:
    CdmBaseStaticdataPartyTelephoneNumberSchema,
  Gjzzg7PBbugT3zqFsvPRRRJ46MBHxAm69jQ3KWMBySyg:
    CdmBaseStaticdataPartyTelephoneTypeEnumSchema,
  GfTPwAq9qf8LsrvvH2PED6R92Rtsa1SbCnqdxkjhMYFQ: CdmEventCommonActionEnumSchema,
  '4Wd8bXojQfj3GQ28GX4iRH4aG9tPPF3zUmKoTACQJDLD':
    CdmEventCommonAffirmationStatusEnumSchema,
  HAZL9GHyV8KpvUi1DDC5SiwH45vupWztyPfPWjUpwM8Q:
    CdmEventCommonAssetTransferTypeEnumSchema,
  CVJhqgbkEPcvXq5RgT33yk5dETC9zESGCb564SfyXJKp:
    CdmEventCommonBillingInstructionSchema,
  HC7vpNX6HuCaSUFftb4rqporkfy3yH1WszW793XKYCmB:
    CdmEventCommonBillingRecordSchema,
  '6BEYjg3hgMPAoG6R5b4noEX1cgoYGnB5hP5TyUvAea9c':
    CdmEventCommonBillingRecordInstructionSchema,
  '5JQz9gQGhNz24NGJKaxuHWqf2RvutiRvHzTTKMJC1Apq':
    CdmEventCommonBillingSummarySchema,
  CYWyA3J6C6K1kYmq7XS3yn53zSDpjC9s1btA4kqasv99:
    CdmEventCommonBillingSummaryInstructionSchema,
  '2mPyPCMLGUH8LTsXeCx7sE8MoUkyjXsN5wHNZkzNvgXC':
    CdmEventCommonBusinessEventSchema,
  BajrGP97MgFpRoxAkDfYj29qii9nrHVb4KsTsY9GVHTN:
    CdmEventCommonCalculateTransferInstructionSchema,
  D5Ppw22Ncf5BZ67R91WVaBbQk2BKWA17SAGFY3WkBuTu:
    CdmEventCommonCallTypeEnumSchema,
  '21jmdMR7HaspF6oXoenQHZCeBM8PnL9b2XYAVnnAHmR2':
    CdmEventCommonClearingInstructionSchema,
  EieQtheGsK5EDQsjN2wqUyWn5LaLYdtjXBotd8LVH7ZT:
    CdmEventCommonCollateralBalanceSchema,
  DD6SXCCQCKYncxiCJTHY5DMeMzUABfVrbSLGfTsJFUnG:
    CdmEventCommonCollateralPortfolioSchema,
  GtabA8b7typ1gjwtAYshA1eaECFCwLWHkBauTVQ8PMpV:
    CdmEventCommonCollateralPositionSchema,
  '6ctehAVhDiuTwXfG2zzPiqjPq4Chs91k7cZy6gJecUMe':
    CdmEventCommonCollateralStatusEnumSchema,
  D5DScSMXzdcDxteHrSVTqs8htBxhRxrZEsascuiywegN:
    CdmEventCommonConfirmationStatusEnumSchema,
  BXgG7tSKyVPTPd3ka1B5M5ZoyxvrmzK9sqFZJ5MXrvUk:
    CdmEventCommonContractDetailsSchema,
  '546aMZAyxXdgjEPuMu3YUsj7XmDoKWbTDSEY5u5p61ro':
    CdmEventCommonContractFormationInstructionSchema,
  '8rrtQ7ufVFwqvtNre8bZWFUCfVmJgwVYWwZNj5N1aetV':
    CdmEventCommonCorporateActionSchema,
  '8CunnBK9d9T4uuangx5iLWyAisgbJvXeXi25J7Z91ZC8':
    CdmEventCommonCorporateActionTypeEnumSchema,
  '6crPYSSUWEcDZ3RkdT8acaFQUW3W3Ly2kdiaX8dpynAw':
    CdmEventCommonCounterpartyPositionBusinessEventSchema,
  '4tpXkdbpBbfUzL8toS39njzStjudoXZ7fjoQGSJyD2K9':
    CdmEventCommonCounterpartyPositionStateSchema,
  FQXirnKbUqf5LGWer2bQPVsYT4EWyAvu51iBJLTDfVi4: CdmEventCommonCreditEventSchema,
  FFZsUQAJXY5cKNYpscUwkrsBEYy2tgseBex1wqNcaERv:
    CdmEventCommonCreditEventTypeEnumSchema,
  EDVtfDGYSJkUsQf4rgXBS44jiKV8LX2FxQCPY4RReb2N:
    CdmEventCommonEventIntentEnumSchema,
  GXAR1SUGjpvZsUZvh3feCdkEXnfGS76pgRRAwtrV4BAA:
    CdmEventCommonExecutionDetailsSchema,
  iKWVhz4swWfyuK3k2MWZpyFFUMr2WXkRPbaa4LviTYT:
    CdmEventCommonExecutionInstructionSchema,
  '4mQsL7gRkfuFjMThjus8p2hZu4HkKCynkES1Y63Ykmib':
    CdmEventCommonExecutionTypeEnumSchema,
  FxLTZpqx2ynKpEgQNpgo6Y4fzhHv1XfSF148Rxn7cLKW:
    CdmEventCommonExerciseEventSchema,
  '4CbQ8TBSptAuoovUmWPoYLPUFd5YV6vbnByMeq8La9rw#0':
    CdmEventCommonExerciseInstructionSchema,
  '4gXoZRAbLX6gJEgr6opmSqSK2Z7PtT3Z1n3fDKYHRV2y': CdmEventCommonExposureSchema,
  '7jzEk39QMqbmzpmZF3CL3GVht2Z2MUCgbVA9Xjjcwirk':
    CdmEventCommonHaircutIndicatorEnumSchema,
  '4MJ3haV2vNrNghMTk6wPRL49xz75XJHepZqBRHzVHRZx':
    CdmEventCommonIndexTransitionInstructionSchema,
  '2urM8YidHJgh8XiXzndxTChPWv9jF8cYEEK55a4K8jMH':
    CdmEventCommonInstructionSchema,
  CBw86pyShiido34JxzYz9yKE2ze1oSUpCP73LxiiHFhJ:
    CdmEventCommonInstructionFunctionEnumSchema,
  '8F2a2dkMM98d7KGUagPkBdhXVErYpJBwveTH1UGZo57N': CdmEventCommonLineageSchema,
  Dy79m3owCNn7dpCvsFfY1sEPZJQ48TPExyAXJVFD8Wdf:
    CdmEventCommonMarginCallActionEnumSchema,
  GMfgFMT8sTw8oKyaiaYzmYWMxPNx3GoEeSEZ6rjSVFKK:
    CdmEventCommonMarginCallBaseSchema,
  '8F5tzDJeHVMjn1AsyLLfL6a8zuQzwzNmqCwPSk6ympdk#0':
    CdmEventCommonMarginCallExposureSchema,
  BoD1aVcLzZLbF13ZcGFdGwQdbaBQxKHCXkwvjjecaGH6:
    CdmEventCommonMarginCallInstructionTypeSchema,
  '89JsAf5RkYb1G889Ptbz7FfeDCCSUZZZRgprBxFg9CKV':
    CdmEventCommonMarginCallIssuanceSchema,
  HU1Cfr97zhchNyGMadT7dwRjt2hwG5nWT2D1g99hgkrK:
    CdmEventCommonMarginCallResponseSchema,
  Hjb2a22ySEsTU9cdrh8uRzQ8WrcuZ6Ng9TMb4eQPAaMK:
    CdmEventCommonMarginCallResponseActionSchema,
  GnBTJ8W44C9TijNkM52sd7sNbM1hVjYzpDEASm8JG7Yy:
    CdmEventCommonMarginCallResponseTypeEnumSchema,
  '4BrXNc4oFsUfnFzm3uWTqNmgivGhZJRmaoxvb8kK9xiw':
    CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema,
  '9QvPaXwgMX4bfTdirhDyje4sXJhxGdfrXikFFGpngwAb':
    CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema,
  AveBbPNcyiENsH8aGj4xhEY7GkX7xuoVApDW87Er969J:
    CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema,
  C5nADRBcWM2dKjXzJRRmahbypM7x2DUsv7Mxpuc9uPRu:
    CdmEventCommonMetafieldsReferenceWithMetaTradeSchema,
  EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT:
    CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema,
  '3WyHtwLZQPjVJB4zC26ena33X6r2fxTfkWVEiZi6eH1Q':
    CdmEventCommonObservationEventSchema,
  HAMRC4Nw3vdn47fsYmK7wavP6zQu6bq6YztAoBuuNL7z:
    CdmEventCommonObservationInstructionSchema,
  '6rLC4Kg1B1NAVXYhtwyRkStugkMFAt3qt3WaxaoxMy2U':
    CdmEventCommonPartyChangeInstructionSchema,
  '99vMJYxKFk2Qqei1h7zywxmwosf2KY5LyiDaSqRchVoR':
    CdmEventCommonPerformanceTransferTypeEnumSchema,
  Hkqj3rcbfbK4jQwci2R7M2K5pDfdcMMCxg52vHSp9dGx:
    CdmEventCommonPositionEventIntentEnumSchema,
  '3tFbj3fEQ7MXfvPhMuM6yjwhCrfsiKyzSipmhQSwwNga':
    CdmEventCommonPositionIdentifierSchema,
  '9m7oFgSnUtNdoF8hut9kaWRqoPdi8Vr1jH1stL2LEuNS':
    CdmEventCommonPriceTimingEnumSchema,
  '4CbQ8TBSptAuoovUmWPoYLPUFd5YV6vbnByMeq8La9rw#2':
    CdmEventCommonPrimitiveInstructionSchema,
  '3TKRurdUV8Lf9MnJ7qZjMUiZVa82DcRUr4EJmTzuenv2':
    CdmEventCommonQuantityChangeInstructionSchema,
  '5pVuoN3kB2p1FWPd8ss7zpA872YxL81sDYtL3SKEx1x8':
    CdmEventCommonRecordAmountTypeEnumSchema,
  '9zurDYn2PLmvAbQogpSypC9EdXX3kDMH8MEGkVW1iqFi':
    CdmEventCommonRegIMRoleEnumSchema,
  Fec1mDF7uoGM3Kz9ebXHJbHx47s9ug8hXgjx2VcY5suN:
    CdmEventCommonRegMarginTypeEnumSchema,
  '7vPrkkWh58nfDDkqkzYizHoGeQi5BC57ZpmFndxmft9R': CdmEventCommonResetSchema,
  '3vdqYkcvrCgXLt39NjEJw6qi6PFvbPZ4Z866PwYkm9Rj':
    CdmEventCommonResetInstructionSchema,
  '7EuWBxq35RJZSM2jX6Mxi6TZCJGmwUcy9Lo2mrGEiZLF':
    CdmEventCommonReturnInstructionSchema,
  DDGWdZNUbv4CQBdgM1tHzWamM2ZykmVA4FewR1tqBYsm:
    CdmEventCommonScheduledTransferSchema,
  '77WEPWzAsUD4nVk6xZ2W85JNLB6dpA2kRt8HCdsKpZD1':
    CdmEventCommonSecurityLendingInvoiceSchema,
  '4CbQ8TBSptAuoovUmWPoYLPUFd5YV6vbnByMeq8La9rw#1':
    CdmEventCommonSplitInstructionSchema,
  C63rgYVcyFKqAfdZwjLkhMUDs7CMMKgc5Zg92LyjVGu9: CdmEventCommonStateSchema,
  '299jVUofgxbkqW1JY3zxHjc4ivtdUPsNns5ow8dT6prR':
    CdmEventCommonStockSplitInstructionSchema,
  C8Sjni3j8bLknVwpMay25HnSbgy2TRcMj1Ahs4y7obpE:
    CdmEventCommonTermsChangeInstructionSchema,
  Gm86NetLQn7WB75RP28UxDg7WZvhyUm1usBgfAPjFkdM: CdmEventCommonTradeSchema,
  FGujWvfXdExA7nDNwp6iHf3hWYRL3g9JS9EZfYhS7N2y:
    CdmEventCommonTradeIdentifierSchema,
  JCPQwDxi5P81HhT3dYLUuBXqEwVbrt7TE9wLK7RBX66q:
    CdmEventCommonTradePricingReportSchema,
  '7FB6ca7DYRSDuwzXQm4kVBg9cea9CR3KuhT8hiffquh9':
    CdmEventCommonTradeStateSchema,
  D5TDQT9MAD6sFuVDC3EEoupfJghS4ZKw8J27kLnBJM3e: CdmEventCommonTransferSchema,
  '7yFSif63nzYVPnA288VLWxYHoa2GYMW8nXiAbUwJ6hpG':
    CdmEventCommonTransferExpressionSchema,
  RDiRTVRojrnSyuHJ5j24eYYcyow8d9ujnENuJHacNVv:
    CdmEventCommonTransferInstructionSchema,
  '5DE1nk33eUe1qZRRMM5fGCsyGFrVj8JswsEvwtwzL2K9':
    CdmEventCommonTransferStateSchema,
  Es9yBD5QerrdGCN3h3jDATJabhehNiQmwVoeCsKewSPe:
    CdmEventCommonTransferStatusEnumSchema,
  '7fUqjcMznRtsQXbh382nhVNPoG8pPi1kH6C6QRJ1NXii': CdmEventCommonValuationSchema,
  '9r2SKBfR4oNaDaVTYrF4RsZHSG7Vq1LwHjBLEAQNfewc':
    CdmEventCommonValuationInstructionSchema,
  '6oZQoXTPQoBnfn28CJnvScCWpoMnEBPDvuP7fYwouN3Q':
    CdmEventCommonValuationSourceEnumSchema,
  AHvjpNMMjoT3rNUUPAq275wLaiz12u25bB1BzsfUpYCp:
    CdmEventCommonValuationTypeEnumSchema,
  GJ4f9vYo1hSycBk9xvyg7fAsMA8mZQxW3u1uebj73PSw:
    CdmEventPositionAggregationParametersSchema,
  '66n1wmVFEF3GLz2uR5irLztPFPSLWqRRyASx97KheXkJ':
    CdmEventPositionAvailableInventorySchema,
  DkA6XvJbeeF79icGcoVeHCpY9rXSKVoMH52bsmP1sFti:
    CdmEventPositionAvailableInventoryRecordSchema,
  '8L2skr8s4BSGZQh2GH8oY8LM7UokYm6kfuxiZy5y3Kdh':
    CdmEventPositionAvailableInventoryTypeEnumSchema,
  BkMb8vLvnJKd2uBNbPk8QJCpmMbYGV8HNkhUbEsM5p81:
    CdmEventPositionContractBaseSchema,
  '9Scj1Dqa8srcxPcX2EXyAtivP7FtPptCYaromKVdSVAW':
    CdmEventPositionCounterpartyPositionSchema,
  bWt48J97E25xHR3miYd6aqZu93TNRes4zQepatZzsbs: CdmEventPositionInventorySchema,
  swvmAAFAvn3njjvFA8CkPez3L5hTXnQVBoeLsYiHbae:
    CdmEventPositionInventoryRecordSchema,
  FiGnX5GAARt1cJzgo4BT3oAxDUqkYktySnbp28d47HxS:
    CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema,
  '5rBG6M2ERt1hUq41p9u2zNuDfmKWJWeHix3aqj7G2UJs':
    CdmEventPositionPortfolioSchema,
  HSQM32z7yP1fJEoHr1oCYrfR8RKsj68Qhp88YpeyYE1t:
    CdmEventPositionPortfolioStateSchema,
  Fp7ngXaKudMmdfVjxEwdxVawRRc2E8bXhucLMMuNQyKs: CdmEventPositionPositionSchema,
  GumKrjeZLXBawN5df6PaCT5SfGKvBQmx12GKRoEcs9rV:
    CdmEventPositionPositionStatusEnumSchema,
  HfFRfyPZGYMpY4K96odTKTCh2orj5TpDTZQ6fCTWQ8GN:
    CdmEventPositionSecurityLocateSchema,
  '9Lq4JKDRKKVSQeCRSYR1PvVRZ5HB3Cbqa1U5FKk7nBiV':
    CdmEventWorkflowCreditLimitInformationSchema,
  BRSr4dRf2BPRxjLZjWsz124zbEDDbjLjAZvLiRkbAwYN:
    CdmEventWorkflowCreditLimitTypeEnumSchema,
  '6jrB2pq8NLHiipfLLWQHfSy6DxQvWsHdiVcQ4VP3BUFy':
    CdmEventWorkflowCreditLimitUtilisationSchema,
  DhHQHqqp2Z9sKdNPDi7Zcxze2V3FZafnK1rKbVaWWDHE:
    CdmEventWorkflowCreditLimitUtilisationPositionSchema,
  '4uRB2tZknwRVbJXEHny1GtGnSb5f2xAvbYG4xErbRbqC':
    CdmEventWorkflowCustomisedWorkflowSchema,
  '3Xoecxdbp2YNAeFqQmdNizAeci6amtY3kLG78kaWSD3a':
    CdmEventWorkflowEventInstructionSchema,
  '93YHikoSQrMTBaKFsmqukjaePGjWoHkVZMZVW1k86M7d':
    CdmEventWorkflowEventTimestampSchema,
  '6c8sFYVqrfeXJRDNBGbeaVtJN5wk6e2cvEc3xKCnPNhr':
    CdmEventWorkflowEventTimestampQualificationEnumSchema,
  XVxdSEMV4oFDKCQukLBfXD3FmtXm51L51G1CCF1mDiE:
    CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema,
  AkJ9qaZBcVWNmGPuKKTL3virXJgtGLj6pmWht6fJu7uJ:
    CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema,
  '4E3fYV7yu2ZmtKuLEtirz9QeXsUhY3qvpTRoTf12gT43':
    CdmEventWorkflowLimitApplicableSchema,
  Ah52pXGkoiKkANbJgXPxNGGcacWdo2AdPvybKoK3aMRx:
    CdmEventWorkflowLimitApplicableExtendedSchema,
  '8fPa1iYkGnYHoDjTLuifMbshggJh9khUNhLy4N8UYPSe':
    CdmEventWorkflowLimitLevelEnumSchema,
  '22GjU2seJ6LjqoYyFFC6Wzrh5DA1XxUKBbuqNn2vnR3d':
    CdmEventWorkflowMessageInformationSchema,
  '5FztK8LEabxgM4scSQjt3nPYnDnrndC8WDtkrCKtWy5e':
    CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema,
  CwZCsRkBByBtLTC63kaBcjcNDQKK1hV2Mnh42XUhafmm:
    CdmEventWorkflowPartyCustomisedWorkflowSchema,
  '9R7956BbBjP2muYFxR6YvMZ5XdcSzG8S47MN2Dmp2rkT':
    CdmEventWorkflowVelocitySchema,
  A1oVS1sh8n5WgZyH6sTQy19sNHZuLmWHHBGQLvN4s1Xq:
    CdmEventWorkflowWarehouseIdentityEnumSchema,
  '4sguk1kUYgzi4RhVwzUP3xQp47VWteih51HDVJ2eTMSj':
    CdmEventWorkflowWorkflowSchema,
  '6FS5LVjRjPqcC9Jv5LTu4r3Wm7MAKikZPY2uJiM4t5eA':
    CdmEventWorkflowWorkflowStateSchema,
  '5dZPU8bHyFfAju8bde9s3C64P7cYcu2c4awm2CKzJfmY':
    CdmEventWorkflowWorkflowStatusEnumSchema,
  Fhdc1fd8vMNRHxuQnBweJDNbCrJvLLEZV11VoTwDNDwy:
    CdmEventWorkflowWorkflowStepSchema,
  '9AHt7RbQJpPN29t7Dit6xemqAkC14HePBm5ayDJbHnqS':
    CdmEventWorkflowWorkflowStepApprovalSchema,
  GbNauDZm78xFHqv59nHjiPMoGf6ZicRMoLsgc7NymiDq:
    CdmLegaldocumentationCommonAddressForNoticesSchema,
  GtNBAyAynbg5ak9tonuCZjYhuWCYH91kN9bCBbHYAsop:
    CdmLegaldocumentationCommonAgreementNameSchema,
  '2Gh7VQwVWDZ4vcAdXjdgg5c5TrAaL5srKzUs1RZbDGyM':
    CdmLegaldocumentationCommonAgreementTermsSchema,
  '5itmpE7nxorYbvSnueuo37uhzMNgNfqfoP8AiBL6mGbf':
    CdmLegaldocumentationCommonClosedStateSchema,
  Ej15A6QYaEe5eF2iMzop6CYV6MmMRd15DeZz5n9SNtqn:
    CdmLegaldocumentationCommonClosedStateEnumSchema,
  '8cHgf44EBknKCh7X412Z4DMR3Y5zBFoZjQDmYRCJTzrQ':
    CdmLegaldocumentationCommonContractualDefinitionsEnumSchema,
  CEyrkJUT8HLojysAQjUReMYLQCgHmBX4VUxU91TJu8uA:
    CdmLegaldocumentationCommonContractualMatrixSchema,
  '81D3o3scqKKdNpP7iUkRWgWQQsbtYBLNze6ndK2HUm1B':
    CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema,
  GPjWcB5kAK6o6LyYVxoBgAHdEXtqLx1cmJPtvswu4BU9:
    CdmLegaldocumentationCommonContractualTermsSupplementSchema,
  FTMjeaqUxgjuv5VLsJMTFAhcU23GvfTUUjB2hns9EVvc:
    CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema,
  HGWxhV9vgTaj564yNutM6vrDpyMi5C19tZMWnPCxAWRN:
    CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema,
  '4vG95r6LVFjtK6WkmaomXBYYhik2HtMjacWiLkWMtv7e':
    CdmLegaldocumentationCommonExecutionLocationEnumSchema,
  CftZdiJyxaHVcunERbr8EtHErVHhgbCsTvUQH5YbLAXL:
    CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema,
  DTifFxeQTfuFKdA6vk8vUgRXB6p5tSYi7f6BmAEGxMn2:
    CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema,
  ErxQstFSsMK3XKhLkUhVeRYxqEXmnjDnLu9oW144qji1:
    CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema,
  FR8okQFuj9QRiU5oLdBBP1oYWS4JxJRRAWKRsmVqRbmN:
    CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema,
  '6xwzNwZ6SNNkzDZQEpHLCpbLX8mbUEmxosoBjAPtt1VD':
    CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema,
  '2csbatPyULPRBcWxMJBAqZeKStFUW9jtSY6H3Dew3EGE':
    CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema,
  z6SZamzZPBf7wahsobLBrx2goNesh7LuekmBpFBheXp:
    CdmLegaldocumentationCommonGoverningLawEnumSchema,
  'A6CipKeMXZr9PY1uT1iihJg8sjvn1z3pHUPLe9c2aP7a#0':
    CdmLegaldocumentationCommonLegalAgreementSchema,
  '7rJzAcjTjd5DMR4JmyLhkXUstQYiUZJ7FQqqTArqkv52':
    CdmLegaldocumentationCommonLegalAgreementBaseSchema,
  HKkvs9CCvwZwQxeN8m2GUQG1TrC5hsgoLjuSf1ztDGxF:
    CdmLegaldocumentationCommonLegalAgreementIdentificationSchema,
  '4YBVwfSaipgM53DLC5BrRsQhmUunG6XGS2FG5U4dPwUk':
    CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema,
  G98oMcFFcwapftpN3NbSePJTeafVqJgbP2ZJKGAWijZE:
    CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema,
  '6vcZYhvuXcMx67xRb2WKynrAR7WjtonaLWjGiAZbPD3D':
    CdmLegaldocumentationCommonLengthUnitEnumSchema,
  '7cCT8NhkWTqkg2sJE8YMTNeGY3ANYQ88fz8LXNSuuXgw':
    CdmLegaldocumentationCommonMatrixTermEnumSchema,
  FXjkNzFvXhx78as7QvsYtgPoLgPqQkmjb4REtkK6p2ga:
    CdmLegaldocumentationCommonMatrixTypeEnumSchema,
  '8d7t77eoZznGXdoKdpQK6QFJcZuzZrjj3VtBPGBQ4sUm':
    CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema,
  Gaf81ter2QcyVzugjNRaoXTAP1ymMe2jPdfZdEvyDt8r:
    CdmLegaldocumentationCommonOtherAgreementSchema,
  HEJQH2w87hk3xnJ3cyFyfhndTqXZLVRLAf2mpSUW5z1M:
    CdmLegaldocumentationCommonOtherAgreementTermsSchema,
  HmhKdAbT2MRZUsE7sCtNxWo8eestifsJAK5KCzFN5bn2:
    CdmLegaldocumentationCommonResourceSchema,
  '774eqeqTPdD7YGYPSVTQQ7NNBf5v5z8n5MppuAhC84Ro':
    CdmLegaldocumentationCommonResourceLengthSchema,
  '6Epbpb9tgsSZZ8TpGsBHH3Xn8a3t36wapYjuUY9fbz3o':
    CdmLegaldocumentationCommonResourceTypeEnumSchema,
  '376EsRUTVpM8keHXetCkavoV1ndtjDPkMTP3Ad4zmchE':
    CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema,
  F46iWKWphPUc25Xxqjo4pThtB4zX8xqJ9TfqsxJ9uneo:
    CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema,
  GqVe2t41KJLayPZqDoa9UfhE8HBqZuJj5PUkjMPrNx5B:
    CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema,
  '4ZF1ACUpJC9QAXmiacFCvcxe9tNsuWiX2cTPFAExEmcz':
    CdmLegaldocumentationCommonUmbrellaAgreementSchema,
  '5ESTwQnVdcqtNiRWFUqxCTGYZMgBH6ebZjLM2Rsqy2PA':
    CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema,
  DTCMrR8qY9BpbXqsCRwfEYiDY2fo4LEFLGBGTPQSA38A:
    CdmLegaldocumentationContractAgreementSchema,
  Fz2tnWG78N5RC4kx47Wbt87FHmqDVEUaQwx1vKzH8X53:
    CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema,
  AFqCxRJfD2r6VuMtdAaQUzB1354VrRcR3KdvEnUz8US6:
    CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema,
  CnYXLeD1YSPzKRkCdgumsMyS2pGwY5z3KFHu8tmbu9oc:
    CdmLegaldocumentationCsaSecurityAgreementElectionsSchema,
  BM4rGBdGf3cf5jwjqFsDtmczUu4GP1JoMjZyDxQkyssX:
    CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema,
  'GuFp1BJy74SUjnjVg7r3RwuRPXYUDKSUyEecdtsJ7QMX#0':
    CdmLegaldocumentationMasterClauseSchema,
  '2CBRVBHp8NK926NLXhHSWTgFBfRXppF92DVzGUsaWnb5':
    CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema,
  '8Rrcfh2Z8aE4ZAqfrkbLqgKH5vRuW7NKtqsxHbwvq219':
    CdmLegaldocumentationMasterEquityAdditionalTermsSchema,
  '8eyJdEjEPGbFnR2mLmiXtvsj5zsq51J2BKrRERr4rfQH':
    CdmLegaldocumentationMasterEquityCorporateEventsSchema,
  G7QNTAF4CHNyrEV1HRJJHQXd5KMBRK1ddd4XLSJSKVWe:
    CdmLegaldocumentationMasterEquityMasterConfirmationSchema,
  DLsimwLJkK7xwAv6U3sMF9svuo7ANFZ45P55YweRpbBb:
    CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema,
  '8WNdwP7MjecdHrT3shTAYGh22xXfqp5tjwBVkVnp6Cef':
    CdmLegaldocumentationMasterExtraordinaryEventsSchema,
  AMab7AVqN4nc3s5D6FBKRbSLj8EYaF9ppAqRbTodszbt:
    CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema,
  BpZYvuC7zpYyf3krdVjDee54WGnxCiGoGoGutTcy8rUj:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema,
  EMyh5oCQ6YLTistdrYkpVkvDXxrQh4ahrj3UkbNde95t:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema,
  BLcaRJ2SjxR7oB14E6Suf1722kgvEQ8vdXcTuTM6SxNg:
    CdmLegaldocumentationMasterFxAdditionalTermsSchema,
  '7JpyU9NCehqGC5gStraNS8fct7zmgk7CRM3sBXoxQPwD':
    CdmLegaldocumentationMasterIndexAdjustmentEventsSchema,
  EQaHEZo4zkCdfbF2UNAyNxwYv9fZezjkWSz2hRe39DfB:
    CdmLegaldocumentationMasterMasterAgreementClauseSchema,
  FmDnyLJSvr6LXHiDJUX2Nr93Ud1wiRFF9F7t8PyY65JJ:
    CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema,
  A8ZiN1bhVxyGsrcaW9Akt1J2YpZyqe8iaPJmq6UAoNnN:
    CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema,
  ENFLSMRkvE9AvBTnEuLaUNaY2pqTgTWvtBVujNMBwwhs:
    CdmLegaldocumentationMasterMasterAgreementScheduleSchema,
  '7vyQ6yvcGN1US8noTAiQvzzRziPs1uc7vWFdLXnayGSG':
    CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema,
  '6Fnwwf9PJokoeYXxkAzwU7oLnG6xfF9FHrzmoQVkBtQu#0':
    CdmLegaldocumentationMasterMasterAgreementVariableSetSchema,
  HEy66WYZgdArbo4SMoNQ7wRkHqRju4CT4fkMcrUgbA5p:
    CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema,
  ExCSWGKawXjY953z2c2Ne9PYFrtJjRLNMkxwXA8PPtrv:
    CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema,
  '6DgaHaSzK3ETUNrcEqTZUXkvS2nrBSrCTCJBLAqDEPsy':
    CdmLegaldocumentationMasterMasterConfirmationBaseSchema,
  FUgVmRR9na7tWB1PaaAckCtpr6nHKGUnZTW5VNn5xUKm:
    CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema,
  AiTXG2uwwXyPSfFiDC4VTP7LSQHP46fQf8FCaFFh6jHJ:
    CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema,
  BNwNQ6TkYDn3nzSVHofp2yxshKNkpDVyyKJASA2mjKaN:
    CdmLegaldocumentationMasterRepresentationsSchema,
  BaxRmA6JfNi4Kj4ZH8YN67Yq9sBv9YKZbu3vfSQgsPzF:
    CdmLegaldocumentationMasterTransactionAdditionalTermsSchema,
  '7paSbRZjaHBJWw41SkMcrKGfqK7m3wPAdtZmg3wJXwrh':
    CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema,
  '83diAP9PKQnTCXb2MCyCJ3DjsWWzk77mmVUjh4wjTxca':
    CdmMarginScheduleStandardizedScheduleSchema,
  ByBDRUzLi5pkLk3nidrUfkkQWJWyeUm3SfxMqWecxpNx:
    CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema,
  '9RWT8ZyQhTbhva1749LW2E6GceE4c3rkw3YfX2b7GEs6':
    CdmMarginScheduleStandardizedScheduleInitialMarginSchema,
  '35Mio6Cn5LCV87BMNgBeT2ES36yc1gKxP2eUzWb8mNzP':
    CdmMarginScheduleStandardizedScheduleProductClassEnumSchema,
  '23Qea3vj3Zh6n2825AYnEs1wHodd3QnXQYwShRghACMN':
    CdmMarginScheduleStandardizedScheduleTradeInfoSchema,
  'AzDkNPadueibCcw5Phd6BZ2rj8Zv78FyDnc4cAipUtUD#2':
    CdmObservableAssetBasketSchema,
  'AzDkNPadueibCcw5Phd6BZ2rj8Zv78FyDnc4cAipUtUD#1':
    CdmObservableAssetBasketConstituentSchema,
  '6tV4tMzAYkzXchyzP7mTuV91NBEboWNA5hHCsyeTZd9i':
    CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema,
  '4GFFRCPCHzxB98fqumfCPLUib4kkPqte8LmvurvsLMNN':
    CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema,
  '7Kqgo4RtJQZGhk5UdaMbXdKzqsfxFftZELqoLU9FoXyE':
    CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema,
  '5nzvsPPTcW6Z9XmpJANrceGgKQMN13pFVPJdTyttSKyV':
    CdmObservableAssetCalculatedrateCalculationMethodEnumSchema,
  '9RxcBd31mnXd2of4FvwiKo2UDnM1kVERhTwW8nZoPcZz':
    CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema,
  AfsZ9qKh4Qtrp72TzbuRFu1ZJNgDu14DGPa2Pyu7Twrn:
    CdmObservableAssetCalculatedrateFallbackRateParametersSchema,
  '3uTDiwVssb1uKdurixoF5csTPYjeU3mp49GD4wEFQudb':
    CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema,
  Eqsc25Hb8Fk47LeCFqmKJcbN2i6cXLYmp8YFf7xNXG3F:
    CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema,
  DBCzH1BnfUzDiN7Z6MamD49nsngVMUFxT6qpSFSrc18c:
    CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema,
  DKxKbxnu2Fwsa8UzqKbgTU29eJKTYiwMNoJTqTNZLM6p:
    CdmObservableAssetCalculatedrateObservationParametersSchema,
  '3A76x7tYhpq8Af8NL5GDk9T6MBnu3QovLsjcNFgnYpMb':
    CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema,
  '3Bf8GdUj3MKXvh7oTmRmwbssYTyx1Pm6fSQtDQa5uffh':
    CdmObservableAssetCalculatedrateObservationShiftCalculationSchema,
  FNvJ5Bykw9Ak2JRJJJ1nizpUFbufUY7ciCjGoMLUAQzA:
    CdmObservableAssetCalculatedrateOffsetCalculationSchema,
  BmkE3R86Mi5VSgGXWARzCmJ1FbnwnZDnHtccZ6MSGnRQ:
    CdmObservableAssetCalculationAgentSchema,
  '3xBEop5VqRojRSFKs2N78XJ9XJ3y9EwonNDNeW7bcGer':
    CdmObservableAssetCashCollateralValuationMethodSchema,
  CaWpmLo2CzXteNgpMQ2nPagGfg3K7ETP5wMbxbxnhBx3:
    CdmObservableAssetCashPriceSchema,
  AEfb65Lx9dVtpQ5JJu3BiLoUgJ6PUYM3ojouNVFV4CAm:
    CdmObservableAssetCashPriceTypeEnumSchema,
  DzpY5RUNUovhmzgtT5VaT1W4axHNNoTZ2da1YgZrdg6Z:
    CdmObservableAssetCommodityReferencePriceEnumSchema,
  B9M4cKALDcyfwfopEL2hETJTezx4P3PypYFiJT7oP8PX:
    CdmObservableAssetCreditIndexSchema,
  '6DvMxWSu8NPPjxcsnCkgPnNoAfxF9WCaA14A1Gd6fLG6':
    CdmObservableAssetCreditNotationSchema,
  D2oJ9QPeiZWktpNjjfSdXqVURAMCL8SdSfCjyMWBeTjs:
    CdmObservableAssetCreditNotationBoundaryEnumSchema,
  '3xGR5MinWeBBiGacxvPvEYBQ4EV4NjiAp6xvgENeLDVe':
    CdmObservableAssetCreditNotationMismatchResolutionEnumSchema,
  '64YKsMz4yU1FijWUEv9SJYbetCXtnJHCaKj3ar3r49hi':
    CdmObservableAssetCreditNotationsSchema,
  '21xGvoNnChKXaDXVNTEgYY1eJr849T5okU3aXsrCK2PB':
    CdmObservableAssetCreditRatingAgencyEnumSchema,
  JThRKhD8L54T86NmWrx4tHJzMADkizJKjgcXZ5RD4nD:
    CdmObservableAssetCreditRatingCreditWatchEnumSchema,
  FXnC4V44iMPEEzRCuT7HaZPV6oQyrxYFSjNtrrkjZNFw:
    CdmObservableAssetCreditRatingDebtSchema,
  FLbsfWVvon28TN6JNLV3VmaXBVpm92Ar9W9hNpmPsFn7:
    CdmObservableAssetCreditRatingOutlookEnumSchema,
  '6faGvMJmNJkEEBfWDqeXBsiAuAGT9TXjqMU7NnT55GD8':
    CdmObservableAssetCsaTypeEnumSchema,
  Dc9f4BkDRJNFpM7pQZLH5UVwiCEFPCcaJDKzm5PsBZuL: CdmObservableAssetCurveSchema,
  AfKweapaqsU79LG9ZWn4qFZmKFXJo7xvzr7cVxixP86u:
    CdmObservableAssetDividendApplicabilitySchema,
  F3XZKbaaetQAbq12wTkNqNj5yXt8i7fA9q39GUJdMzSG:
    CdmObservableAssetEquityIndexSchema,
  PDQLcykvwiGmnD7jw1DPqfEPB4qb9uEDGcwWVZLf7vv:
    CdmObservableAssetFallbackReferencePriceSchema,
  '8YbneMZREtyf98o78oZSMwLcZ4UyCjeQ14dkVVURpo8v':
    CdmObservableAssetFeeTypeEnumSchema,
  'AzDkNPadueibCcw5Phd6BZ2rj8Zv78FyDnc4cAipUtUD#0':
    CdmObservableAssetFieldWithMetaBasketConstituentSchema,
  GBnSE6e4cosEwU1Ko3TBcC2DdUkKYg8v6tVXq7awBE9B:
    CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema,
  vj6R4UJLxafVvD4Kb6AZG34BntgoTm9445T8cscNBEE:
    CdmObservableAssetFieldWithMetaCreditNotationSchema,
  GyHRCQjZiCev41ByZKVY3E3nnyf5EZ3DkPr6Fat2V2GL:
    CdmObservableAssetFieldWithMetaInformationProviderEnumSchema,
  BsnCbY3QHNpAikpriPmsdfVAKjXaEUdXGrL1jr9zybeu:
    CdmObservableAssetFieldWithMetaInterestRateIndexSchema,
  H42GaqGDW5E4soD3FMoi2BiRLwzLugVQhzBiLfGaE5hm:
    CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema,
  F7sFzXWUzuCitCY1sux6JewiNm7FurU1UY6DDXgYdozC:
    CdmObservableAssetFieldWithMetaObservableSchema,
  D56TQGXSu2P9sUf1weZUW49yhP5PW6GhYpB3gZeABsUn:
    CdmObservableAssetFieldWithMetaPriceScheduleSchema,
  BznnopwXUQBTNa94kd5o1WTRGz9fAEnw1k75ki6MRi9r:
    CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema,
  '5zMhYAXcxtwbFXQeEYr3vWu78daHfMbFUrFgair7M7sf':
    CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema,
  FEciYgwDPBCoe3t5CbhmZgzFsYGjaDrE4MC6fMssK8kS:
    CdmObservableAssetFloatingRateIndexSchema,
  '5CRbxGnB3K2J3wdGYp38DrerJ9YD8boS2eP6L2iUbFM6':
    CdmObservableAssetForeignExchangeRateIndexSchema,
  FwUNFKJeskQXFx2sCAnvYba91TV5N2jYMUyXNiL1eMc6:
    CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema,
  '993FmQYp1qquePHed4gzqEGk6TiscurtZ7ryZqKvXoov':
    CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema,
  '4zB6e1AuSAmpxEYJVBg43uYddvMaX9bdWPpZJ5R2dR5b':
    CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema,
  '8UFa4kTre2Rw8E7pdJVL5c1MqVxkNzNKschC5wsvBdta':
    CdmObservableAssetFroFloatingRateIndexDefinitionSchema,
  FyRHJZ4TAfL97VshvgV9YRobv2Tgbh9PCwiToNdxXrk2:
    CdmObservableAssetFroFloatingRateIndexIdentificationSchema,
  EHeB5nPPmZvVyFWfk53aC5LX5MjkebqhRqVH3VABHGcV:
    CdmObservableAssetFroFloatingRateIndexStyleEnumSchema,
  jS1Jdx4pXkwfPR4TmTt8UXGnbjdPbKw7KTpVK34od1f:
    CdmObservableAssetFxInformationSourceSchema,
  DkWwEkbFzMyTZcRgCbTWe3F7HxMH94sf38iKhBV5S2rE: CdmObservableAssetFxRateSchema,
  EE13wjonNkdb3RZRkNGktnaCD9CA9UG4BcD7KcVyBKzp:
    CdmObservableAssetFxRateSourceFixingSchema,
  AFE5zRAhERAL2eMayj5EaEugVUL8M72A5RqLeabreFGf:
    CdmObservableAssetFxSettlementRateSourceSchema,
  '4Jbze8eVmcTD1NE4zxdWWA7NuWrvuqjSc5a68zCAQD7h':
    CdmObservableAssetFxSpotRateSourceSchema,
  HPKV3jzahCUNNYc5hsHbEPeFhACtdGyBCmSNpJM4ioGi: CdmObservableAssetIndexSchema,
  DDZLpMJfeQNJQhyfQebxNY52zU8fLWKLvftbhdqpfHWi:
    CdmObservableAssetIndexBaseSchema,
  ALcifh12oA5VR8MK7Yvmj7vNGwxB51YSHriX5fLRoB7d:
    CdmObservableAssetInflationIndexSchema,
  B5GMMYvytQd5SdHYRfCuTkRUGnwePx9igwk7xJCnYwBt:
    CdmObservableAssetInformationProviderEnumSchema,
  DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5:
    CdmObservableAssetInformationSourceSchema,
  '9c83wu9yiUU79cbjGDDz3BxTgzdRV87nww14WN4bz5Rr':
    CdmObservableAssetInterestRateCurveSchema,
  Fs94iscB88dTVSWcfhZRhCCa1PFeQLHjBBJnddFAw14S:
    CdmObservableAssetInterestRateIndexSchema,
  '3h1NHQxSYTh9JS13UUBSTJesbdm5xcKkz7jHUTjG4s6f':
    CdmObservableAssetInterpolationMethodEnumSchema,
  '6N1AurVNznLiPSNtTZrotPgf8jAaq1J95ySoT4Zutx4a':
    CdmObservableAssetMakeWholeAmountSchema,
  '9TCszX7p3useiqzNm9UPp1AMdorfkHLknXYXqEVsE2N8':
    CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema,
  '4G54JBxkdxEwLZwmqaWCK5bKJB6A4GG18uBgBUKxJ4am':
    CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema,
  EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet:
    CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema,
  '29tRf6HKyJ5PZ7qSgJmiEnuDwSx7xXy8vHzP4X2PfJU8':
    CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema,
  FZijMkQPrtZQaEQjCE7pXzh3u7cK2CoCy2dG3PDmNQc6:
    CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema,
  '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy':
    CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema,
  AyEBp4Mbar43fuYsMicvQsPWCtvzqv7kEt3G9UEdSbHx:
    CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema,
  '5ELPXXGetNc7L1KzToiwonniwtgkJ3BHxxLYZiFDy22x':
    CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema,
  A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii: CdmObservableAssetMoneySchema,
  '92vLAqvfJgzjgsR54hnKrJVs7B3dGCXpuaqMhaL3J5vD':
    CdmObservableAssetMultipleCreditNotationsSchema,
  AsVDMXdzj7YUDAbB74UjAitv1ft5nufzbBHu7aR8iHES:
    CdmObservableAssetMultipleDebtTypesSchema,
  HyKWLzqSMdXydTHsC9zJwdiVi6KcdZVngY9WJ5PV3xMR:
    CdmObservableAssetMultipleValuationDatesSchema,
  DXTyjwoR6uArYEUFJyE6a94sYYNV39vXWVYB7iLGSdv2:
    CdmObservableAssetObservableSchema,
  '56BHaLr4BZUc1nZnJfgp1nRUBU27yYb9TF2wGHeqnR2u':
    CdmObservableAssetOtherIndexSchema,
  EvKQ9LCRpPx5iXbQcQZv7T7vLFUBLS7RB9geFcYuGEw6:
    CdmObservableAssetPartyDeterminationEnumSchema,
  BSEHE4W4SiFBFxz2pZFUYLZkWbx5TpsRfxn2aVJSizYd:
    CdmObservableAssetPerformanceValuationDatesSchema,
  CF9TCm7gsGv48fg55ri8oWuzJnJp6Cg8rQ1v3YadozR9:
    CdmObservableAssetPremiumExpressionSchema,
  '4zdvvQF8ECdQJmJAhhdb1sXDKkrYAj8LiTRb9uofvFnD':
    CdmObservableAssetPremiumTypeEnumSchema,
  D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M: CdmObservableAssetPriceSchema,
  '6tfFx6LjQPd8i3zPXbCkuh3MhNp2C1Ns5HdLRXK7G6eE':
    CdmObservableAssetPriceCompositeSchema,
  FR2Gc8atUr5LZxtstV7pHAJggL6G9X2a2mV3nCy3FcWN:
    CdmObservableAssetPriceExpressionEnumSchema,
  '75kbaKDVKCSKNUayDkubSxWEMjUUwzCQPSenfWfx8759':
    CdmObservableAssetPriceOperandEnumSchema,
  '4XEYGgCSfXx2tFwmQjMsXhuwaCjsNZ42jtKAcr8itiqe':
    CdmObservableAssetPriceQuantitySchema,
  '6TobEa5CPYK6vNs347sZcHg2ridoBfgzVkpUNrZrYmCt':
    CdmObservableAssetPriceScheduleSchema,
  Ejzy8x4kUUXVeFecVHZeysJJ1Ee9MSw5S7sEmoUEycjd:
    CdmObservableAssetPriceSourceDisruptionSchema,
  '9xUkR83yqGdL6Xn56YXmLfhwiba4FD17zN5Rp99ACGcF':
    CdmObservableAssetPriceTypeEnumSchema,
  '8S4ZcfqbHSCYS65QEtL5kmftEw5rMgaBMuxNcryzsoAE':
    CdmObservableAssetQuotationRateTypeEnumSchema,
  '3dNvpLuUvkiJo6AQdCKYx1WFEVMKmojVB5NmUQQQmyDq':
    CdmObservableAssetQuotationSideEnumSchema,
  EKXd7uHTmxJwvv5NQiDPde4szje2XTaXMKc5Kaj4ekHU:
    CdmObservableAssetQuotationStyleEnumSchema,
  '7noJvZuGSSZMHSRZXsAQU8dhSdJ1hDT7Mitbfx7oDwGW':
    CdmObservableAssetQuoteBasisEnumSchema,
  GwrNf8idhCx9xLjesA5nE33grEpWocsCaZCwMSDYrZNB:
    CdmObservableAssetQuotedCurrencyPairSchema,
  AxRtbapEBZySZ4EiPgeQy1TunP6re28X7ipk2brY6NJV:
    CdmObservableAssetRateObservationSchema,
  '947EdsG5Yfi7yGhx14nJkswrhbRBAJfNPeedumoqx9JT':
    CdmObservableAssetReferenceSwapCurveSchema,
  ELcaWuVRZLCQb3timJQKGsyW6QUw9icetFpMrvbuePcU:
    CdmObservableAssetSettlementRateOptionSchema,
  EwUsZoM9DmKcQmfrnDG5YCv3bF338gxD6n6WWJmgGirC:
    CdmObservableAssetSettlementRateOptionEnumSchema,
  '14czdjerkJ6X1HwgQE2RFvCte476RbB2aWmpUby9D7bG':
    CdmObservableAssetSingleValuationDateSchema,
  '2JLGXcZi3fP9Ln588TvZV6ae9QJRPFiYEWwPpva9UREc':
    CdmObservableAssetSwapCurveValuationSchema,
  '6zT69ee5wVtzgXfHCojaomhFEL4rpMkPrdURmpC5DH13':
    CdmObservableAssetTransactedPriceSchema,
  '52VT1GJKNMa3wBqNqgE8GhUTMvm8KG1p7teYbHA7oz8D':
    CdmObservableAssetValuationDatesSchema,
  CMAHxJFY94A1pB2r5ssa156H4SY5d4BUskoSAJe3jKQY:
    CdmObservableAssetValuationMethodSchema,
  '43bw6EWooB5HsHqsSPapsxoiX8kiHyobaFvVCeDQjwL1':
    CdmObservableAssetValuationMethodEnumSchema,
  BbM2nqKiVihnZtKM1sJKM3HK23io3UM784GeaXFmEKiY:
    CdmObservableAssetValuationPostponementSchema,
  '23s8wDhp337PGVYErGxLLyL68vnBqB4CLLhH7pwd7bVf':
    CdmObservableAssetValuationSourceSchema,
  '5jqv11pA6a3Nrtm11SrFfbQvRZZ6ukyLt7PkNLq82wy1':
    CdmObservableCommonDeterminationMethodEnumSchema,
  CPirifxyoZ3EheLcX6KW9muSEUsxpDaj7mJXu5zW6jsJ:
    CdmObservableCommonTimeTypeEnumSchema,
  '8gygSAwRTVJtv5KcSysiUECATdqdehh19AhUuCLkXEP5':
    CdmObservableEventCreditEventNoticeSchema,
  BDbfoDhUgVvDXugqQogNj86MztLv2FPdJAEfSdztLvXw:
    CdmObservableEventCreditEventsSchema,
  Fhi93wJfXrWgPY9spj9SbzZzgnHf8qeKHwSrvxFtgrEU:
    CdmObservableEventDeterminationMethodologySchema,
  Gchi5o7iqfYk1zXWDFca15cfTM8j5r7UUYgvGEcwD2cA:
    CdmObservableEventFailureToPaySchema,
  CyNbsBbVvQtTXmUtC5VgfJRMfcxjpqRgWZb9o3728hUE:
    CdmObservableEventFeaturePaymentSchema,
  '2mUG6yVN1o4wufU3eqD46MgJ7jFsjjB6XVZAGeFU8AAM':
    CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema,
  LZSk27kzemAmjXyZjWpvsokiL5oP2wCXZ937ZUYTfkq:
    CdmObservableEventFieldWithMetaRestructuringEnumSchema,
  DWdjsHAuRVoiRCLvLpuzVLV1CMvzVLhNktBkLdXcEPPB:
    CdmObservableEventGracePeriodExtensionSchema,
  '5M5zPxfMX4RzeuVkVugLNEa8fw6N843Fc5Ux5uXXazuN':
    CdmObservableEventIndexEventConsequenceEnumSchema,
  LLU6Bewb6VDe29vMxskc8Gqnse9veUkcHG2uLeaKUYA:
    CdmObservableEventMarketDisruptionEnumSchema,
  FWcQmx5gu2ihsKm9K2BYniLmbetQeMxPF6ZpzM3uVXXD:
    CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema,
  A2eu6mCquL2q8sKhpvBAfkp3b6uAG8GdE22hHTvvQEMi:
    CdmObservableEventMetafieldsReferenceWithMetaObservationSchema,
  '8EUcPQTHo5mLovdtyBiABzvGTLiRKYmJopadhbWnbjyX':
    CdmObservableEventObservationSchema,
  '9naeLEXLRWTumCrkSpeU3W9ou5dZxNFfPNSpUrCjWXbE':
    CdmObservableEventObservationIdentifierSchema,
  '7YmzH4R2276V7gX4gWUBSh4RZyeR5ZgEfjpV1sbpPCEG':
    CdmObservableEventPubliclyAvailableInformationSchema,
  '8YohhEmMdUAeQpDyTwQSPKi5FjSCvkPLcAm1kNasqHGL':
    CdmObservableEventRestructuringSchema,
  BdKUvzhXPVukmwGaH4uaExAnisNfB52jtq1EnDvNYwuk:
    CdmObservableEventRestructuringEnumSchema,
  Bp49hDQsozezNpiDV8FRD37Kh1KdC8a4aA4o8SQES85L:
    CdmObservableEventShareExtraordinaryEventEnumSchema,
  DPiz2W1ctMPUXHZwDNk33csZRvEzLLK98EDtC4S1MYYv: CdmObservableEventTriggerSchema,
  '2Aq53zeNMUtF5mQZiVzTDwoK4oiRWSX755VA3RHg5Gkt':
    CdmObservableEventTriggerEventSchema,
  '5r7FDA2Kb2QKkU4GLbmZThWV6gdyN7veycRmqVrCxCdK':
    CdmObservableEventTriggerTimeTypeEnumSchema,
  '5w8FaDTzJmekrP4WjP5qSGJ3qtmH8XNuSzhwJRaebh17':
    CdmObservableEventTriggerTypeEnumSchema,
  '2MBY3n1ccqVv3XyWrmGJ6dB87YtvzCaNGTvwyiDrVjdn':
    CdmProductAssetAdditionalFixedPaymentsSchema,
  ErtJ5jBytJJ7W2hSqXGSdmAd65mCExkRtBpifkecnhVT:
    CdmProductAssetAssetDeliveryInformationSchema,
  '8x7QowfQAo9kcHdkjBakncAZtYoFpqZrpPVh9c8dqbrf':
    CdmProductAssetAssetDeliveryPeriodsSchema,
  huDyD12ZoREuxfsApppfcWfJ4LddBpaDDswYuKpWtH5:
    CdmProductAssetAssetDeliveryProfileSchema,
  DBB9Ve9VNPocXHDjCnG1nYEfLfnhNFSLu4n7sfCxpNoj:
    CdmProductAssetAssetDeliveryProfileBlockSchema,
  '675Aca2arvdxDX1fKffGHMK9YEzGwT9569ZTDeWvZbRQ':
    CdmProductAssetBankHolidayTreatmentEnumSchema,
  FwJbaG1Nf59WekW7F1zPr4niKBtDp8hYgwiM6JE7zaDr:
    CdmProductAssetBasketReferenceInformationSchema,
  DPtpu2G5jh663WcgntprZ7GpNDZUNv1hP1Ne6QaSnGMq:
    CdmProductAssetBondReferenceSchema,
  '5h378nRjo3jm7Ls8JJ42cmd4XHzLYLu8A6TzQsDDM4f3':
    CdmProductAssetBoundedCorrelationSchema,
  Cr1TGHAfZcJdkMYtdGpBo9J7Deosvd6UcRPugzuDFvvE:
    CdmProductAssetBoundedVarianceSchema,
  A8EG82JMUV186kwffGxGSuuDgYzs9S5KTaEba1UmhTe1:
    CdmProductAssetCalculationScheduleDeliveryPeriodsSchema,
  B4oG9gALDizVew21gcWwiHX4E6D4h96s4kuxLgxD7GB8:
    CdmProductAssetCashflowRepresentationSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#7':
    CdmProductAssetCommodityPayoutSchema,
  D6ccfP4o1sypHMWkBierc5EBBJ1VZeRnHKbvcLzX4tvP:
    CdmProductAssetCompoundingMethodEnumSchema,
  BMNQDcRPQNEEWkrvZpkzRanWfemGtKAjs6LMhRrJfFTv:
    CdmProductAssetCorrelationReturnTermsSchema,
  '2YqK6i9r2hszySmshyxXz4usfGq2v9fWePv9HxZAT4xL':
    CdmProductAssetCreditDefaultPayoutSchema,
  FHNjuCAWRmsyRgbGQq5VFBDJvVVW4DCZs384cMHvtLKw:
    CdmProductAssetCreditSeniorityEnumSchema,
  hQr5MwUS6CucReoCUdM1bToeUnZNuEiqWL4aadinx9h:
    CdmProductAssetDayDistributionEnumSchema,
  nQ83jRgkpNbMPVNZtMvKxVNog4Z5LhzJe47ocRpDCPb:
    CdmProductAssetDiscountingMethodSchema,
  Fgbg9CjXPCyJzkq8LibUz6aJ3yy8haVrpghSF2DD3qZM:
    CdmProductAssetDiscountingTypeEnumSchema,
  BseM57TwJnsZJpg73zrJ7kGx8XvjH6ufZPiazs47DUTQ:
    CdmProductAssetDividendAmountTypeEnumSchema,
  '3QHiAmrDLD9f7nbwCya9NpkEQw8ybmPNzHz8rZUYMgGX':
    CdmProductAssetDividendCompositionEnumSchema,
  '2cPndt4fpDpzVEUw3SaL2dat9i3qSRnuWwUjzfd7YEDX':
    CdmProductAssetDividendCurrencySchema,
  GatRzqKjCBWstCxdhn6u3zrtE3Kqm4CX1WiAzn3Wzgau:
    CdmProductAssetDividendDateReferenceSchema,
  '85WvV66mYWxg69UX3kQewRAfDtEk5A9K2hgNX4Dy6qoo':
    CdmProductAssetDividendDateReferenceEnumSchema,
  CjxtggSJUeokfEBLy1LH5RuozcoZiFPdboPbkGnfaQ1L:
    CdmProductAssetDividendEntitlementEnumSchema,
  '25Xp4tJRaZyv2LV8rPbZoJ9iLwHnmizsWJiCcXHiLx75':
    CdmProductAssetDividendPaymentDateSchema,
  G4dRtYHi6XSLg4caxcfJcag7cDcQqTHo18B5pymZAFSP:
    CdmProductAssetDividendPayoutRatioSchema,
  '5GWb11CvK2e4hjYE5b3bbzLuVwDyWcC3natfgX4Ay43i':
    CdmProductAssetDividendPeriodSchema,
  B2dTvQ6nN6jhgZbrXxvHNDxu4jeZ9ixuiSyWScidvJYi:
    CdmProductAssetDividendPeriodEnumSchema,
  m8Bj1PPr1ayweQMJ1XTSJLFPwYpd3HcwBL9Qixvds1T:
    CdmProductAssetDividendReturnTermsSchema,
  hBX9rQeKFtms3vxhq7NqDejchRZkpoUMqyHH7qF88rQ:
    CdmProductAssetEquityUnderlierProvisionsSchema,
  '5m3SsxkRsmH9rTCbqfUv6Zd2wqx6w5yi6EUA3MtvMuAF':
    CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema,
  HRm7JHUnU7f1WAdnj8igCiQMRxoyt5gyMtWJpJiRj1LE:
    CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema,
  '5u2M6VmQEeVW4W5qGGcVQRB2Lud11XmPP89ZcRszZ524':
    CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema,
  '9WJkDG3GLmcSQTauqgGz648k5tchPvZ5iHYUU49dsqn8':
    CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema,
  HhW9fYofFaD5jMBRYKwWFJNeWtikxR8N4qV3aWeDPeSS:
    CdmProductAssetFixedAmountCalculationDetailsSchema,
  EGYqbJxyubwqpMiSD4GyaqjF8JLLc2R5X7drZoPxyc1k:
    CdmProductAssetFixedRateSpecificationSchema,
  '3Y6NLPePzX63tBUcDRcuZp6SmXT9ie8eJCCiFfHvSzUA':
    CdmProductAssetFloatingAmountEventsSchema,
  Gd3N5B2Q5Fb7AXEaXfe3iXtXmHuAUXDYpfeqAF9fULPd:
    CdmProductAssetFloatingAmountProvisionsSchema,
  D8hZPmsoKyM5N1bgRUwPgkkjdHx56x7Wgat14eXk6QzP:
    CdmProductAssetFloatingRateSchema,
  BERrygqpFUVpdcs3rkuxMjCWQTKNDKEXSyTNnUN1YzWJ:
    CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema,
  AgHJMePzPg8qzCZMpu8nh9e8WoJqaVy1p4a36m5BjGmC:
    CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema,
  F43xUs35uiAv2MqzAfnxeuEJZqrrCnvJVmnRhFJnqtRh:
    CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema,
  PFuvPDjyVXw6NBBWr4bCzfHdZAhzniSg3LE8zBNGqLW:
    CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema,
  EJonoYUoi7VKe4AowYFBKKL6ZCn4FmgqpsuFaGQDoGux:
    CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema,
  '3ppYS4Knk7tn2jmTp6oqJegiiXbjdHnLBBkSUuNmGeHq':
    CdmProductAssetFloatingRateBaseSchema,
  AdSenJuaemBCdgGKetnHtpKmpgrP6eZWt97RDfjjcp6a:
    CdmProductAssetFloatingRateDefinitionSchema,
  ANmCF3xmaUGNncVaDabTkkZxZmT5nvtE48NwyhYMN9Ev:
    CdmProductAssetFloatingRateSpecificationSchema,
  '8qa18FMjMCRQQrV9cszrQ6HMy1HBVJzimT2uWrdRVq33':
    CdmProductAssetForeignExchangeSchema,
  AuQKqiWFxbMadx1HuAtRv1MxjiieYjoPPB84CQEQoWNX:
    CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema,
  FPVak4Fuks1N2ZZX56hibjsBpQ7f15tk5GEL4L4VYByZ:
    CdmProductAssetFutureValueAmountSchema,
  '9SQyDsqhPWARY2Stk183G22k6VqtSn8AjebY6JKFGja7':
    CdmProductAssetGeneralTermsSchema,
  F3k29JJCLX7teCPaakQrX4PgmG2afxCdxy3DSmHDYtEk:
    CdmProductAssetIndexAnnexSourceEnumSchema,
  HgvUazWUT3cYBnJe67N6uNczREHE3zyrajGM4ouhEa1L:
    CdmProductAssetInflationRateSpecificationSchema,
  BAoE7i2eVoyRgKk5gH1uAzHR5ZCePkiwvJYQtnpqH2fm:
    CdmProductAssetInterestRatePayoutSchema,
  CMFyKETF4AW2ABGpniMoaoAomexgwK1AFicxUhU1yef7:
    CdmProductAssetInterestShortFallSchema,
  '5aFwMNtcxHkvhXwyS7CEusCyu9yHY9hNFVSzLxj2oNEr':
    CdmProductAssetInterestShortfallCapEnumSchema,
  BsdmgVxSpyU8h1XB5bgHz1RaFzBvfaE7M1ePnKipwMFH:
    CdmProductAssetLoadTypeEnumSchema,
  '9MuxTNnqdBfc2jXWLVxrcXeAQkmmc3aoj2AuNQ46RBnh':
    CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema,
  '2U7YP6Ym1jX4mFm5GexJ4F3psZB836JfxHmp6MF1dcAF':
    CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema,
  D5MVAPQZZQMZXFW2noGBFFgRgvJ2sLSL8SKwphof8rd4:
    CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema,
  '3S9wGcwziECfCYxsx3JEzQGyA8pisBmmGB1dLPaF4Uz2':
    CdmProductAssetNegativeInterestRateTreatmentEnumSchema,
  '6kffco33fj474CxLdCMkkTbajx4JJDtE7zJHkyQX9Bop':
    CdmProductAssetNonCashDividendTreatmentEnumSchema,
  AoPSpWFPQFM3y5utQVWc87pnUqdSxGdfQopZXvv1hzoB:
    CdmProductAssetPriceReturnTermsSchema,
  HF43oYXMDMjc81NhfqtZrzyq1tEHjuQ9uYFDVoUQTp4m:
    CdmProductAssetProtectionTermsSchema,
  HBrMg5FXzJ1xe7cZfdnvk3h8VUcubS4i5XJvxpREkAsM:
    CdmProductAssetRateSpecificationSchema,
  '4REjFYKmNm3htXXqQK6yYEKdqScJUTN8EYNZpDTYUzRp':
    CdmProductAssetRateTreatmentEnumSchema,
  '8WUdqYEhbVAAmUh8SvvCpySEJZcWCkdb5xN8ZGfavwQW':
    CdmProductAssetRealisedVarianceMethodEnumSchema,
  Aogoj2sCUGRvYLZhVJNntPd3rKjX5XU82C9NYKGNG6EH:
    CdmProductAssetReferenceInformationSchema,
  '9JVAArBi86NaGQD2GTdaCzekc6e3rKpVyMR9GwkaPmWP':
    CdmProductAssetReferenceObligationSchema,
  '87LG4kt3rUa8kL2JyAEodBk6JDJ9u7aJWgHnGQ4VpGa3':
    CdmProductAssetReferencePairSchema,
  '3ovMWZG1vkBZmE3FHeEHCtXaBPGJ8RUhfdw6Jryv8j4H':
    CdmProductAssetReferencePoolSchema,
  AqGS2SguERoZQ12B22inuBpRxBEr8pgymQHLHSoWbCWo:
    CdmProductAssetReferencePoolItemSchema,
  '3jhUyVpY5gXXfX11k6epbpxcwTy6g4f8pYAnrbnSj9xM':
    CdmProductAssetReturnTermsBaseSchema,
  '3fgHuNXJoi7veV1sJapyuahexc4gzfBdPJ5JVBdUSiHn':
    CdmProductAssetReturnTypeEnumSchema,
  '7SbZcAMcyVJPrUfsqoF84e9R2qMPoCzArYVjNiy2LjYX':
    CdmProductAssetRollSourceCalendarEnumSchema,
  Btov1TSH13XcQmYFbUEQ1y8Fjxf5J824rRWZnp4ykQPE:
    CdmProductAssetSettledEntityMatrixSchema,
  BhVU3KEW8a9LMCcnm8fr2HCBoKRaD9FgYgM66MQ1VNtX:
    CdmProductAssetSettledEntityMatrixSourceEnumSchema,
  pofqb36ChLSmorcvFJhj3S49QhJzV4XfbyeueezkYRF:
    CdmProductAssetSpreadCalculationMethodEnumSchema,
  JBHbnTb3KK4imqfxRHkV1Hdv7p6d8fMSvkBKH5J4cQpv:
    CdmProductAssetSpreadScheduleSchema,
  HmnCfRUBwvV8xrKyQQ29sPpRqzYrLeCYBnm66yxQH6RF:
    CdmProductAssetSpreadScheduleTypeEnumSchema,
  '7Ar7uLMsDiNfpvm4LtRZkHR6az1xRTBTzfMFzELcZCm':
    CdmProductAssetStubFloatingRateSchema,
  '7o95hvMNSpwvnwgXCRfRWhLQqFrrHpTPRvLZf1ZzTXWx':
    CdmProductAssetStubValueSchema,
  '2kqSEBf4QHUaZoidcqZix27rUgz9zA4zq7QJaUj5s5Mh': CdmProductAssetTrancheSchema,
  '3RV4JPXGMLbdEEtEMdNSG3rPva1V96fHc2XFGnK9o2r5':
    CdmProductAssetValuationTermsSchema,
  '2AZnHgoS5afFQfp3F6cunWcHpUAiCzpYycF5ZE35ZBad':
    CdmProductAssetVarianceCapFloorSchema,
  '2ueL7HMXMciBNmYPVL1oTvUu988fWWURLxwhzzyDCvUG':
    CdmProductAssetVarianceReturnTermsSchema,
  '3hhGezhEJkdjitC4RY5pTQv9HvHRzqiC8cfqQsEpGZz7':
    CdmProductAssetVolatilityCapFloorSchema,
  GZ44neabTiXqC9Y2cR2Z5qRSeXvWtVZTVMTzc8gFcNkM:
    CdmProductAssetVolatilityReturnTermsSchema,
  HecpRL1z9mNunKs8iVwbjdGKMKf8o5t6v16ewNozwrff:
    CdmProductCollateralAgencyRatingCriteriaSchema,
  '5WkYngyEgPaS9dUTxxGMq3Lc9q4xBSngbTULcPneCHJX#2':
    CdmProductCollateralAllCriteriaSchema,
  '27kXvi2AJ8RczV2TDskdBvamTYjcpKsMvGaWEaK1MdzX':
    CdmProductCollateralAlternativeToInterestAmountEnumSchema,
  '5WkYngyEgPaS9dUTxxGMq3Lc9q4xBSngbTULcPneCHJX#1':
    CdmProductCollateralAnyCriteriaSchema,
  E5PkDX7rWwMWZKVxDTd5mdo47J6SSfqABkRghDUpxQq:
    CdmProductCollateralAssetAgencyRatingSchema,
  D35f5Tau7LJ3BrBdddW7gQa6pokYHErEKWG9DTTMTdkC:
    CdmProductCollateralAssetCountryOfOriginSchema,
  '3kAVvgQQFXxUxQxRjjRcFLSpiGfJGa8FqRDiQtGc8EVw':
    CdmProductCollateralAssetMaturitySchema,
  ERoonNwWbGXFn4pCquXtETVVfsWr5ZsHf3CURD8PUQSH:
    CdmProductCollateralAverageTradingVolumeSchema,
  '7LAKR8WGxD9yDgWZLh76RT1z1M17gzWirhryZjYVaoMQ':
    CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema,
  '3gg8Df8TTZEC6pf8nbftbwA1BM6fiCLARC6SQa8zBZZT':
    CdmProductCollateralCheckEligibilityResultSchema,
  CMbZdR1wHnpwviTkU9fmf4tki9sWinxrSZWks1aEdhJu:
    CdmProductCollateralCollateralSchema,
  AbLoQQNACxdzPtEMoK5PXcunDMtaotFMqR1uTyZb3s8n:
    CdmProductCollateralCollateralAgreementFloatingRateSchema,
  '5WkYngyEgPaS9dUTxxGMq3Lc9q4xBSngbTULcPneCHJX#0':
    CdmProductCollateralCollateralCriteriaSchema,
  BXxQL7sRuDfcb845BAqVPTeQpvzy2bRtN8qnMsJACK68:
    CdmProductCollateralCollateralCriteriaBaseSchema,
  '47uMoNppS2Hcq6BdaKkWyCoHHwjZx6ZeqqbRY2cgCi4r':
    CdmProductCollateralCollateralInterestCalculationParametersSchema,
  EPzEEUE2z9dKyZzCmAW4y3RjMQoNyaTkCGiVYqTkpWfD:
    CdmProductCollateralCollateralInterestHandlingEnumSchema,
  Bjr7Yos67MUWjEZWrkWS2tEvEBnExqpWmM5cjKov61uA:
    CdmProductCollateralCollateralInterestHandlingParametersSchema,
  '5Sp9FXHFVYw7frBuLN5R8FS9N9G51A8Qcr78z6DTZPnb':
    CdmProductCollateralCollateralInterestNotificationSchema,
  GsFBjGKav7ci1HtW2ZbeCbtEmLmLbsoz9dFgitf5kTHJ:
    CdmProductCollateralCollateralInterestParametersSchema,
  Ce3ciQcLKDEJNBNLKJ7ZQ1woFjqogy7nsbLP99TxETXf:
    CdmProductCollateralCollateralMarginTypeEnumSchema,
  '8hWgiVw3Z4pR86PBv9214e4QhrokD1GQkXWEKYdrQ7Xe':
    CdmProductCollateralCollateralProvisionsSchema,
  DZVNm4GP1a1Vs3D9hXgk2tvtUToKxrwkmGmrJcM2kNK:
    CdmProductCollateralCollateralTreatmentSchema,
  GSjWmYnJWmuti33vdJxHGDSFHJugrsJ7cM3wCiay7Guc:
    CdmProductCollateralCollateralTypeEnumSchema,
  '6jPEeuHYwc7SYkDRExZS37FF7KdHg9uaHEasdRpFFvGN':
    CdmProductCollateralCollateralValuationTreatmentSchema,
  G115DdfxDj4CHzMSeZHcm923Rr9JELfKiG6pVf9ceVu6:
    CdmProductCollateralConcentrationLimitSchema,
  '39Lcut1tfx7H123gK9RhKe6u8q4N86cmBQMRivmHTo5y':
    CdmProductCollateralConcentrationLimitCriteriaSchema,
  HJgzHqypzct3pPWcZKXqKhLjrenSrJtV6UqsGfag12BN:
    CdmProductCollateralConcentrationLimitTypeEnumSchema,
  '2G3a7NgdwHUsNXY8WY6afyVj2ex78kmSBZ7yfp58JGaA':
    CdmProductCollateralContactElectionSchema,
  CJHTmJP1dLiharaGhw4PVPAFSmQY4VGXquwUwRu5ArAu:
    CdmProductCollateralCounterpartyOwnIssuePermittedSchema,
  '5zzZhAcrMrErBy2Xv4RB1B2KEJmb76bDKFnqhnWaMFgC':
    CdmProductCollateralCreditSupportAgreementTypeEnumSchema,
  '6r2vj9zxbYnH1oH2iVbRh9Svy77PVCBArmP4WEUVjekp':
    CdmProductCollateralDeliveryAmountSchema,
  Eq8n3kZZieduuUfLMpJqLPgN1h3SqM4UKTV9cdCD54Lb:
    CdmProductCollateralDeliveryAmountElectionEnumSchema,
  G7uiW62tU8ZEp154HMirF14igxnmokJoTp3RbgGSGvzQ:
    CdmProductCollateralDistributionAndInterestPaymentSchema,
  '74ZqfQyjiMoAp8Zf2AqBffQWhhB4atamZoVwmFKGhM2R':
    CdmProductCollateralDomesticCurrencyIssuedSchema,
  '9RU1DVTrXXNj5z35ccGRApiUJ1pdKay2RnssWqbsa5qP':
    CdmProductCollateralEligibilityQuerySchema,
  Dd4QK5kmBzsGcmhcqxkLLPiH2fBmE3acTHCBGWUW5Buq:
    CdmProductCollateralEligibleCollateralCriteriaSchema,
  '9fzErabMt8BTfWNrPwtuqQc2qNEWrLTRkNcRRhaQKdfL':
    CdmProductCollateralEligibleCollateralSpecificationSchema,
  Hy8P2u7KDZVD8sPZcv17g7mptdaVAVsWT9mKEbi2bWSF:
    CdmProductCollateralEligibleCollateralSpecificationInstructionSchema,
  '4meuCktw1FU4RPxCQDZJiER7pwjt3F4qWFP4AeaGwPM2':
    CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema,
  EQmduWyUz4nRgJ7wreWQ4eBSJ2hAt8nBDsWf1oSNgeR4:
    CdmProductCollateralIndependentAmountSchema,
  '8Gv1Qef23Mz4g1ohaQfw4qpqAEfyrSh8MP24i2eHPWCd':
    CdmProductCollateralInterestAmountApplicationSchema,
  F1uCnYCMDJC2Y8zz5exhHuQPRzZM1FpKguQdBMo3vii4:
    CdmProductCollateralIssuerAgencyRatingSchema,
  A8NLPcVdW1DpphmQmzMzcjNBNbAH2pGWgJKwDo3vPYz7:
    CdmProductCollateralIssuerCountryOfOriginSchema,
  GZhoGgrsFXSSpVpDCbuWSQryXHsbc4xTdtgf1dTWPUPH:
    CdmProductCollateralIssuerNameSchema,
  DhsgKp8L941omVnqTCh7TghSnGVehvPECHyu7RJV3WZV:
    CdmProductCollateralListingExchangeSchema,
  BeufGYcvdnG92TzbfkVByXuyaFrFsMh9oRPpcJSJDMXN:
    CdmProductCollateralListingSectorSchema,
  '5okT4PBEHijywnb7jBieEoVCyGTRkhzDmbMEDnxtpD92':
    CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema,
  '5WkYngyEgPaS9dUTxxGMq3Lc9q4xBSngbTULcPneCHJX#3':
    CdmProductCollateralNegativeCriteriaSchema,
  AMBUQNHCXi6XdCd6ShsWvqydCwqyR1LjyMiUGZjzHvsu:
    CdmProductCollateralRatingPriorityResolutionEnumSchema,
  HpBh6DxVn5k45kpY9oDbqGhBWE3eEphzgwottdc68x3B:
    CdmProductCollateralReturnAmountSchema,
  D7ewX9CVaqUAWhkR1EfPjAijh9p6UQe5xFiQDnKBFura:
    CdmProductCollateralSovereignAgencyRatingSchema,
  F39PbNpNQft3cYMpPHzn1u61UZ8VXryx2qsRbrCCYnWt:
    CdmProductCollateralSpecificAssetSchema,
  Dz3MiMnz2rTB4ZLx32vq9C8dXnxfvUTnX8brry1cDos8:
    CdmProductCollateralSubstitutionProvisionsSchema,
  JDTKqVSFgAW8D49b5dnvsCk1uam8HJqLTHTDgrFTMBA5:
    CdmProductCommonNotionalAdjustmentEnumSchema,
  '5n3DU8PA11nxzet1RS4oAJMsF4SCnmNLz42y6Yi4LqYe':
    CdmProductCommonScheduleAmountScheduleSchema,
  '9VuZT1q9y8HMV24KTiHrvnnkNBznHmHcHeoX9QgJSuw6':
    CdmProductCommonScheduleAveragingObservationListSchema,
  HXL6x5GboEmQeMmrmtmEQQdYkr271G2tDVBXpJxUZxmz:
    CdmProductCommonScheduleAveragingPeriodSchema,
  '5iALuSYExmWtctSi7Hq5NapM77ZtzZ5nmkxPC22Cz4ZM':
    CdmProductCommonScheduleCalculationPeriodSchema,
  HjEmRrvzUJGJ8GfKAGdbcnZbK68UnqsEfHnP7fQL2aXu:
    CdmProductCommonScheduleCalculationPeriodBaseSchema,
  Hn6pcJi5Y6a1kKY7ff5VjWCcWuYx4Fjbi27aKRmPKpqE:
    CdmProductCommonScheduleCalculationPeriodDataSchema,
  DfcGaXUQetcXghmMMauh7ikEza42JbwqRdRdyWcm1C6N:
    CdmProductCommonScheduleCalculationPeriodDatesSchema,
  ytstqNPphmXWb5ZTFeFxrGKxyp3SXuEhDFAEsbb8iLA:
    CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema,
  DW32pDb5aR7QPQPk2s5ybQJuzPvqzb6S2WMHyY7WLBP7:
    CdmProductCommonScheduleDateRelativeToPaymentDatesSchema,
  HjRBL4m9mTkjZ84WwVn8hiQbhY7uJxxQbkJKf1V7Fqtj:
    CdmProductCommonScheduleDateRelativeToValuationDatesSchema,
  '7Kho8N3YbG3eYyAjjUVNmpPq1xASqj3bfY7hNtffTMiQ':
    CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema,
  J1E3aP2gHFG6xXmDZbkh3v4aXuN62czNKzQgw9T41sdB:
    CdmProductCommonScheduleFxLinkedNotionalAmountSchema,
  C8dYtpaC5sApKFHdfeTUgJGSS65ZpXVFkVQe4mhNjoUi:
    CdmProductCommonScheduleFxLinkedNotionalScheduleSchema,
  '7nNj43B1u5wkoCzUNC1xJyS3yxbc4tAcr2rmBszM9rgw':
    CdmProductCommonScheduleInitialFixingDateSchema,
  '9dUxAKwefutKuBfGuYNrjooNVQNxzQHdyCXdCzhcU2fe':
    CdmProductCommonScheduleLagSchema,
  '5kML8V9qeDP2N3N3L173vbHKEbT1tjwLQ89bXgwhB2jf':
    CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema,
  '3dRUSDjJdgNWK1v7xMqD4sANMTcNwBMxpGLaLVPaZk4D':
    CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema,
  JDFk4bjDaXiaZiEkLkoPoa66bJWLrnTJB59D2KofE1yE:
    CdmProductCommonScheduleObservationDateSchema,
  G8BGDmT28hrybjeGtkHwYwXVcbPjYYasBgcNh8dzGSQ8:
    CdmProductCommonScheduleObservationDatesSchema,
  uAf3YUcjjEv6dWvvFKXj7tGWN2iYXUocYm17tdsVbyX:
    CdmProductCommonScheduleObservationScheduleSchema,
  '5hoFwtCWywpjW2iVxqcevJ5qtXxE46qvSVAb8NxpJke':
    CdmProductCommonScheduleObservationTermsSchema,
  BZaLBY48LVb4VwEue2bkVqqdLay2ixteJueEiGUx4bWC:
    CdmProductCommonScheduleParametricDatesSchema,
  AmMckQK6D6qnYkcaZ6whw5wA5uRbeevDC2UYCXTM2aN2:
    CdmProductCommonSchedulePaymentCalculationPeriodSchema,
  '53mGNaWEbqDyzs1WnqizJcci5WSeG5YDV6e97svgRLve':
    CdmProductCommonSchedulePaymentDatesSchema,
  '5ainWhfaXWmH8cuLAXt9iVt1xiJokPwZ2FBc2SYNGRMF':
    CdmProductCommonSchedulePaymentDateScheduleSchema,
  '4EzoEo3dUznVuJ5u3FRBicnYoijDtwyRj3XLQxEdE1Hn':
    CdmProductCommonSchedulePayRelativeToEnumSchema,
  '7phCnc6jaEQE2YU1kKRsCj2JBQMaraQWKWjXBrdBVpvE':
    CdmProductCommonScheduleRateScheduleSchema,
  '77tQujWvEohG7Fop3JyiQCJJA8KASrwjH1vVCtkmJwTj':
    CdmProductCommonScheduleResetDatesSchema,
  AF5YX5ckQEQZD9m6QJzHQVPjpFFBeLnKV7o2AHf2HpW:
    CdmProductCommonScheduleResetFrequencySchema,
  '3ZYqtSitUczzgy8NY3j1qRo5fJi2TtUC4AfsKAq6bs3V':
    CdmProductCommonScheduleResetRelativeToEnumSchema,
  AdgwjGxN8Rrfq1m5VuCpuBn9jCyJgn7Vd3s3JadTdKh3:
    CdmProductCommonScheduleStubCalculationPeriodAmountSchema,
  AFvjEnZ9xRKbS4LQzB8u8RvMwHeDXZJzX9LfN8boZZaP:
    CdmProductCommonScheduleStubPeriodSchema,
  Bd2wfrzKhpaf9nUMmBuPYnGMGoA62bhSG9dh2gRhGTsM:
    CdmProductCommonScheduleStubPeriodTypeEnumSchema,
  mzi7BeQoxeMVQi6CStJ1R2tCdfMrbveHTkBHR5SwwV6:
    CdmProductCommonScheduleWeeklyRollConventionEnumSchema,
  '5jbrKEdeaZCSfkppBxBVvnHFdgPyL4zSPXtnrrWGT1RD':
    CdmProductCommonScheduleWeightedAveragingObservationSchema,
  '8kXy6mAtBpPKDuMKN111aiWeETzWkqx2y6VoWvayDKYM':
    CdmProductCommonSettlementAssetFlowBaseSchema,
  '4avwUzMQg7QgQ85Cxki1idkaeph4h4ov71aawwtQYSUJ':
    CdmProductCommonSettlementCashflowSchema,
  '8Rk9dMMLbwctvUy8uebWcQUmWJNuVMGzc3W5A22AC1Mq':
    CdmProductCommonSettlementCashflowTypeSchema,
  BKWi3mBkKXPeANP5a7z72MQ6X647gnjA4wfAV1LNodBP:
    CdmProductCommonSettlementCashSettlementMethodEnumSchema,
  B8JUPo67P3HKCJkXYshgHzHpFcYXmZfFH56cPhdGtqBG:
    CdmProductCommonSettlementCashSettlementTermsSchema,
  E3H3DKjGJFhkYXRWqcd2cAUNArjh5GQ68X2os3cTkLHo:
    CdmProductCommonSettlementCommodityPriceReturnTermsSchema,
  HTgZGSb1e27dWDGjAyjnLiY2q5GXtcYk8LCnQBmSd3b6:
    CdmProductCommonSettlementComputedAmountSchema,
  FytyoK3ou5gtYSUvKB3BqJWUoTa8QTYTXXvUWzoS6mRJ:
    CdmProductCommonSettlementDeliverableObligationsSchema,
  '5iL9bNQZtovMdjf58xxBWQAkcVcWKsbnNommKPsLfwsZ':
    CdmProductCommonSettlementDeliveryMethodEnumSchema,
  '3WvaxijQwR1ELLMK9QtedoyNZ1wy9YZrGnGe2wvdpVWk':
    CdmProductCommonSettlementFixedPriceSchema,
  AYe9vJYb7zmVir5VZjyWNcw2oZjtbMSkbPB8y47sai6T:
    CdmProductCommonSettlementFxFixingDateSchema,
  G14P9maXfUePjqhHWmNFfQEWPG5NJ18iL3rpGBMoLyDZ:
    CdmProductCommonSettlementLoanParticipationSchema,
  '4LxF2iZVCWETVa5Sk6jK2WAVLX1SD7WaPtmgesb4xuBC':
    CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema,
  '4zZq26rs1RRNTjwdwvbyZZAbRe3y2EykE2PtTne7suWB':
    CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema,
  Dyqr7TA1HN5EcvzLV8Yzj2SDcBRhKaKqVGCBXkTfUDZZ:
    CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema,
  '71KycHWxsPTM5KKe67Bja1yPxhGo1n6v5vLCiyhTcJLV':
    CdmProductCommonSettlementPaymentDetailSchema,
  AenWDxTzeQmT3js78fHeb2TnPgcgjQAJhaMcrbiorVwL:
    CdmProductCommonSettlementPaymentDiscountingSchema,
  tgFBHmNbSSZ6ELyyAHYu8kZnc13EpuENqMFM5qRR7ti:
    CdmProductCommonSettlementPaymentRuleSchema,
  '23bSwnHsVtd3QbEh7Fv44kZJh9GqRgLVyncj1MnXEDQY':
    CdmProductCommonSettlementPayoutBaseSchema,
  u3kHHrzb2bwyGNqvzzSF451Viqd8Uo9SLDeWWJT67HB:
    CdmProductCommonSettlementPCDeliverableObligationCharacSchema,
  mbg9RAjY9BfmAiTUiScZ7m8HbTNjePvoDuhN9R2AbhR:
    CdmProductCommonSettlementPercentageRuleSchema,
  CBd7ZWKAnVWWTwFSHphamHTzqi86dtsgpe4aNTpHVHMe:
    CdmProductCommonSettlementPhysicalSettlementPeriodSchema,
  DwimPH5LrR64QgUrh2Wbhb7WgNxs9bZvJyKvRh4qHHLN:
    CdmProductCommonSettlementPhysicalSettlementTermsSchema,
  '51vGBKkgLH3NUCqwFpjmFLCT15MZshriveqeJPUJvZVZ':
    CdmProductCommonSettlementPricingDatesSchema,
  A6P3sUb9TyTHkzLFZSbiu6Ehk3sCead9tQVLZBqrBdAL:
    CdmProductCommonSettlementPrincipalPaymentSchema,
  '6ZdgPDgDd1WfACEQNiQTurhX1xdBtsoPkMNjRhDD9Myo':
    CdmProductCommonSettlementPrincipalPaymentsSchema,
  FTa2hjVcBewhuq9sdHydggSm1Sx6qSDWQcnLebVc6txc:
    CdmProductCommonSettlementPrincipalPaymentScheduleSchema,
  '5WCZDgKojV5T74sbEKYJkNxrtenFyXLvBbwicu8NTMvt':
    CdmProductCommonSettlementQuantityMultiplierSchema,
  '9H3s5nDTov6DTnnVBM5XaiAV2vZvPEep33DWccdc6mXq':
    CdmProductCommonSettlementResolvablePriceQuantitySchema,
  E2qUUo8XnSB9mMMhWkXkxcQEwJHg3ZJeuWY3g9JvNh6F:
    CdmProductCommonSettlementRollFeatureSchema,
  BiaVgS99xqeuwyZZeCRHf5dGNhdfHon2on2Q5p8kTqMC:
    CdmProductCommonSettlementScheduledTransferEnumSchema,
  FpxN3VskUMZNGXwcBhJWSdsDhusFAhwDZygPhqoPCB7z:
    CdmProductCommonSettlementSettlementBaseSchema,
  HNVHhf8uCMHeERTXMbuFjAfwGfoW74SpmFR9dZx4RuLJ:
    CdmProductCommonSettlementSettlementCentreEnumSchema,
  '3UpG3PQhfhG9bmZnQgsoceUaLRc1gSZXPo86uTkWL5xo':
    CdmProductCommonSettlementSettlementDateSchema,
  '9DLtb1CTwAuNnZMocFezNkQ1BC4LYa3VariRYDN18Jtc':
    CdmProductCommonSettlementSettlementProvisionSchema,
  BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g:
    CdmProductCommonSettlementSettlementTermsSchema,
  EpkUabFqidXXDAgkraPb7Y28utGyKp61fnqpNV6Zo54C:
    CdmProductCommonSettlementSettlementTypeEnumSchema,
  Gb5tAySG6hzoMinsErBsQTK9xxg6QhvgCELNWqAdCNFf:
    CdmProductCommonSettlementShapingProvisionSchema,
  '8fCWUFrCX8KP5KwBXgYptAmt5GoD1E1iS7wVQzGcuQYR':
    CdmProductCommonSettlementStandardSettlementStyleEnumSchema,
  GmLJv8qeAX5rVQDVXK5qq3o8no9UgiedzAoY5XuaBDm3:
    CdmProductCommonSettlementTransferSettlementEnumSchema,
  '3CnBUXCMLZ1zVGpJX8yeib6jVzgKNxUzxvbt7Tjqhicb':
    CdmProductCommonSettlementValuationDateSchema,
  HhUzniLwfmmctYZQDNVDFzmvgDRMd1yCTfWm2Ztz4VsK: CdmProductTemplateAsianSchema,
  FEmGevRHj9rp16wVgHUNFerrfjRqr2ApZ9pjc5Z2V257:
    CdmProductTemplateAssetLegSchema,
  DFBmDdBBi9J2wRAQN1Wyd2uzR2FW38H7WmqTecqpy3Wz:
    CdmProductTemplateAssetPayoutSchema,
  '7Cth9WrMG4PgVPHsC1qhKMqwFeBhAEQSz6QfPtxqVQFR':
    CdmProductTemplateAssetPayoutTradeTypeEnumSchema,
  '6fnDZS1zqAsqg6ScqF5Y7LEwCWQtuBpB621ZXfC9ocuy':
    CdmProductTemplateAutomaticExerciseSchema,
  Dm6X9rfSBnx7WqRtQ4eeZ3yyCpGqTHJWsE6vycZx4yix:
    CdmProductTemplateAveragingCalculationSchema,
  A3QMV3prJLC67MCSDV7KidzgurN6ZWZbxnXMwku4vf8g:
    CdmProductTemplateAveragingInOutEnumSchema,
  GYCi7D1mWinJfPvkAbuJK6RQVnMLU6jrdg2PwdjZVcJv:
    CdmProductTemplateAveragingStrikeFeatureSchema,
  CKW4kL4HmFUwvVHYa1fL21kzW7ALWAXnaHrVK5vXB2iM: CdmProductTemplateBarrierSchema,
  D9dLMq3bj6XLYoxFZUFfChf74VUAg1Lso4BteJXuB47B:
    CdmProductTemplateCalculationScheduleSchema,
  '4rPVwZGmjNZtENVruhkTXA82CaoU2YWh16iwHhYAPAnc':
    CdmProductTemplateCalendarSpreadSchema,
  BApNNpkEWkpGYmRsjYdSM2AQSRDGM9rcMKnHxtvv7U79:
    CdmProductTemplateCallingPartyEnumSchema,
  '5Xi9EijENBR3mHADb6Com912X7HCjaR8mJoCmXhKoaFA':
    CdmProductTemplateCancelableProvisionSchema,
  '71bRWBYtvfdtP8AxwkZMtMfJ2yr1QSyPJtEEsQYoyuit':
    CdmProductTemplateCancelableProvisionAdjustedDatesSchema,
  GL7kvfLULpeB9V9XXCdKe1UF2uxCtBADgHjSC5EXphAy:
    CdmProductTemplateCancellationEventSchema,
  '8TNFT6qjXdfZNgL4bunQri1ur1xvRxi49fozSfY6F39g':
    CdmProductTemplateCompositeSchema,
  '6eYoofdAibUdi9DT8tvNo7PNJF1DxZcM4UrQwinBs3mk':
    CdmProductTemplateConstituentWeightSchema,
  '2usZ27jDqNX8tocgcBm2aUtxwXsoxeBkCJ2eBKpUwPsz':
    CdmProductTemplateDividendTermsSchema,
  FwvvA4wHJfEtTVQrtYrZ9EdhXuVrvj2q9KzV3xAGqdSg:
    CdmProductTemplateEarlyTerminationEventSchema,
  AqTGNJjCgXeaAatBD9x6tUsHTuW6R9gAJ4eDSEJ3Yku3:
    CdmProductTemplateEarlyTerminationProvisionSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#9':
    CdmProductTemplateEconomicTermsSchema,
  '5UMaGhV37KZ5Gpu1UthKrqc9z14q9YG7nVZkbPUrBjNS':
    CdmProductTemplateEvergreenProvisionSchema,
  EaHGdmPRG13Uw734jEMLP199CRdDhtpeH1QrNpQSdRwc:
    CdmProductTemplateExerciseFeeSchema,
  AXSRiXzEVuh7RaYnHeTxPY8YPbDZhtpxbFYYuGYK7icP:
    CdmProductTemplateExerciseFeeScheduleSchema,
  '87nUue1ru1iHhXaB5EjL62TAsMV9t3vSvVB3X7XvwPH6':
    CdmProductTemplateExerciseNoticeSchema,
  FFAF593QjAu1fL8t6QJivSADdNRq7UjN3Ftas33vBa9h:
    CdmProductTemplateExerciseNoticeGiverEnumSchema,
  '5a1f8zsBnaT6JRJuJ3mwNA5EhwnrySGAijHK6TyE8NLv':
    CdmProductTemplateExercisePeriodSchema,
  '7ZmEamyrqfkeKiSkxZv72JoWTryvFUNimi9to4jsdAdd':
    CdmProductTemplateExerciseProcedureSchema,
  '5gJQwLbmDRFr1hrMPaZEsHFgWih7ce9ciXS2YMUGt55A':
    CdmProductTemplateExerciseTermsSchema,
  '6P2aTAXovARh1GhiM9Rj7rxmM3Wgom1Ur3VaTGQ2yYs2':
    CdmProductTemplateExpirationTimeTypeEnumSchema,
  '3peiQgwtbxXHcm2ukscW4r2QjxKFeFDrSfcckj5ZiYgs':
    CdmProductTemplateExtendibleProvisionSchema,
  '87JCfLTHiaGc1oeMQ6XxXkgfa3BhFmbR6Qa6z1Pq12Ng':
    CdmProductTemplateExtendibleProvisionAdjustedDatesSchema,
  '6Lzj9eE9Tmo7CMs1xMEw6e6rKAJWDhGygS1DoW2zm8i3':
    CdmProductTemplateExtensionEventSchema,
  '58Nc7PwTx9AzQa7nUpkuiG4LLJvrfjURJDYpr6975Pku':
    CdmProductTemplateFixedPricePayoutSchema,
  '4Evx6ctCQA9KW4zWZBuRVzGni9eknk1oQDCWfhxNfdg9':
    CdmProductTemplateFxFeatureSchema,
  '6eo2sKjpFosGead5TWCzCjjLBBK8ZkYk3NbSdBGcVdbZ': CdmProductTemplateKnockSchema,
  BV6rxiJFw1LMjpogdxDcwRjeUuJHDcR1ngiTtfUrN68U:
    CdmProductTemplateMandatoryEarlyTerminationSchema,
  Acs6ukfV3eCU91sJGg35wtJYCmsZtHywzXgw7C4nVMV7:
    CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema,
  J2rfZkkcmLdqaJVQuSM1CSyLgS3dHyc4H6odzzVhF4jw:
    CdmProductTemplateManualExerciseSchema,
  HD9EaJNPCVhqhC6j6B671JfBJy4KndNb3tfThuouvT3A:
    CdmProductTemplateMarginTypeEnumSchema,
  E8kNFVq5rjJaDyLo4StMphfzm1hmN8457CXWNFQVj2iH:
    CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema,
  B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P:
    CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema,
  '8eLP8HxgpSvj1vyxDJXMhDpMcQU696aKo5Uvz1mt9Q1S':
    CdmProductTemplateMultipleExerciseSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#5':
    CdmProductTemplateNonTransferableProductSchema,
  '6C7tBK3FPYoExviSwCvn8xbhCtRb4ZzoCViwrkrmXHDm':
    CdmProductTemplateOptionalEarlyTerminationSchema,
  E9tgtxzW2aKM5cXBuZ4HZEsYRbKqjQQpVyxRWYXeF6UU:
    CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema,
  DYoy14MajYdB4ZgJK3HD4oatK3E6aHEmpiJRfpit84QJ:
    CdmProductTemplateOptionExerciseStyleEnumSchema,
  '8NbBnoWUBC2RHr2XX7MrdT2qU4Nm4L5ZU4GHjeCXevBm':
    CdmProductTemplateOptionFeatureSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#4':
    CdmProductTemplateOptionPayoutSchema,
  '853fkTLxahq9EHHMikifwZEJBFuFzQ6cRXUnXBtQ6HPN':
    CdmProductTemplateOptionStrikeSchema,
  HNayhrMXPoix5Ra4zX7bVDNmVCGEAz1WAhVGbvtyHJTv:
    CdmProductTemplateOptionTypeEnumSchema,
  '4vdj6UFaQJsvfqnznBsJ2h4Z6niUa9pXKAY8W62wz5mz':
    CdmProductTemplatePartialExerciseSchema,
  BwWFicbdS15kQQwDYWi4dL1uT4UxHHhJiXdfZWBPB6hN:
    CdmProductTemplatePassThroughSchema,
  FoDT7cNJEYDkT5SzaBjzFL5dzMuykqTbTUBrJeog8V9M:
    CdmProductTemplatePassThroughItemSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#8':
    CdmProductTemplatePayoutSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#3':
    CdmProductTemplatePerformancePayoutSchema,
  '8YJvz5QvRRm82xb6wUCFzmm93hyr1TqxCZEbxmws5P2k':
    CdmProductTemplatePortfolioReturnTermsSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#0':
    CdmProductTemplateProductSchema,
  '3kkDCei4gB9WeTEYntYK2we8NCZRgMV3nhmntCnofjNo':
    CdmProductTemplateQuantoSchema,
  '9C5zpjoZUp6Eihc2QKup3wbtzjuP5CaafTPCjKUpsn1F':
    CdmProductTemplateRepoDurationEnumSchema,
  D3rQtJTo4bzbc48Z32EpDkkaMQ8P2EPJj4jYVkFW9mv4:
    CdmProductTemplateReturnTermsSchema,
  AKyQiSHvk3iKKhjrFNKn6eeQw1fNpNDUhvvdXjwEQgBa:
    CdmProductTemplateSchedulePeriodSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#6':
    CdmProductTemplateSettlementPayoutSchema,
  '5FY1FUfgFT4nN3Byvi6mYwPrpJ6JFpsc6yBQVo6V5tb7':
    CdmProductTemplateStrategyFeatureSchema,
  BSGk6VR88TWV1Lsta4e7x1ijunhFoiqohwUuzLeS33vR: CdmProductTemplateStrikeSchema,
  C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8:
    CdmProductTemplateStrikeScheduleSchema,
  EdZn1sevteq7kGVWdwa14uYRcUPtYs6wet585iBdhrMS:
    CdmProductTemplateStrikeSpreadSchema,
  '3doqr3EiMTivS3UTJcEVyjxNAVfAULrMtrVVvpoMSQW6':
    CdmProductTemplateTerminationProvisionSchema,
  GuammqmN4E6JpuxqmjDrpM1br1oAyFEH8Lgq5JE5Xxub:
    CdmProductTemplateTradableProductSchema,
  HwkEbgYkrYCDgT4YrxJHmaJVigftQBmkyttz9NLVtre6:
    CdmProductTemplateTradeLotSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#1':
    CdmProductTemplateTransferableProductSchema,
  '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#2':
    CdmProductTemplateUnderlierSchema,
  '2HyPHLVaQkkbEk1nPSUWuHzcwUoHHaswZETTWEMqk667': CdmRegulationAcctOwnrSchema,
  '7UPnxHK4wYWk3KMFvNiHvopsrFb2gEBSXMECGqASDCUx':
    CdmRegulationAddtlAttrbtsSchema,
  '7NrzAhcZZPnPXcaoc6TAeiuUhNdx9QZKbNvQfWchAQCB': CdmRegulationBuyrSchema,
  GX3jnfSNHL6BgdHRTTWZTg8N78Wrh9YMRRccSFcPAtz2:
    CdmRegulationDerivInstrmAttrbtsSchema,
  Fnt8FzF2E5APRTsK2Q6mZ95GFMfmF486RSAXuoCtU9Nh: CdmRegulationDocumentSchema,
  GsFjgJeyUw3xGYZTzAumXXcEU35cAZADYbx3i5Q6fzgk: CdmRegulationExctgPrsnSchema,
  JCRd3L6QAeLwgrfv7kRuGENGPRuufeLKZyiMQuazeMvu: CdmRegulationFinInstrmSchema,
  '4GeABE6e3Eg9DHMZqpnuZhJQuUZyMzsxrQ8mXyrUxrae':
    CdmRegulationFinInstrmGnlAttrbtsSchema,
  '4HPj6MaC8kgBBn54CkFPdJX3Coniqirfzy54SdFqVcva':
    CdmRegulationFinInstrmRptgTxRptSchema,
  '2r6PTV1nLw5QiudaGiKjZifJS6pf1AcgcybsBB63pHB9': CdmRegulationIdSchema,
  '4XMAwU7GzMy728GymYTeHzKmvysfNQQ6KkpGS2evxUG4': CdmRegulationIndxSchema,
  BazXu8fcC4SMrJz3j6VVr8B7Pj1RHtvuaFFJEGd3VMvv:
    CdmRegulationInvstmtDcsnPrsnSchema,
  'GCmS7M1BiCMbhWc3uBALbXAaaTnvFYyrjHWM8vVR3Y8K#0': CdmRegulationNewSchema,
  '9TKBcu8vKMFH94AHBDpED3r3pGsJDYH6jz91TtEmgw4P': CdmRegulationNmSchema,
  BNxwkALCq9ohknAYwcTpQ6QqvS11NejB3JmHqoMzmtDj: CdmRegulationOrdrTrnsmssnSchema,
  '5eTiWdFSftwxm1CSPDfGhxR6HweAMkRSoKmeKe44d7oX': CdmRegulationOthrSchema,
  '6zfsssMXw4XRMC7TGyBpZY1DAwmAtJ1wrvviano3dUQb#0': CdmRegulationPricSchema,
  B3r27V8s3urUxxafaEH6UCBqmktZknuup57bqpUK1UV2: CdmRegulationPrsnSchema,
  '3MKoSUmiANBqUyy2bWyGTScgLnZtgUUKbCbayp6zus4c': CdmRegulationQtySchema,
  '8YW6VUDPm2PADvh1mKtewrJwVec3547zdqj1nSK2M3vj': CdmRegulationRefRateSchema,
  '74bi8PEa5JSJWCSqig3PgQCFyzt6AAucMkhZCq25K7gc': CdmRegulationSchmeNmSchema,
  ABLakfG2pApNYjvYZ9eGZqBvQpEMyXy1HNYsWfAHSgbP: CdmRegulationSellrSchema,
  '56QXk83sUzaPUrbrd3ueQnVzYeb64ibHKN6w7G3N2xxD': CdmRegulationSnglSchema,
  GYS1s6xM5pyck83Jd1qhfAW9kPfQ8SzUw4MH5cHNXh4e: CdmRegulationSwpSchema,
  GwwpJdK3DDwf9FUVDdcC22vjoNtp2VtJ4ie8Jno7qTse: CdmRegulationSwpInSchema,
  FPM2G7A95NYqpBbz5kCCRmh7qRnFM5SqwurTX74FLcCv: CdmRegulationSwpOutSchema,
  '9ydTVW4jBmxo9hRtFQ75CPbJBiCj9kUyNCm5QwHyFMjd': CdmRegulationTermSchema,
  'GCmS7M1BiCMbhWc3uBALbXAaaTnvFYyrjHWM8vVR3Y8K#1': CdmRegulationTxSchema,
  RGUPkLhQETHkMrFxMrruEoSnWtn6AdyUJivR8cJGtxF: CdmRegulationUndrlygInstrmSchema,
  HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n:
    ComRosettaModelFieldWithMetaStringSchema,
  '3dJskTcZWkGvVvc2CnvQkC12gkgaSGjZ8ix7XR2XxxjR':
    ComRosettaModelLibMetaKeySchema,
  Ha6Tqhjz1UHFLv8HHkvJRZfyUyGhWefXqcUSiETMrniq:
    ComRosettaModelLibMetaReferenceSchema,
  DWEaxDaREtLrXbX5ueFbRfuQDdqm5uLR1YKxgfDm1Ehv:
    ComRosettaModelMetafieldsMetaFieldsSchema,
  '6r7X1t4mk8pzhtyij1QDYaoMrseQxsRdHuJTw8dJaEk2':
    ComRosettaModelMetafieldsReferenceWithMetaStringSchema,
};
