import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "parent";

export const CategoryTitle = (record: TCategory): string => {
  return record.parent?.toString() || String(record.id);
};
