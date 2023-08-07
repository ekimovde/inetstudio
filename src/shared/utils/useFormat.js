import * as uuid from "uuid";

import usersJson from "@/json/users";

import { generateAvatarUrl } from "@/shared/utils/generateAvatar";
import { generateRandomNumber } from "@/shared/utils/generateRandomNumber";

import {
  FIXED_COUNTRIES,
  FIXED_VUETIFY_HEADER_NAME,
  FIXED_VUETIFY_DIVIDER_NAME,
} from "@/shared/repository/constants";

export function useFormat() {
  const formatUserParams = (payload, index) => {
    const countryIndex = generateRandomNumber(0, FIXED_COUNTRIES.length - 1);

    const isPayloadHeader = !!payload[FIXED_VUETIFY_HEADER_NAME];
    const isPayloadDivider = !!payload[FIXED_VUETIFY_DIVIDER_NAME];

    return isPayloadHeader || isPayloadDivider
      ? payload
      : {
          id: uuid.v4(),
          country: FIXED_COUNTRIES[countryIndex],
          avatar: generateAvatarUrl(index + 1),
          score: generateRandomNumber(),
          title: payload.title || usersJson[index].title,
          subtitle: payload.subtitle || usersJson[index].subtitle,
          address: payload.address || usersJson[index].address,
        };
  };

  return {
    formatUserParams,
  };
}
