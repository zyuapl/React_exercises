import { useState } from "react";

export function useFilter<T, K extends keyof T>(
    collection: T[],
    searchField: K
) {
    const [search, setSearch] = useState("");

    function filter(collection: T[]) {
        if (!search) return collection;

        return collection.filter((item) => {
            const field = item[searchField];
            if (typeof field === "string") {
                return field.toLowerCase().includes(search.toLowerCase());
            }
        });
    }
    return {
        search,
        setSearch,
        filter: filter(collection)
    };
}
