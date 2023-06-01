import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const newQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete newQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: newQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      className={`
  flex flex-col items-center justify-between gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
    ${
      selected
        ? "text-neutral-800 border-neutral-800"
        : "text-neutral-500 border-transparent"
    }
  `}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
