import axios from "axios";

import { useFormat } from "../utils/useFormat";
import usersJson from "@/json/users";

export function usersService() {
  const { formatUserParams } = useFormat();

  const fetchUsersFromJson = async () => {
    const users = await Promise.resolve(usersJson);

    return users.map(formatUserParams);
  };

  const fetchUsersFromApi = async () => {
    const { data: users } = await axios.get("https://api-name-request");

    return users.map(formatUserParams);
  };

  return {
    fetchUsersFromJson,
    fetchUsersFromApi,
  };
}
