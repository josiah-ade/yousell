"use client";
import Input from "@/components/Input";
import SelectReact from "@/components/Select/ReactSelect";
import { options, stateLocation } from "@/constants/Select";
import FilterSearch from "@/lib/filter/filter-search";
import { Search } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import * as NProgress from "nprogress";

function SearchSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state with search params or default values
  const [search, setSearch] = useState<string>(searchParams.get("q") || "");
  const [category, setCategory] = useState<string>(
    searchParams.get("category") || "all"
  );
  const [location, setLocation] = useState<string>(
    searchParams.get("location") || "all"
  );

  useEffect(() => {
    // Update state when searchParams changes
    const newCategory = searchParams.get("category") || "all";
    const newSearch = searchParams.get("q") || "";
    const newLocation = searchParams.get("location") || "all";

    // Set the state
    setCategory(newCategory);
    setSearch(newSearch);
    setLocation(newLocation);
  }, [searchParams]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    NProgress.start();
    router.push(FilterSearch(category, location, search));
  };

  return (
    <div className="search__section__container d-flex2 w-100">
      <form onSubmit={handleSubmit} className="w-100 d-flex2">
        <div className="search__section__container__bg">
          <Grid container spacing={2} className="grid__container__bg">
            <Grid xs={6} sm={6} md={4} lg={3}>
              <SelectReact
                options={options}
                title="Category"
                selected={category}
                onChange={(e) =>
                  setCategory((e.target as HTMLSelectElement).value)
                }
              />
            </Grid>
            <Grid xs={6} sm={6} md={4} lg={3}>
              <SelectReact
                options={stateLocation}
                title="Location"
                selected={location}
                onChange={(e) =>
                  setLocation((e.target as HTMLSelectElement).value)
                }
              />
            </Grid>
            <Grid xs={6} sm={6} md={4} lg={3}>
              <Input
                className="search__input mgt-10"
                placeholder="Your Search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>
            <Grid xs={6} sm={6} md={12} lg={3}>
              <button type="submit" className="btn_sm d-flex2 w-100 mgt-10">
                <Search /> Search
              </button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}

export default SearchSection;
