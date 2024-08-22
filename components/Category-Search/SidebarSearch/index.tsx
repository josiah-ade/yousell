import { categories } from "@/constants/Select";
import Filter from "@/lib/filter";
import getSymbolFromCurrency from "currency-symbol-map";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import replaceString from "replace-string";

interface Props {
  name: string;
  value: string;
}
function SidebarSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const [filterCategories, setFilterCategories] = useState<string[]>([]);
  const [locationCategories, setLocationCategories] = useState<string[]>([]);

  const getMin = searchParams.get("min");
  const getMax = searchParams.get("max");
  const gType = searchParams.get("category") as string;
  const gLocation = searchParams.get("location") as string;
  const gQuery = searchParams.get("q") as string;

  const [min, setMin] = useState<string | number>(getMin ?? 0);
  const [max, setMax] = useState<string | number>(getMax ?? 0);
  const [getType, setGetType] = useState<string | null>(gType);
  const [getTypeLocation, setGetTypeLocation] = useState<string | null>(
    gLocation
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueText = e.target.value;
    valueText = replaceString(valueText.toLowerCase(), " ", "-");
    setGetType(valueText);

    if (e.target.checked) {
      setFilterCategories([valueText]);
    } else {
      setFilterCategories(filterCategories.filter((a) => a !== valueText));
    }
  };

  const isChecked = (data: string) => filterCategories.includes(data);

  useEffect(() => {
    if (getType) {
      setFilterCategories([getType]);
      setLocationCategories([gLocation]);
    }
  }, [getType]);

  useEffect(() => {
    if (gType !== getType) {
      setFilterCategories([gType]);
      setLocationCategories([gLocation]);
    }
  }, [gType]);

  return (
    <div className="card card_xs">
      <div className="categories__p__o">
        <div className="categories__page__overview__div">
          <h5>Categories</h5>
          <hr className="rounded2"></hr>
        </div>
        {categories.map((data, index) => (
          <label className="input__div d-flex3" key={index}>
            <input
              type="checkbox"
              value={data.value}
              onChange={handleChange}
              checked={isChecked(data.value)}
            />
            <p>{data.name}</p>
          </label>
        ))}
      </div>
      <div className="categories__p__o">
        <div className="categories__page__overview__div">
          <h5>Price Range</h5>
          <hr className="rounded2"></hr>
        </div>
        <div className="categories__p__opricerange d-flex">
          <div className="cpopricerange">
            <p>min</p>
            <div className="cpopricerange_o d-flex2">
              <span>{getSymbolFromCurrency("NGN")}</span>
              <input
                type="number"
                className="form-control"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
          </div>
          <span className="cpopricerangespan">-</span>
          <div className="cpopricerange">
            <p>max</p>
            <div className="cpopricerange_o d-flex2">
              <span>{getSymbolFromCurrency("NGN")}</span>
              <input
                type="number"
                className="form-control"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="filter__apply w-100">
        <Link
          href={Filter(
            replaceString(pathName, "/", ""),
            filterCategories,
            locationCategories,
            min,
            max,
            gQuery
          )}
          className="btn_sm d-flex2 w-100"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

export default SidebarSearch;
