import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  parent?: SortOrder;
  updatedAt?: SortOrder;
};
