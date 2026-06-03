export const CdmBaseDatetimeTimeZone: Record<string, unknown> = {
  description:
    'The time alongside with the timezone location information. This class makes use of the FpML TimezoneLocation construct.\n',
  location: {
    description:
      'FpML specifies the timezoneLocationScheme by reference to the Time Zone Database (a.k.a. tz database) maintained by IANA, the Internet Assigned Numbers Authority.\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  name: 'cdm/base/datetime/TimeZone',
  time: {
    description: 'The observation time.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
